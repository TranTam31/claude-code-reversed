import numpy as np
from datetime import timedelta
exec(open("feasible.py", encoding="utf-8").read().split("b = np.linspace")[0])
b = np.linspace(5, 60, 56)[:, None, None]; c = np.linspace(0, 1.5, 76)[None, :, None]; d = np.linspace(5, 150, 74)[None, None, :]
for L in (0, 30, 60):
    C = [cum(r[0] - timedelta(seconds=L)) for r in fresh]
    pairs = [(i, j) for i in range(len(fresh)) for j in range(i+1, len(fresh))]
    viol = np.zeros((b.size, c.size, d.size)); worst = np.zeros_like(viol)
    for i, j in pairs:
        dd = C[j] - C[i]; dp = fresh[j][1] - fresh[i][1]
        v = b*dd[0] + c*dd[1] + d*dd[2]
        e = np.maximum(0, np.maximum(dp - 1 - v, v - dp - 1))
        viol += e > 0; worst = np.maximum(worst, e)
    k = np.unravel_index(np.argmin(viol * 100 + worst), viol.shape)
    B, Cc, D = b.ravel()[k[0]], c.ravel()[k[1]], d.ravel()[k[2]]
    print("lag %ds best: 1%%=%.0fK CW, %s CR, %.1fK OUT; violated %d/%d pairs, worst by %.2f%%" % (
        L, 1e3/B, "inf" if Cc == 0 else "%.1fM" % (1/Cc), 1e3/D, viol[k], len(pairs), worst[k]))
    for i, j in pairs:
        dd = C[j] - C[i]; dp = fresh[j][1] - fresh[i][1]; v = B*dd[0] + Cc*dd[1] + D*dd[2]
        if v <= dp - 1 or v >= dp + 1:
            print("   %s->%s obs %+d pred %+.2f  (dCW=%.0fK dCR=%.2fM dOUT=%.1fK)" % (
                fresh[i][0].strftime("%H:%M:%S"), fresh[j][0].strftime("%H:%M:%S"), dp, v, dd[0]*1e3, dd[1], dd[2]*1e3))
