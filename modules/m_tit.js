// Module: tit (lines 139207-139221)
  var tit = S(() => {
    Ar();
    Ge();
    Scg =
      /ExpiredToken|InvalidSignature|SignatureDoesNotMatch|UnrecognizedClient|InvalidClientTokenId|security token.*(invalid|expired)|signature we calculated does not match/i;
    wde = {
      __auth: {
        provider: null,
        tokenCache: null,
        resolution: null,
        error: null,
        extraHeaders: {},
      },
    };
  });
