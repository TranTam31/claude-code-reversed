// Module: SKi (lines 167823-167870)
  var SKi = S(() => {
    sKi();
    lKi();
    cKi();
    pKi();
    mKi();
    _Ki();
    pto();
    tH();
    bKi = Og("DefaultAzureCredential");
    cqr = class cqr extends rqr {
      constructor(e) {
        let t = process.env.AZURE_TOKEN_CREDENTIALS
            ? process.env.AZURE_TOKEN_CREDENTIALS.trim().toLowerCase()
            : void 0,
          r = [fwg, mwg, pwg],
          n = [hwg, dwg, uwg],
          o = [];
        if (t)
          switch (t) {
            case "dev":
              o = r;
              break;
            case "prod":
              o = n;
              break;
            default: {
              let s = `Invalid value for AZURE_TOKEN_CREDENTIALS = ${process.env.AZURE_TOKEN_CREDENTIALS}. Valid values are 'prod' or 'dev'.`;
              throw (bKi.warning(s), Error(s));
            }
          }
        else o = [...n, ...r];
        let i = o.map((s) => {
          try {
            return s(e);
          } catch (a) {
            return (
              bKi.warning(
                `Skipped ${s.name} because of an error creating the credential: ${a}`,
              ),
              new M7c(s.name, a.message)
            );
          }
        });
        super(...i);
      }
    };
  });
