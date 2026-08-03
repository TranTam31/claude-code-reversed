// Module: Hft (lines 452462-452488)
  var Hft = S(() => {
    zt();
    Zt();
    gKe();
    Gxo = x(require("vm"));
    F5y = `(() => {
      const NOW_ERR = ${Ie(N5y)};
      const RANDOM_ERR = ${Ie($5y)};
      Math.random = function random() { throw new Error(RANDOM_ERR) };
      const RealDate = Date;
      RealDate.now = function now() { throw new Error(NOW_ERR) };
      function ShimDate(...a) {
        if (!new.target) throw new Error(NOW_ERR); // bare Date() \u2192 now-string
        if (a.length === 0) throw new Error(NOW_ERR);
        return Reflect.construct(RealDate, a, new.target);
      }
      ShimDate.now = RealDate.now;
      ShimDate.parse = RealDate.parse;
      ShimDate.UTC = RealDate.UTC;
      ShimDate.prototype = RealDate.prototype;
      // Close the (new Date(x)).constructor backdoor to RealDate.now \u2014 point
      // .constructor at the shim, then freeze RealDate so it can't be undone.
      RealDate.prototype.constructor = ShimDate;
      Object.freeze(RealDate);
      globalThis.Date = ShimDate;
    })()`;
  });
