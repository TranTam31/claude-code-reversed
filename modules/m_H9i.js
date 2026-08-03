// Module: H9i (lines 162652-162740)
  var H9i = S(() => {
    N0();
    /*! @azure/msal-node v3.8.1 2025-10-29 */ W6r = class W6r extends xY {
      constructor(e) {
        super(e);
      }
      async acquireToken(e) {
        this.logger.info("in acquireToken call in username-password client");
        let t = kD.nowSeconds(),
          r = await this.executeTokenRequest(this.authority, e),
          n = new c$(
            this.config.authOptions.clientId,
            this.cacheManager,
            this.cryptoUtils,
            this.logger,
            this.config.serializableCache,
            this.config.persistencePlugin,
          );
        return (
          n.validateTokenResponse(r.body),
          n.handleServerTokenResponse(r.body, this.authority, t, e)
        );
      }
      async executeTokenRequest(e, t) {
        let r = this.createTokenQueryParameters(t),
          n = iy.appendQueryString(e.tokenEndpoint, r),
          o = await this.createTokenRequestBody(t),
          i = this.createTokenRequestHeaders({
            credential: t.username,
            type: mZ.UPN,
          }),
          s = {
            clientId: this.config.authOptions.clientId,
            authority: e.canonicalAuthority,
            scopes: t.scopes,
            claims: t.claims,
            authenticationScheme: t.authenticationScheme,
            resourceRequestMethod: t.resourceRequestMethod,
            resourceRequestUri: t.resourceRequestUri,
            shrClaims: t.shrClaims,
            sshKid: t.sshKid,
          };
        return this.executePostToTokenEndpoint(n, o, i, s, t.correlationId);
      }
      async createTokenRequestBody(e) {
        let t = new Map();
        if (
          (Xc.addClientId(t, this.config.authOptions.clientId),
          Xc.addUsername(t, e.username),
          Xc.addPassword(t, e.password),
          Xc.addScopes(t, e.scopes),
          Xc.addResponseType(t, mZt.IDTOKEN_TOKEN),
          Xc.addGrantType(t, eie.RESOURCE_OWNER_PASSWORD_GRANT),
          Xc.addClientInfo(t),
          Xc.addLibraryInfo(t, this.config.libraryInfo),
          Xc.addApplicationTelemetry(t, this.config.telemetry.application),
          Xc.addThrottling(t),
          this.serverTelemetryManager)
        )
          Xc.addServerTelemetry(t, this.serverTelemetryManager);
        let r = e.correlationId || this.config.cryptoInterface.createNewGuid();
        if (
          (Xc.addCorrelationId(t, r),
          this.config.clientCredentials.clientSecret)
        )
          Xc.addClientSecret(t, this.config.clientCredentials.clientSecret);
        let n = this.config.clientCredentials.clientAssertion;
        if (n)
          (Xc.addClientAssertion(
            t,
            await yZ(
              n.assertion,
              this.config.authOptions.clientId,
              e.resourceRequestUri,
            ),
          ),
            Xc.addClientAssertionType(t, n.assertionType));
        if (
          !Ek.isEmptyObj(e.claims) ||
          (this.config.authOptions.clientCapabilities &&
            this.config.authOptions.clientCapabilities.length > 0)
        )
          Xc.addClaims(t, e.claims, this.config.authOptions.clientCapabilities);
        if (this.config.systemOptions.preventCorsPreflight && e.username)
          Xc.addCcsUpn(t, e.username);
        return u8.mapToQueryString(t);
      }
    };
  });
