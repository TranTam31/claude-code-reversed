#!/usr/bin/env python3
"""
Local edit+save server for a Claude Design canvas artifact (e.g. todo-app.html).

Why this exists
---------------
The design-canvas HTML saves itself by calling `window.claude.self.publish(html)`
- a "capability" that only the Claude Artifact runtime injects. Opened from
file:// there is no such object, so the editor drops into read-only mode.

This server fakes exactly that one capability:
  * When it serves the page, it injects a tiny <script> that defines
    `window.claude.self.publish(fullHtml)`.
  * `publish` POSTs the full new page back to `/save`, and the server writes it
    straight to the file on disk.

The editor's real save path builds the entire page as a string
(`re({title,content,comments})`) and hands it to `publish`, so what lands on
disk is a clean, standalone, still-publishable artifact - the injected shim is
NOT part of it (it is added again only at serve time).

Usage
-----
  python serve_local.py [file] [--port 8777] [--no-open]

Then open the printed URL, edit, and hit Save. Ctrl+C to stop.
A one-time backup `<file>.bak` is written before the first save.
"""

import argparse
import http.server
import os
import shutil
import sys
import threading
import webbrowser

SHIM = """<script>
/* injected by serve_local.py - provides the self-publish capability locally */
(function () {
  window.claude = window.claude || {};
  async function publish(html) {
    var res = await fetch('/save', {
      method: 'POST',
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
      body: html
    });
    if (!res.ok) {
      var msg = await res.text().catch(function () { return ''; });
      throw { code: 'upstream_error', message: 'local save failed (' + res.status + ') ' + msg };
    }
    return { ok: true };
  }
  var self = { publish: publish };
  window.claude.self = self;
  // Some code paths request a capability via window.claude.use('self') instead
  // of reading window.claude.self directly; support both.
  if (typeof window.claude.use !== 'function') {
    window.claude.use = function (name) {
      return Promise.resolve(name === 'self' ? self : window.claude[name] || null);
    };
  }
  console.info('[serve_local] self-publish capability installed - saving writes to disk.');
})();
</script>
"""


def inject_shim(html: str) -> str:
    """Insert the shim so it runs before the editor bundle (#appifact-app)."""
    marker = "<head>"
    idx = html.find(marker)
    if idx == -1:
        # Fallback: prepend (still before the body-level bundle).
        return SHIM + html
    cut = idx + len(marker)
    return html[:cut] + "\n" + SHIM + html[cut:]


def make_handler(target_file: str, root_dir: str):
    backup_done = {"v": False}

    class Handler(http.server.SimpleHTTPRequestHandler):
        def __init__(self, *a, **kw):
            super().__init__(*a, directory=root_dir, **kw)

        def log_message(self, fmt, *args):
            sys.stderr.write("  " + (fmt % args) + "\n")

        def _serve_main(self):
            with open(target_file, "r", encoding="utf-8") as f:
                html = f.read()
            body = inject_shim(html).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            self.wfile.write(body)

        def do_GET(self):
            path = self.path.split("?", 1)[0]
            main = "/" + os.path.basename(target_file)
            if path in ("/", main):
                self._serve_main()
                return
            # Everything else (support.js, vendor/*, dc.html, ...) served static.
            super().do_GET()

        def do_POST(self):
            if self.path.split("?", 1)[0] != "/save":
                self.send_error(404, "Not Found")
                return
            length = int(self.headers.get("Content-Length", 0))
            data = self.rfile.read(length)
            try:
                text = data.decode("utf-8")
                if "<!doctype html>" not in text[:200].lower():
                    raise ValueError("payload does not look like a full HTML page")
                if not backup_done["v"] and os.path.exists(target_file):
                    shutil.copy2(target_file, target_file + ".bak")
                    backup_done["v"] = True
                    sys.stderr.write("  [backup] wrote " + target_file + ".bak\n")
                tmp = target_file + ".tmp"
                with open(tmp, "w", encoding="utf-8", newline="") as f:
                    f.write(text)
                os.replace(tmp, target_file)
                sys.stderr.write("  [saved] " + str(len(data)) + " bytes -> " + target_file + "\n")
            except Exception as e:  # noqa: BLE001
                self.send_error(500, "save failed: " + str(e))
                return
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(b'{"ok":true}')

    return Handler


def main():
    ap = argparse.ArgumentParser(description="Local edit+save server for a Claude Design canvas artifact.")
    ap.add_argument("file", nargs="?", default=None, help="HTML artifact to serve (default: todo-app.html next to this script)")
    ap.add_argument("--port", type=int, default=8777)
    ap.add_argument("--host", default="127.0.0.1")
    ap.add_argument("--no-open", action="store_true", help="do not auto-open the browser")
    args = ap.parse_args()

    script_dir = os.path.dirname(os.path.abspath(__file__))

    def resolve(name: str) -> str:
        """Prefer the path as given (relative to CWD); fall back to next to the script."""
        cand = os.path.abspath(name)
        if os.path.isfile(cand):
            return cand
        beside = os.path.join(script_dir, name)
        if os.path.isfile(beside):
            return beside
        return cand  # keep the CWD-relative path for the error message

    target = resolve(args.file if args.file else os.path.join(script_dir, "todo-app.html"))
    if not os.path.isfile(target):
        sys.exit(
            "File not found: " + target
            + "\nTip: pass the file explicitly, e.g.\n"
            + '  python "' + os.path.join(script_dir, "serve_local.py") + '" '
            + '"' + os.path.join(script_dir, "todo-app.html") + '"'
        )
    root = os.path.dirname(target)

    handler = make_handler(target, root)
    httpd = http.server.ThreadingHTTPServer((args.host, args.port), handler)
    url = "http://{}:{}/{}".format(args.host, args.port, os.path.basename(target))

    print("Serving : " + target)
    print("Open    : " + url)
    print("Save     -> overwrites the file on disk (first save keeps a .bak)")
    print("Ctrl+C to stop.\n")

    if not args.no_open:
        threading.Timer(0.6, lambda: webbrowser.open(url)).start()
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")
        httpd.shutdown()


if __name__ == "__main__":
    main()
