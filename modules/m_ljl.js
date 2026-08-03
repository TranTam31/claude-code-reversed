// Module: ljl (lines 61568-61579)
  var ljl = S(() => {
    ijl();
    tGn = new WeakMap();
    sjl.callCount = (e) => {
      if (!tGn.has(e))
        throw Error(
          `The given function \`${e.name}\` is not wrapped by the \`onetime\` package`,
        );
      return tGn.get(e);
    };
    ajl = sjl;
  });
