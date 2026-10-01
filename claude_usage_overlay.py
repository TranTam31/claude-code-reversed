import os
import json
import tkinter as tk

PROJECTS_DIR = os.path.expanduser("~/.claude/projects")
POLL_MS = 1000


class UsageOverlay:
    def __init__(self):
        self.root = tk.Tk()
        self.root.title("Claude Usage")
        self.root.overrideredirect(True)
        self.root.wm_attributes("-topmost", True)
        self.root.wm_attributes("-alpha", 0.88)
        self.root.configure(bg="black")
        self.label = tk.Label(
            self.root,
            bg="black",
            fg="#39ff14",
            font=("Consolas", 11),
            justify="left",
            anchor="w",
            padx=10,
            pady=6,
        )
        self.label.pack()
        self.label.config(text="Claude Usage\n(waiting for activity...)\n\nright-click: quit")
        self._drag_x = 0
        self._drag_y = 0
        self.root.bind("<ButtonPress-1>", self._start_drag)
        self.root.bind("<B1-Motion>", self._do_drag)
        self.root.bind("<Button-3>", lambda e: self.root.destroy())
        sw = self.root.winfo_screenwidth()
        self.root.geometry(f"+{sw - 240}+20")
        self.current_file = None
        self.pos = 0
        self._poll()

    def _start_drag(self, event):
        self._drag_x = event.x
        self._drag_y = event.y

    def _do_drag(self, event):
        x = self.root.winfo_x() + event.x - self._drag_x
        y = self.root.winfo_y() + event.y - self._drag_y
        self.root.geometry(f"+{x}+{y}")

    def _latest_jsonl(self):
        best_path = None
        best_time = 0
        try:
            for root, _, files in os.walk(PROJECTS_DIR):
                for name in files:
                    if not name.endswith(".jsonl"):
                        continue
                    path = os.path.join(root, name)
                    try:
                        mtime = os.path.getmtime(path)
                    except OSError:
                        continue
                    if mtime > best_time:
                        best_time = mtime
                        best_path = path
        except OSError:
            pass
        return best_path

    def _poll(self):
        target = self._latest_jsonl()
        if target != self.current_file:
            self.current_file = target
            self.pos = 0
        if self.current_file:
            self._tail(self.current_file)
        self.root.after(POLL_MS, self._poll)

    def _tail(self, path):
        try:
            size = os.path.getsize(path)
        except OSError:
            return
        if size < self.pos:
            self.pos = 0
        try:
            with open(path, "r", encoding="utf-8") as fh:
                fh.seek(self.pos)
                data = fh.read()
                self.pos = fh.tell()
        except OSError:
            return
        last_model = None
        last_usage = None
        for line in data.splitlines():
            line = line.strip()
            if not line:
                continue
            try:
                event = json.loads(line)
            except json.JSONDecodeError:
                continue
            if event.get("type") != "assistant":
                continue
            message = event.get("message") or {}
            usage = message.get("usage")
            if not usage:
                continue
            last_model = message.get("model")
            last_usage = usage
        if last_usage:
            self._render(last_model, last_usage)

    def _render(self, model, usage):
        in_t = usage.get("input_tokens") or 0
        out_t = usage.get("output_tokens") or 0
        read_t = usage.get("cache_read_input_tokens") or 0
        write_t = usage.get("cache_creation_input_tokens") or 0
        total_in = in_t + read_t + write_t

        def k(n):
            return f"{n / 1000:.1f}k"

        text = (
            f"Claude Usage  [{model or '?'}]\n"
            f"  in    {k(in_t)}\n"
            f"  out   {k(out_t)}\n"
            f"  read  {k(read_t)}\n"
            f"  write {k(write_t)}\n"
            f"  tong in {k(total_in)}"
        )
        self.label.config(text=text)


if __name__ == "__main__":
    UsageOverlay().root.mainloop()
