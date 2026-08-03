// Module: m7c (lines 165894-165975)
  var m7c = S(() => {
    VYc();
    s7c();
    G9i();
    ((lto = x(require("process"))),
      (rKi = require("buffer")),
      (nKi = x(require("path"))),
      (d7c = require("url")),
      (p7c = require("util")),
      (oKi = x(require("child_process"))),
      (cto = x(require("fs/promises"))),
      (zAg = p7c.promisify(oKi.default.execFile)),
      (tKi = nKi.default.dirname(
        d7c.fileURLToPath(
          "file:///D:/a/claude-cli-internal/claude-cli-internal/node_modules/open/index.js",
        ),
      )),
      (a7c = nKi.default.join(tKi, "xdg-open")),
      ({ platform: qZt, arch: l7c } = lto.default));
    est = {};
    Zit(est, "chrome", () =>
      uto(
        {
          darwin: "google chrome",
          win32: "chrome",
          linux: ["google-chrome", "google-chrome-stable", "chromium"],
        },
        {
          wsl: {
            ia32: "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe",
            x64: [
              "/mnt/c/Program Files/Google/Chrome/Application/chrome.exe",
              "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe",
            ],
          },
        },
      ),
    );
    Zit(est, "brave", () =>
      uto(
        {
          darwin: "brave browser",
          win32: "brave",
          linux: ["brave-browser", "brave"],
        },
        {
          wsl: {
            ia32: "/mnt/c/Program Files (x86)/BraveSoftware/Brave-Browser/Application/brave.exe",
            x64: [
              "/mnt/c/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe",
              "/mnt/c/Program Files (x86)/BraveSoftware/Brave-Browser/Application/brave.exe",
            ],
          },
        },
      ),
    );
    Zit(est, "firefox", () =>
      uto(
        {
          darwin: "firefox",
          win32: String.raw`C:\Program Files\Mozilla Firefox\firefox.exe`,
          linux: "firefox",
        },
        { wsl: "/mnt/c/Program Files/Mozilla Firefox/firefox.exe" },
      ),
    );
    Zit(est, "edge", () =>
      uto(
        {
          darwin: "microsoft edge",
          win32: "msedge",
          linux: ["microsoft-edge", "microsoft-edge-dev"],
        },
        {
          wsl: "/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
        },
      ),
    );
    Zit(est, "browser", () => "browser");
    Zit(est, "browserPrivate", () => "browserPrivate");
    JAg = YAg;
  });
