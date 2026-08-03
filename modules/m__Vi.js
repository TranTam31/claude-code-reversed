// Module: _Vi (lines 143430-143439)
  var _Vi = S(() => {
    WQt = class WQt extends Error {
      constructor() {
        super(
          "OAuth refresh token is no longer valid; run /login to re-authenticate",
        );
        this.name = "OAuthRefreshDeadError";
      }
    };
  });
