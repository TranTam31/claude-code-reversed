// Module: I9i (lines 163181-163374)
  var I9i = S(() => {
    N0();
    /*! @azure/msal-node v3.8.1 2025-10-29 */ G6r = class G6r extends xY {
      constructor(e) {
        super(e);
      }
      async acquireToken(e) {
        let t = await this.getDeviceCode(e);
        e.deviceCodeCallback(t);
        let r = kD.nowSeconds(),
          n = await this.acquireTokenWithDeviceCode(e, t),
          o = new c$(
            this.config.authOptions.clientId,
            this.cacheManager,
            this.cryptoUtils,
            this.logger,
            this.config.serializableCache,
            this.config.persistencePlugin,
          );
        return (
          o.validateTokenResponse(n),
          o.handleServerTokenResponse(n, this.authority, r, e)
        );
      }
      async getDeviceCode(e) {
        let t = this.createExtraQueryParameters(e),
          r = iy.appendQueryString(this.authority.deviceCodeEndpoint, t),
          n = this.createQueryString(e),
          o = this.createTokenRequestHeaders(),
          i = {
            clientId: this.config.authOptions.clientId,
            authority: e.authority,
            scopes: e.scopes,
            claims: e.claims,
            authenticationScheme: e.authenticationScheme,
            resourceRequestMethod: e.resourceRequestMethod,
            resourceRequestUri: e.resourceRequestUri,
            shrClaims: e.shrClaims,
            sshKid: e.sshKid,
          };
        return this.executePostRequestToDeviceCodeEndpoint(
          r,
          n,
          o,
          i,
          e.correlationId,
        );
      }
      createExtraQueryParameters(e) {
        let t = new Map();
        if (e.extraQueryParameters)
          Xc.addExtraQueryParameters(t, e.extraQueryParameters);
        return u8.mapToQueryString(t);
      }
      async executePostRequestToDeviceCodeEndpoint(e, t, r, n, o) {
        let {
          body: {
            user_code: i,
            device_code: s,
            verification_uri: a,
            expires_in: l,
            interval: c,
            message: u,
          },
        } = await this.sendPostRequest(n, e, { body: t, headers: r }, o);
        return {
          userCode: i,
          deviceCode: s,
          verificationUri: a,
          expiresIn: l,
          interval: c,
          message: u,
        };
      }
      createQueryString(e) {
        let t = new Map();
        if (
          (Xc.addScopes(t, e.scopes),
          Xc.addClientId(t, this.config.authOptions.clientId),
          e.extraQueryParameters)
        )
          Xc.addExtraQueryParameters(t, e.extraQueryParameters);
        if (
          e.claims ||
          (this.config.authOptions.clientCapabilities &&
            this.config.authOptions.clientCapabilities.length > 0)
        )
          Xc.addClaims(t, e.claims, this.config.authOptions.clientCapabilities);
        return u8.mapToQueryString(t);
      }
      continuePolling(e, t, r) {
        if (r)
          throw (
            this.logger.error(
              "Token request cancelled by setting DeviceCodeRequest.cancel = true",
            ),
            os(rH.deviceCodePollingCancelled)
          );
        else if (t && t < e && kD.nowSeconds() > t)
          throw (
            this.logger.error(
              `User defined timeout for device code polling reached. The timeout was set for ${t}`,
            ),
            os(rH.userTimeoutReached)
          );
        else if (kD.nowSeconds() > e) {
          if (t)
            this.logger.verbose(
              `User specified timeout ignored as the device code has expired before the timeout elapsed. The user specified timeout was set for ${t}`,
            );
          throw (
            this.logger.error(
              `Device code expired. Expiration time of device code was ${e}`,
            ),
            os(rH.deviceCodeExpired)
          );
        }
        return !0;
      }
      async acquireTokenWithDeviceCode(e, t) {
        let r = this.createTokenQueryParameters(e),
          n = iy.appendQueryString(this.authority.tokenEndpoint, r),
          o = this.createTokenRequestBody(e, t),
          i = this.createTokenRequestHeaders(),
          s = e.timeout ? kD.nowSeconds() + e.timeout : void 0,
          a = kD.nowSeconds() + t.expiresIn,
          l = t.interval * 1000;
        while (this.continuePolling(a, s, e.cancel)) {
          let c = {
              clientId: this.config.authOptions.clientId,
              authority: e.authority,
              scopes: e.scopes,
              claims: e.claims,
              authenticationScheme: e.authenticationScheme,
              resourceRequestMethod: e.resourceRequestMethod,
              resourceRequestUri: e.resourceRequestUri,
              shrClaims: e.shrClaims,
              sshKid: e.sshKid,
            },
            u = await this.executePostToTokenEndpoint(
              n,
              o,
              i,
              c,
              e.correlationId,
            );
          if (u.body && u.body.error)
            if (u.body.error === Ai.AUTHORIZATION_PENDING)
              (this.logger.info("Authorization pending. Continue polling."),
                await kD.delay(l));
            else
              throw (
                this.logger.info("Unexpected error in polling from the server"),
                Zqi(yZt.postRequestFailed, u.body.error)
              );
          else
            return (
              this.logger.verbose(
                "Authorization completed successfully. Polling stopped.",
              ),
              u.body
            );
        }
        throw (
          this.logger.error("Polling stopped for unknown reasons."),
          os(rH.deviceCodeUnknownError)
        );
      }
      createTokenRequestBody(e, t) {
        let r = new Map();
        (Xc.addScopes(r, e.scopes),
          Xc.addClientId(r, this.config.authOptions.clientId),
          Xc.addGrantType(r, eie.DEVICE_CODE_GRANT),
          Xc.addDeviceCode(r, t.deviceCode));
        let n = e.correlationId || this.config.cryptoInterface.createNewGuid();
        if (
          (Xc.addCorrelationId(r, n),
          Xc.addClientInfo(r),
          Xc.addLibraryInfo(r, this.config.libraryInfo),
          Xc.addApplicationTelemetry(r, this.config.telemetry.application),
          Xc.addThrottling(r),
          this.serverTelemetryManager)
        )
          Xc.addServerTelemetry(r, this.serverTelemetryManager);
        if (
          !Ek.isEmptyObj(e.claims) ||
          (this.config.authOptions.clientCapabilities &&
            this.config.authOptions.clientCapabilities.length > 0)
        )
          Xc.addClaims(r, e.claims, this.config.authOptions.clientCapabilities);
        return u8.mapToQueryString(r);
      }
    };
  });
