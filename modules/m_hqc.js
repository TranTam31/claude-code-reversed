// Module: Hqc (lines 157054-157299)
  var Hqc = S(() => {
    g6r();
    kZt();
    Qkt();
    jI();
    xZt();
    RZn();
    S6r();
    Uit();
    jB();
    Bit();
    eeo();
    Wit();
    AZt();
    ZVr();
    Fit();
    cxe();
    A6e();
    teo();
    VZn();
    vU();
    _6e();
    /*! @azure/msal-common v15.13.1 2025-10-29 */ reo = class reo extends xY {
      constructor(e, t) {
        super(e, t);
        ((this.includeRedirectUri = !0),
          (this.oidcDefaultScopes =
            this.config.authOptions.authority.options.OIDCOptions?.defaultScopes));
      }
      async acquireToken(e, t) {
        if (
          (this.performanceClient?.addQueueMeasurement(
            Ko.AuthClientAcquireToken,
            e.correlationId,
          ),
          !e.code)
        )
          throw os(Lkt);
        let r = kde(),
          n = await vE(
            this.executeTokenRequest.bind(this),
            Ko.AuthClientExecuteTokenRequest,
            this.logger,
            this.performanceClient,
            e.correlationId,
          )(this.authority, e),
          o = n.headers?.[BI.X_MS_REQUEST_ID],
          i = new c$(
            this.config.authOptions.clientId,
            this.cacheManager,
            this.cryptoUtils,
            this.logger,
            this.config.serializableCache,
            this.config.persistencePlugin,
            this.performanceClient,
          );
        return (
          i.validateTokenResponse(n.body),
          vE(
            i.handleServerTokenResponse.bind(i),
            Ko.HandleServerTokenResponse,
            this.logger,
            this.performanceClient,
            e.correlationId,
          )(n.body, this.authority, r, e, t, void 0, void 0, void 0, o)
        );
      }
      getLogoutUri(e) {
        if (!e) throw nH(Kkt);
        let t = this.createLogoutUrlQueryString(e);
        return iy.appendQueryString(this.authority.endSessionEndpoint, t);
      }
      async executeTokenRequest(e, t) {
        this.performanceClient?.addQueueMeasurement(
          Ko.AuthClientExecuteTokenRequest,
          t.correlationId,
        );
        let r = this.createTokenQueryParameters(t),
          n = iy.appendQueryString(e.tokenEndpoint, r),
          o = await vE(
            this.createTokenRequestBody.bind(this),
            Ko.AuthClientCreateTokenRequestBody,
            this.logger,
            this.performanceClient,
            t.correlationId,
          )(t),
          i = void 0;
        if (t.clientInfo)
          try {
            let l = vZt(t.clientInfo, this.cryptoUtils.base64Decode);
            i = {
              credential: `${l.uid}${d6e.CLIENT_INFO_SEPARATOR}${l.utid}`,
              type: mZ.HOME_ACCOUNT_ID,
            };
          } catch (l) {
            this.logger.verbose(
              "Could not parse client info for CCS Header: " + l,
            );
          }
        let s = this.createTokenRequestHeaders(i || t.ccsCredential),
          a = PZt(this.config.authOptions.clientId, t);
        return vE(
          this.executePostToTokenEndpoint.bind(this),
          Ko.AuthorizationCodeClientExecutePostToTokenEndpoint,
          this.logger,
          this.performanceClient,
          t.correlationId,
        )(
          n,
          o,
          s,
          a,
          t.correlationId,
          Ko.AuthorizationCodeClientExecutePostToTokenEndpoint,
        );
      }
      async createTokenRequestBody(e) {
        this.performanceClient?.addQueueMeasurement(
          Ko.AuthClientCreateTokenRequestBody,
          e.correlationId,
        );
        let t = new Map();
        if (
          (nIt(
            t,
            e.embeddedClientId ||
              e.tokenBodyParameters?.[yNe] ||
              this.config.authOptions.clientId,
          ),
          !this.includeRedirectUri)
        ) {
          if (!e.redirectUri) throw nH(Wkt);
        } else oIt(t, e.redirectUri);
        if (
          (rIt(t, e.scopes, !0, this.oidcDefaultScopes),
          szi(t, e.code),
          t6r(t, this.config.libraryInfo),
          r6r(t, this.config.telemetry.application),
          p6r(t),
          this.serverTelemetryManager && !IZn(this.config))
        )
          d6r(t, this.serverTelemetryManager);
        if (e.codeVerifier) lzi(t, e.codeVerifier);
        if (this.config.clientCredentials.clientSecret)
          o6r(t, this.config.clientCredentials.clientSecret);
        if (this.config.clientCredentials.clientAssertion) {
          let n = this.config.clientCredentials.clientAssertion;
          (i6r(
            t,
            await yZ(
              n.assertion,
              this.config.authOptions.clientId,
              e.resourceRequestUri,
            ),
          ),
            s6r(t, n.assertionType));
        }
        if (
          (a6r(t, eie.AUTHORIZATION_CODE_GRANT),
          aIt(t),
          e.authenticationScheme === IS.POP)
        ) {
          let n = new lIt(this.cryptoUtils, this.performanceClient),
            o;
          if (!e.popKid)
            o = (
              await vE(
                n.generateCnf.bind(n),
                Ko.PopTokenGenerateCnf,
                this.logger,
                this.performanceClient,
                e.correlationId,
              )(e, this.logger)
            ).reqCnfString;
          else o = this.cryptoUtils.encodeKid(e.popKid);
          c6r(t, o);
        } else if (e.authenticationScheme === IS.SSH)
          if (e.sshJwk) u6r(t, e.sshJwk);
          else throw nH(y6e);
        if (
          !Ek.isEmptyObj(e.claims) ||
          (this.config.authOptions.clientCapabilities &&
            this.config.authOptions.clientCapabilities.length > 0)
        )
          iIt(t, e.claims, this.config.authOptions.clientCapabilities);
        let r = void 0;
        if (e.clientInfo)
          try {
            let n = vZt(e.clientInfo, this.cryptoUtils.base64Decode);
            r = {
              credential: `${n.uid}${d6e.CLIENT_INFO_SEPARATOR}${n.utid}`,
              type: mZ.HOME_ACCOUNT_ID,
            };
          } catch (n) {
            this.logger.verbose(
              "Could not parse client info for CCS Header: " + n,
            );
          }
        else r = e.ccsCredential;
        if (this.config.systemOptions.preventCorsPreflight && r)
          switch (r.type) {
            case mZ.HOME_ACCOUNT_ID:
              try {
                let n = hNe(r.credential);
                S6e(t, n);
              } catch (n) {
                this.logger.verbose(
                  "Could not parse home account ID for CCS Header: " + n,
                );
              }
              break;
            case mZ.UPN:
              jit(t, r.credential);
              break;
          }
        if (e.embeddedClientId)
          v6e(
            t,
            this.config.authOptions.clientId,
            this.config.authOptions.redirectUri,
          );
        if (e.tokenBodyParameters) E6e(t, e.tokenBodyParameters);
        if (
          e.enableSpaAuthorizationCode &&
          (!e.tokenBodyParameters || !e.tokenBodyParameters[LZn])
        )
          E6e(t, { [LZn]: "1" });
        return (tIt(t, e.correlationId, this.performanceClient), gNe(t));
      }
      createLogoutUrlQueryString(e) {
        let t = new Map();
        if (e.postLogoutRedirectUri) tzi(t, e.postLogoutRedirectUri);
        if (e.correlationId) sIt(t, e.correlationId);
        if (e.idTokenHint) rzi(t, e.idTokenHint);
        if (e.state) n6r(t, e.state);
        if (e.logoutHint) czi(t, e.logoutHint);
        if (e.extraQueryParameters) E6e(t, e.extraQueryParameters);
        if (this.config.authOptions.instanceAware) l6r(t);
        return gNe(
          t,
          this.config.authOptions.encodeExtraQueryParams,
          e.extraQueryParameters,
        );
      }
    };
  });
