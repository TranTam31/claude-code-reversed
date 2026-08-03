// Module: yhn (lines 649109-649126)
  var yhn = S(() => {
    Vn();
    $0();
    st();
    Ei();
    Zt();
    j9s();
    i3o();
    ghn();
    ((zmp = Se(() =>
      v.object({ intervalSeconds: v.number().positive().default(30) }).strict(),
    )),
      (Yve = {
        heartbeat: { schema: zmp, run: YV_, needsOAuth: !1 },
        scheduled: { schema: JYs, run: Vmp, needsOAuth: !0 },
        remoteControl: { schema: HYs, run: yfp, needsOAuth: !0 },
      }));
  });
