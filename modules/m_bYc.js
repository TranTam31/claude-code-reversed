// Module: bYc (lines 164577-164624)
  var bYc = S(() => {
    bIt();
    _It();
    RD();
    LZt();
    uIt();
    /*! @azure/msal-node v3.8.1 2025-10-29 */ EIt = class EIt extends iie {
      constructor(e, t, r, n, o, i) {
        super(e, t, r, n, o);
        this.msiEndpoint = i;
      }
      static getEnvironmentVariables() {
        return [process.env[Ym.MSI_ENDPOINT]];
      }
      static tryCreate(e, t, r, n, o, i) {
        let [s] = EIt.getEnvironmentVariables();
        if (!s)
          return (
            e.info(
              `[Managed Identity] ${Ih.CLOUD_SHELL} managed identity is unavailable because the '${Ym.MSI_ENDPOINT} environment variable is not defined.`,
            ),
            null
          );
        let a = EIt.getValidatedEnvVariableUrlString(
          Ym.MSI_ENDPOINT,
          s,
          Ih.CLOUD_SHELL,
          e,
        );
        if (
          (e.info(
            `[Managed Identity] Environment variable validation passed for ${Ih.CLOUD_SHELL} managed identity. Endpoint URI: ${a}. Creating ${Ih.CLOUD_SHELL} managed identity.`,
          ),
          i.idType !== i1.SYSTEM_ASSIGNED)
        )
          throw AU(meo);
        return new EIt(e, t, r, n, o, s);
      }
      createRequest(e) {
        let t = new Rde(ID.POST, this.msiEndpoint);
        return (
          (t.headers[rie.METADATA_HEADER_NAME] = "true"),
          (t.bodyParameters[GB.RESOURCE] = e),
          t
        );
      }
    };
  });
