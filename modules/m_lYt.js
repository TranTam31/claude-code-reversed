// Module: lYt (lines 52003-52009)
  var lYt = S(() => {
    oUl = {
      fetch: globalThis.fetch ? globalThis.fetch.bind(globalThis) : void 0,
      SubtleCrypto: globalThis.crypto ? globalThis.crypto.subtle : void 0,
      EventSource: globalThis.EventSource,
    };
  });
