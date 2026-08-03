// Module: TYc (lines 164816-164876)
  var TYc = S(() => {
    _It();
    RD();
    bIt();
    /*! @azure/msal-node v3.8.1 2025-10-29 */ IAg = `Only client id is supported for user-assigned managed identity in ${Ih.MACHINE_LEARNING}.`;
    wIt = class wIt extends iie {
      constructor(e, t, r, n, o, i, s) {
        super(e, t, r, n, o);
        ((this.msiEndpoint = i), (this.secret = s));
      }
      static getEnvironmentVariables() {
        let e = process.env[Ym.MSI_ENDPOINT],
          t = process.env[Ym.MSI_SECRET];
        return [e, t];
      }
      static tryCreate(e, t, r, n, o) {
        let [i, s] = wIt.getEnvironmentVariables();
        if (!i || !s)
          return (
            e.info(
              `[Managed Identity] ${Ih.MACHINE_LEARNING} managed identity is unavailable because one or both of the '${Ym.MSI_ENDPOINT}' and '${Ym.MSI_SECRET}' environment variables are not defined.`,
            ),
            null
          );
        let a = wIt.getValidatedEnvVariableUrlString(
          Ym.MSI_ENDPOINT,
          i,
          Ih.MACHINE_LEARNING,
          e,
        );
        return (
          e.info(
            `[Managed Identity] Environment variables validation passed for ${Ih.MACHINE_LEARNING} managed identity. Endpoint URI: ${a}. Creating ${Ih.MACHINE_LEARNING} managed identity.`,
          ),
          new wIt(e, t, r, n, o, i, s)
        );
      }
      createRequest(e, t) {
        let r = new Rde(ID.GET, this.msiEndpoint);
        if (
          ((r.headers[rie.METADATA_HEADER_NAME] = "true"),
          (r.headers[rie.ML_AND_SF_SECRET_HEADER_NAME] = this.secret),
          (r.queryParameters[GB.API_VERSION] = kAg),
          (r.queryParameters[GB.RESOURCE] = e),
          t.idType === i1.SYSTEM_ASSIGNED)
        )
          r.queryParameters[yIt.MANAGED_IDENTITY_CLIENT_ID_2017] =
            process.env[Ym.DEFAULT_IDENTITY_CLIENT_ID];
        else if (t.idType === i1.USER_ASSIGNED_CLIENT_ID)
          r.queryParameters[
            this.getManagedIdentityUserAssignedIdQueryParameterKey(
              t.idType,
              !1,
              !0,
            )
          ] = t.id;
        else throw Error(IAg);
        return r;
      }
    };
  });
