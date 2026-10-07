import numpy as np
from datetime import timedelta
from tally import messages, readings

ms = messages()
rd = readings()
END = rd[-1][0]

def cum(t):
    s = np.zeros(4)  # cw5, cw1h, cr, out
    for m in ms:
        if m["t"] <= t:
            s += [m["cw5m"], m["cw1h"], m["cr"] + m["inp"], m["out"]]
    return s

print("readings:")
for r in rd:
    print(" ", r[0].strftime("%H:%M:%S"), r[1], r[2])

# segments between consecutive distinct readings
print("\nsegments (tokens between successive readings, K):")
for i in range(1, len(rd)):
    d = cum(rd[i][0]) - cum(rd[i - 1][0])
    api = d @ [1.25, 2, 0.1, 5]
    print("  %s->%s  %2d->%2d  cw5=%6.0f cw1h=%5.0f cr=%7.0f out=%5.1f  api-eq=%6.0f" % (
        rd[i - 1][0].strftime("%H:%M:%S"), rd[i][0].strftime("%H:%M:%S"), rd[i - 1][1], rd[i][1],
        d[0] / 1e3, d[1] / 1e3, d[2] / 1e3, d[3] / 1e3, api / 1e3))

# cumulative fit: reading_i + 0.5 ~= P0 + w . cum(t_i - lag)
for lag in (0, 30, 60):
    X, y = [], []
    for t, p, _ in rd:
        c = cum(t - timedelta(seconds=lag)) / 1e6
        X.append([1, c[0] + 1.6 * c[1], c[2], c[3]])
        y.append(p + 0.5)
    X, y = np.array(X), np.array(y)
    w, res, *_ = np.linalg.lstsq(X, y, rcond=None)
    pred = X @ w
    print("\nlag %ds: P0=%.2f  %%/M: CW=%.2f CR=%.3f OUT=%.2f  rmse=%.2f" % (lag, w[0], w[1], w[2], w[3], np.sqrt(np.mean((pred - y) ** 2))))
    if w[2] > 0:
        print("   ratios vs CR: CW/CR=%.1f OUT/CR=%.1f  (API: 12.5, 50)" % (w[1] / w[2], w[3] / w[2]))
    # API-weight single-param fit
    a = np.array([[1, (cum(t - timedelta(seconds=lag)) @ [1.25, 2, 0.1, 5]) / 1e6] for t, _, _ in rd])
    w2, *_ = np.linalg.lstsq(a, y, rcond=None)
    print("   API-weight fit: 1%% = %.0fK input-eq, rmse=%.2f" % (1e3 / w2[1], np.sqrt(np.mean((a @ w2 - y) ** 2))))
