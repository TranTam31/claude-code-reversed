// Agent: teammate (lines 463703-463720)
  var smr = S(() => {
    zt();
    Ge();
    st();
    jRt();
    yv();
    H4();
    zC();
    HV();
    aan = {
      name: "InProcessTeammateTask",
      type: "in_process_teammate",
      async kill(e, t, r) {
        let { memberRemoval: n, osTeardown: o } = lan(e, t, r);
        await Promise.all([n, o]);
      },
    };
  });
