// Module: AYc (lines 164710-164754)
  var AYc = S(() => {
    bIt();
    _It();
    RD();
    EYc();
    /*! @azure/msal-node v3.8.1 2025-10-29 */ CAg = `http://169.254.169.254${vYc}`;
    K6r = class K6r extends iie {
      constructor(e, t, r, n, o, i) {
        super(e, t, r, n, o);
        this.identityEndpoint = i;
      }
      static tryCreate(e, t, r, n, o) {
        let i;
        if (process.env[Ym.AZURE_POD_IDENTITY_AUTHORITY_HOST])
          (e.info(
            `[Managed Identity] Environment variable ${Ym.AZURE_POD_IDENTITY_AUTHORITY_HOST} for ${Ih.IMDS} returned endpoint: ${process.env[Ym.AZURE_POD_IDENTITY_AUTHORITY_HOST]}`,
          ),
            (i = K6r.getValidatedEnvVariableUrlString(
              Ym.AZURE_POD_IDENTITY_AUTHORITY_HOST,
              `${process.env[Ym.AZURE_POD_IDENTITY_AUTHORITY_HOST]}${vYc}`,
              Ih.IMDS,
              e,
            )));
        else
          (e.info(
            `[Managed Identity] Unable to find ${Ym.AZURE_POD_IDENTITY_AUTHORITY_HOST} environment variable for ${Ih.IMDS}, using the default endpoint.`,
          ),
            (i = CAg));
        return new K6r(e, t, r, n, o, i);
      }
      createRequest(e, t) {
        let r = new Rde(ID.GET, this.identityEndpoint);
        if (
          ((r.headers[rie.METADATA_HEADER_NAME] = "true"),
          (r.queryParameters[GB.API_VERSION] = xAg),
          (r.queryParameters[GB.RESOURCE] = e),
          t.idType !== i1.SYSTEM_ASSIGNED)
        )
          r.queryParameters[
            this.getManagedIdentityUserAssignedIdQueryParameterKey(t.idType, !0)
          ] = t.id;
        return ((r.retryPolicy = new vIt()), r);
      }
    };
  });
