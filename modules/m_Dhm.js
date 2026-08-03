// Module: Dhm (lines 958464-958486)
  var Dhm = S(() => {
    SPa();
    Pr();
    Rhm = {
      id: "oauth-expiry-warning",
      compute: () => {
        let e = Lxr();
        if (!e || e.daysLeft > 1) return null;
        return {
          key: "oauth-expiry-warning",
          segments: [
            {
              text: `Your login expires in ${e.daysLeft} ${Et(e.daysLeft, "day")}`,
              color: "warning",
            },
            { text: " \xB7 run /login to renew", dim: !0 },
          ],
          priority: "high",
          timeoutMs: 15000,
        };
      },
    };
  });
