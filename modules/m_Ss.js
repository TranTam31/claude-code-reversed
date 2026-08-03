// Module: Ss (lines 264363-264375)
  var Ss = S(() => {
    ((nRu = new WeakMap()), (oRu = new WeakSet()));
    BQg = {
      isEnabled: () => !0,
      isConcurrencySafe: (e) => !1,
      isReadOnly: (e) => !1,
      isDestructive: (e) => !1,
      checkPermissions: (e, t) =>
        Promise.resolve({ behavior: "allow", updatedInput: e }),
      toAutoClassifierInput: (e) => "",
      userFacingName: (e) => "",
    };
  });
