"""Interval-constraint feasibility for weights (b=%/M CW, c=%/M CR, d=%/M OUT).
Fresh readings only (first of each resetsAt group). For each pair i<j with lag L:
  p_j - p_i - 1 < b*dCW + c*dCR + d*dOUT < p_j - p_i + 1   (displayed % is an integer floor/round)
CW = cw5m + 1.6*cw1h (1h write priced 2.0 vs 1.25 at API)."""
import numpy as np
from datetime import timedelta
from tally import messages, readings
ms = messages(); rd = readings()
fresh, seen = [], set()
for r in rd:
    if r[3] not in seen: seen.add(r[3]); fresh.append(r)
print("fresh readings:", " ".join("%s=%d" % (r[0].strftime("%H:%M:%S"), r[1]) for r in fresh))
def cum(t):
    s = np.zeros(3)
    for m in ms:
        if m["t"] <= t: s += [m["cw5m"] + 1.6*m["cw1h"], m["cr"] + m["inp"], m["out"]]
    return s / 1e6
b = np.linspace(5, 60, 111)[:, None, None]      # %/M CW
c = np.linspace(0, 1.5, 151)[None, :, None]     # %/M CR
d = np.linspace(5, 150, 146)[None, None, :]     # %/M OUT
for TOL, L in [(1.4,0),(1.4,10),(1.4,20),(1.6,0),(1.6,30)]:
    print("TOL", TOL)
    C = [cum(r[0] - timedelta(seconds=L)) for r in fresh]
    ok = np.ones((b.size, c.size, d.size), bool)
    for i in range(len(fresh)):
        for j in range(i+1, len(fresh)):
            dd = C[j] - C[i]; dp = fresh[j][1] - fresh[i][1]
            v = b*dd[0] + c*dd[1] + d*dd[2]
            ok &= (v > dp - TOL) & (v < dp + TOL)
    n = ok.sum()
    if n == 0:
        print("lag %2ds: NO feasible weights" % L); continue
    B, Cc, D = np.nonzero(ok)
    bb, cc, dv = b.ravel()[B], c.ravel()[Cc], d.ravel()[D]
    print("lag %2ds: feasible pts=%d | 1%% = CW %3.0f-%3.0fK | CR %s | OUT %4.1f-%4.1fK | OUT/CW %.1f-%.1f | CR/CW 1/%s" % (
        L, n, 1e3/bb.max(), 1e3/bb.min(),
        ("%.1fM-inf" % (1/cc.max())) if cc.min() == 0 else ("%.1f-%.1fM" % (1/cc.max(), 1/cc.min())),
        1e3/dv.max(), 1e3/dv.min(), (dv/bb).min(), (dv/bb).max(),
        "%.0f-%s" % ((bb/np.maximum(cc,1e-9)).min(), "inf" if cc.min()==0 else "%.0f" % (bb/cc).max())))
    # API hypothesis check: c/b = 0.08, d/b = 4 (5m write)
    api = ok[:, :, :] & (np.abs(c/b - 0.08) < 0.02) & (np.abs(d/b - 4) < 0.5)
    print("         API-ratio weights feasible? %s" % bool(api.any()))
