import numpy as np
from datetime import datetime, timedelta
from tally import messages
ms = messages()
T = lambda s: datetime.fromisoformat("2026-10-01T%s+00:00" % s)
def cum(t):
    s = np.zeros(3)
    for m in ms:
        if m["t"] <= t: s += [m["cw5m"] + 1.6*m["cw1h"], m["cr"] + m["inp"], m["out"]]
    return s
# phase boundaries = midpoint of the bracket in which the jump happened
B = {"43": ("04:41:27","04:43:11"), "50": ("04:53:01","04:54:19"), "56": ("04:55:49","04:56:56"), "62": ("04:57:45","04:58:07")}
def mid(k, lag):
    a, b = T(B[k][0]), T(B[k][1]); return a + (b - a)/2 - timedelta(seconds=lag)
phases = [("A+mon 43->50", "43", "50", 7), ("B 50->56", "50", "56", 6), ("C 56->62", "56", "62", 6)]
for lag in (0, 20, 40):
    X, y = [], []
    print("lag", lag)
    for name, a, b, dp in phases:
        d = cum(mid(b, lag)) - cum(mid(a, lag))
        X.append(d / 1e6); y.append(dp)
        api = d @ [1.25, 0.1, 5]
        print("  %-14s cw=%5.0fK cr=%6.0fK out=%5.1fK  api-eq=%5.0fK -> %3.0fK/1%%" % (name, d[0]/1e3, d[1]/1e3, d[2]/1e3, api/1e3, api/1e3/dp))
    w = np.linalg.solve(np.array(X), np.array(y))
    print("  solve %%/Mtok: CW=%.2f CR=%.3f OUT=%.1f" % tuple(w), " -> ratios CW/CR=%.0f OUT/CR=%.0f" % (w[0]/w[2]*0 + w[0]/w[1], w[2]/w[1]) if w[1] > 0 else "")

print("\n== 2-param fit (CR weight free param too, but report both) ==")
run1 = [((13e3, 2.36e6, 31e3), 2), ((17e3, 2.89e6, 35e3), 2), ((152e3, 4.58e6, 42e3), 6.5)]
for lag in (0, 20, 40):
    X = []; y = []
    for name, a, b, dp in phases:
        X.append((cum(mid(b, lag)) - cum(mid(a, lag))) / 1e6); y.append(dp)
    X = np.array(X); y = np.array(y)
    w2, *_ = np.linalg.lstsq(X[:, [0, 2]], y, rcond=None)
    pred = X[:, [0, 2]] @ w2
    p1 = [ (np.array(v)/1e6)[[0,2]] @ w2 for v, _ in run1]
    print("lag %2d: CR=0 -> 1%% = %3.0fK CW or %4.1fK OUT (OUT/CW=%.1f); fit %s vs %s; run1 pred %s vs [2,2,6.5]" % (
        lag, 1e3/w2[0], 1e3/w2[1], w2[1]/w2[0], np.round(pred,1), y, np.round(p1,1)))
    # API ratios, CR at API weight: single scale
    api = X @ [1.25, 0.1, 5]; k = (api @ y) / (api @ api)
    print("        API weights -> 1%% = %3.0fK eq; fit %s" % (1e3/k, np.round(api*k,1)))
