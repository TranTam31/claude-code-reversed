// Module: _7c (lines 166611-166648)
  var _7c = S(() => {
    pto();
    tH();
    ((ewg = Og(y7c)),
      (iKi = {
        name: "tokenExchangeMsi",
        async isAvailable(e) {
          let t = process.env,
            r = Boolean(
              (e || t.AZURE_CLIENT_ID) &&
              t.AZURE_TENANT_ID &&
              process.env.AZURE_FEDERATED_TOKEN_FILE,
            );
          if (!r)
            ewg.info(
              `${y7c}: Unavailable. The environment variables needed are: AZURE_CLIENT_ID (or the client ID sent through the parameters), AZURE_TENANT_ID and AZURE_FEDERATED_TOKEN_FILE`,
            );
          return r;
        },
        async getToken(e, t = {}) {
          let { scopes: r, clientId: n } = e,
            o = {};
          return new R6e(
            Object.assign(
              Object.assign(
                {
                  clientId: n,
                  tenantId: process.env.AZURE_TENANT_ID,
                  tokenFilePath: process.env.AZURE_FEDERATED_TOKEN_FILE,
                },
                o,
              ),
              { disableInstanceDiscovery: !0 },
            ),
          ).getToken(r, t);
        },
      }));
  });
