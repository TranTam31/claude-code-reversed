// Module: wYc (lines 164757-164812)
  var wYc = S(() => {
    bIt();
    _It();
    RD();
    /*! @azure/msal-node v3.8.1 2025-10-29 */ AIt = class AIt extends iie {
      constructor(e, t, r, n, o, i, s) {
        super(e, t, r, n, o);
        ((this.identityEndpoint = i), (this.identityHeader = s));
      }
      static getEnvironmentVariables() {
        let e = process.env[Ym.IDENTITY_ENDPOINT],
          t = process.env[Ym.IDENTITY_HEADER],
          r = process.env[Ym.IDENTITY_SERVER_THUMBPRINT];
        return [e, t, r];
      }
      static tryCreate(e, t, r, n, o, i) {
        let [s, a, l] = AIt.getEnvironmentVariables();
        if (!s || !a || !l)
          return (
            e.info(
              `[Managed Identity] ${Ih.SERVICE_FABRIC} managed identity is unavailable because one or all of the '${Ym.IDENTITY_HEADER}', '${Ym.IDENTITY_ENDPOINT}' or '${Ym.IDENTITY_SERVER_THUMBPRINT}' environment variables are not defined.`,
            ),
            null
          );
        let c = AIt.getValidatedEnvVariableUrlString(
          Ym.IDENTITY_ENDPOINT,
          s,
          Ih.SERVICE_FABRIC,
          e,
        );
        if (
          (e.info(
            `[Managed Identity] Environment variables validation passed for ${Ih.SERVICE_FABRIC} managed identity. Endpoint URI: ${c}. Creating ${Ih.SERVICE_FABRIC} managed identity.`,
          ),
          i.idType !== i1.SYSTEM_ASSIGNED)
        )
          e.warning(
            `[Managed Identity] ${Ih.SERVICE_FABRIC} user assigned managed identity is configured in the cluster, not during runtime. See also: https://learn.microsoft.com/en-us/azure/service-fabric/configure-existing-cluster-enable-managed-identity-token-service.`,
          );
        return new AIt(e, t, r, n, o, s, a);
      }
      createRequest(e, t) {
        let r = new Rde(ID.GET, this.identityEndpoint);
        if (
          ((r.headers[rie.ML_AND_SF_SECRET_HEADER_NAME] = this.identityHeader),
          (r.queryParameters[GB.API_VERSION] = HAg),
          (r.queryParameters[GB.RESOURCE] = e),
          t.idType !== i1.SYSTEM_ASSIGNED)
        )
          r.queryParameters[
            this.getManagedIdentityUserAssignedIdQueryParameterKey(t.idType)
          ] = t.id;
        return r;
      }
    };
  });
