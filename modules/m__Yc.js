// Module: $Yc (lines 165346-165409)
  var $Yc = S(() => {
    cNe();
    xit();
    tH();
    l8();
    CIt = Og(k6e);
    $9i = {
      name: "imdsMsi",
      async isAvailable(e) {
        let { scopes: t, identityClient: r, getTokenOptions: n } = e,
          o = mVr(t);
        if (!o)
          return (
            CIt.info(`${k6e}: Unavailable. Multiple scopes are not supported.`),
            !1
          );
        if (process.env.AZURE_POD_IDENTITY_AUTHORITY_HOST) return !0;
        if (!r) throw Error("Missing IdentityClient");
        let i = LAg(o);
        return eA.withSpan(
          "ManagedIdentityCredential-pingImdsEndpoint",
          n !== null && n !== void 0 ? n : {},
          async (s) => {
            var a, l;
            i.tracingOptions = s.tracingOptions;
            let c = Hde(i);
            ((c.timeout =
              ((a = s.requestOptions) === null || a === void 0
                ? void 0
                : a.timeout) || 1000),
              (c.allowInsecureConnection = !0));
            let u;
            try {
              (CIt.info(`${k6e}: Pinging the Azure IMDS endpoint`),
                (u = await r.sendRequest(c)));
            } catch (d) {
              if (nZn(d))
                CIt.verbose(`${k6e}: Caught error ${d.name}: ${d.message}`);
              return (
                CIt.info(`${k6e}: The Azure IMDS endpoint is unavailable`),
                !1
              );
            }
            if (u.status === 403) {
              if (
                (l = u.bodyAsText) === null || l === void 0
                  ? void 0
                  : l.includes("unreachable")
              )
                return (
                  CIt.info(`${k6e}: The Azure IMDS endpoint is unavailable`),
                  CIt.info(`${k6e}: ${u.bodyAsText}`),
                  !1
                );
            }
            return (
              CIt.info(`${k6e}: The Azure IMDS endpoint is available`),
              !0
            );
          },
        );
      },
    };
  });
