// Module: rUl (lines 51706-51739)
  var rUl = S(() => {
    tUl = {
      ccr: {
        controlChannel: !0,
        modelCatalog: !0,
        setPermissionMode: !0,
        fanout: !0,
        presence: !0,
        catchupReplay: !0,
        bashExec: !0,
        fileRead: !0,
      },
      ssh: {
        controlChannel: !0,
        modelCatalog: !0,
        setPermissionMode: !0,
        fanout: !1,
        presence: !1,
        catchupReplay: !1,
        bashExec: !1,
        fileRead: !0,
      },
      direct: {
        controlChannel: !1,
        modelCatalog: !1,
        setPermissionMode: !1,
        fanout: !1,
        presence: !1,
        catchupReplay: !1,
        bashExec: !1,
        fileRead: !1,
      },
    };
  });
