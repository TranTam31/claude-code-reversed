"""Token tally for the usage survey (run 2).
Usage: python tally.py [summary|readings|msgs|check]
"""
import json, os, sys, glob, re
from datetime import datetime, timezone

START = "2026-10-01T04:41:00Z"
ROOT = os.path.expanduser("~/.claude/projects")
MONITOR = "1269345f-cd02-4e5b-b027-db7bef74ca00"
MON_FILE = os.path.join(ROOT, "C--Users-hahah-Documents-claude-code-reversed", MONITOR + ".jsonl")


def ts(s):
    return datetime.fromisoformat(s.replace("Z", "+00:00"))


T0 = ts(START)


def messages():
    msgs = {}
    for f in glob.glob(os.path.join(ROOT, "**", "*.jsonl"), recursive=True):
        if os.path.getmtime(f) < T0.timestamp():
            continue
        src = "monitor" if os.path.normpath(f) == os.path.normpath(MON_FILE) else (
            "sub:" + os.path.basename(f)[6:14] if "subagents" in f else "other:" + os.path.basename(f)[:8])
        with open(f, encoding="utf-8") as fh:
            for line in fh:
                try:
                    e = json.loads(line)
                except Exception:
                    continue
                m = e.get("message")
                if not isinstance(m, dict) or m.get("role") != "assistant" or "usage" not in m:
                    continue
                if m.get("model") == "<synthetic>":
                    continue
                t = ts(e["timestamp"])
                if t < T0:
                    continue
                mid = m.get("id")
                u = m["usage"]
                cur = msgs.get(mid)
                if cur is None:
                    msgs[mid] = cur = {"id": mid, "src": src, "model": m.get("model"), "t": t, "u": u,
                                       "stop": m.get("stop_reason")}
                if t > cur["t"]:
                    cur["t"] = t
                if (u.get("output_tokens") or 0) >= (cur["u"].get("output_tokens") or 0):
                    cur["u"] = u
                if m.get("stop_reason"):
                    cur["stop"] = m.get("stop_reason")
    out = []
    for c in msgs.values():
        u = c["u"]
        cc = u.get("cache_creation") or {}
        cw = u.get("cache_creation_input_tokens") or 0
        c.update(inp=u.get("input_tokens") or 0, cw=cw,
                 cw1h=cc.get("ephemeral_1h_input_tokens", 0) or 0,
                 cw5m=cc.get("ephemeral_5m_input_tokens", cw) or 0,
                 cr=u.get("cache_read_input_tokens") or 0, out=u.get("output_tokens") or 0)
        out.append(c)
    out.sort(key=lambda c: c["t"])
    return out


def readings():
    res = []
    with open(MON_FILE, encoding="utf-8") as fh:
        for line in fh:
            if "5-hour limit" not in line or '"tool_result"' not in line:
                continue
            e = json.loads(line)
            if e.get("type") != "user":
                continue
            txt = json.dumps(e["message"]["content"])
            p5 = re.search(r'5-hour limit\\\\?"[^%]*?percentUsed\\\\?": (\d+)', txt)
            pw = re.search(r'Weekly[^%]*?percentUsed\\\\?": (\d+)', txt)
            ra = re.search(r'resetsAt\\?": \\?"([^"\\]+)', txt)
            if p5:
                res.append((ts(e["timestamp"]), int(p5.group(1)), int(pw.group(1)) if pw else None, ra.group(1) if ra else None))
    return res


def sums(ms, a=None, b=None, src=None):
    s = dict(n=0, inp=0, cw5m=0, cw1h=0, cr=0, out=0)
    for m in ms:
        if a and m["t"] < a: continue
        if b and m["t"] >= b: continue
        if src and not m["src"].startswith(src): continue
        s["n"] += 1
        for k in ("inp", "cw5m", "cw1h", "cr", "out"):
            s[k] += m[k]
    return s


def fmt(s):
    return "n=%d in=%d cw5=%d cw1h=%d cr=%d out=%d" % (s["n"], s["inp"], s["cw5m"], s["cw1h"], s["cr"], s["out"])


if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else "summary"
    ms = messages()
    rd = readings()
    if cmd == "summary":
        print("all     ", fmt(sums(ms)))
        print("monitor ", fmt(sums(ms, src="monitor")))
        print("sub     ", fmt(sums(ms, src="sub")))
        print("other   ", fmt(sums(ms, src="other")))
        last = [r for r in rd]
        # tokens since last jump
        jumps = [rd[i] for i in range(1, len(rd)) if rd[i][1] != rd[i - 1][1]]
        if jumps:
            print("since last jump", jumps[-1][0].strftime("%H:%M:%S"), fmt(sums(ms, a=jumps[-1][0])))
        print("readings:", " ".join("%s=%d/%s" % (r[0].strftime("%H:%M:%S"), r[1], r[2]) for r in rd[-6:]))
    elif cmd == "readings":
        for r in rd:
            print(r[0].isoformat(), r[1], r[2], r[3])
    elif cmd == "msgs":
        for m in ms:
            print(m["t"].strftime("%H:%M:%S"), m["src"], m["model"], m["inp"], m["cw5m"], m["cw1h"], m["cr"], m["out"], m["stop"])
    elif cmd == "check":
        bad = [m for m in ms if not m["stop"]]
        print("messages:", len(ms), "without stop_reason:", len(bad))
        for m in bad:
            print(" ", m["t"].isoformat(), m["src"], m["out"])
