// Module: kqc (lines 157302-157596)
  var kqc = S(() => {
    RZn();
    g6r();
    kZt();
    Qkt();
    jI();
    xZt();
    S6r();
    eeo();
    Uit();
    Fit();
    jB();
    DZt();
    Wit();
    Bit();
    ZVr();
    AZt();
    b6r();
    cxe();
    A6e();
    teo();
    VZn();
    YZn();
    _6e();
    vU();
    /*! @azure/msal-common v15.13.1 2025-10-29 */ MZt = class MZt extends xY {
      constructor(e, t) {
        super(e, t);
      }
      async acquireToken(e) {
        this.performanceClient?.addQueueMeasurement(
          Ko.RefreshTokenClientAcquireToken,
          e.correlationId,
        );
        let t = kde(),
          r = await vE(
            this.executeTokenRequest.bind(this),
            Ko.RefreshTokenClientExecuteTokenRequest,
            this.logger,
            this.performanceClient,
            e.correlationId,
          )(e, this.authority),
          n = r.headers?.[BI.X_MS_REQUEST_ID],
          o = new c$(
            this.config.authOptions.clientId,
            this.cacheManager,
            this.cryptoUtils,
            this.logger,
            this.config.serializableCache,
            this.config.persistencePlugin,
          );
        return (
          o.validateTokenResponse(r.body),
          vE(
            o.handleServerTokenResponse.bind(o),
            Ko.HandleServerTokenResponse,
            this.logger,
            this.performanceClient,
            e.correlationId,
          )(r.body, this.authority, t, e, void 0, void 0, !0, e.forceCache, n)
        );
      }
      async acquireTokenByRefreshToken(e) {
        if (!e) throw nH(zkt);
        if (
          (this.performanceClient?.addQueueMeasurement(
            Ko.RefreshTokenClientAcquireTokenByRefreshToken,
            e.correlationId,
          ),
          !e.account)
        )
          throw os(f6e);
        if (this.cacheManager.isAppMetadataFOCI(e.account.environment))
          try {
            return await vE(
              this.acquireTokenWithCachedRefreshToken.bind(this),
              Ko.RefreshTokenClientAcquireTokenWithCachedRefreshToken,
              this.logger,
              this.performanceClient,
              e.correlationId,
            )(e, !0);
          } catch (r) {
            let n = r instanceof Ide && r.errorCode === Git,
              o =
                r instanceof gZ &&
                r.errorCode === _Vr.INVALID_GRANT_ERROR &&
                r.subError === _Vr.CLIENT_MISMATCH_ERROR;
            if (n || o)
              return vE(
                this.acquireTokenWithCachedRefreshToken.bind(this),
                Ko.RefreshTokenClientAcquireTokenWithCachedRefreshToken,
                this.logger,
                this.performanceClient,
                e.correlationId,
              )(e, !1);
            else throw r;
          }
        return vE(
          this.acquireTokenWithCachedRefreshToken.bind(this),
          Ko.RefreshTokenClientAcquireTokenWithCachedRefreshToken,
          this.logger,
          this.performanceClient,
          e.correlationId,
        )(e, !1);
      }
      async acquireTokenWithCachedRefreshToken(e, t) {
        this.performanceClient?.addQueueMeasurement(
          Ko.RefreshTokenClientAcquireTokenWithCachedRefreshToken,
          e.correlationId,
        );
        let r = Sqc(
          this.cacheManager.getRefreshToken.bind(this.cacheManager),
          Ko.CacheManagerGetRefreshToken,
          this.logger,
          this.performanceClient,
          e.correlationId,
        )(e.account, t, e.correlationId, void 0, this.performanceClient);
        if (!r) throw QZn(Git);
        if (
          r.expiresOn &&
          IZt(r.expiresOn, e.refreshTokenExpirationOffsetSeconds || Zhg)
        )
          throw (
            this.performanceClient?.addFields(
              { rtExpiresOnMs: Number(r.expiresOn) },
              e.correlationId,
            ),
            QZn(_6r)
          );
        let n = {
          ...e,
          refreshToken: r.secret,
          authenticationScheme: e.authenticationScheme || IS.BEARER,
          ccsCredential: {
            credential: e.account.homeAccountId,
            type: mZ.HOME_ACCOUNT_ID,
          },
        };
        try {
          return await vE(
            this.acquireToken.bind(this),
            Ko.RefreshTokenClientAcquireToken,
            this.logger,
            this.performanceClient,
            e.correlationId,
          )(n);
        } catch (o) {
          if (o instanceof Ide) {
            if (
              (this.performanceClient?.addFields(
                { rtExpiresOnMs: Number(r.expiresOn) },
                e.correlationId,
              ),
              o.subError === Vit)
            ) {
              this.logger.verbose(
                "acquireTokenWithRefreshToken: bad refresh token, removing from cache",
              );
              let i = this.cacheManager.generateCredentialKey(r);
              this.cacheManager.removeRefreshToken(i, e.correlationId);
            }
          }
          throw o;
        }
      }
      async executeTokenRequest(e, t) {
        this.performanceClient?.addQueueMeasurement(
          Ko.RefreshTokenClientExecuteTokenRequest,
          e.correlationId,
        );
        let r = this.createTokenQueryParameters(e),
          n = iy.appendQueryString(t.tokenEndpoint, r),
          o = await vE(
            this.createTokenRequestBody.bind(this),
            Ko.RefreshTokenClientCreateTokenRequestBody,
            this.logger,
            this.performanceClient,
            e.correlationId,
          )(e),
          i = this.createTokenRequestHeaders(e.ccsCredential),
          s = PZt(this.config.authOptions.clientId, e);
        return vE(
          this.executePostToTokenEndpoint.bind(this),
          Ko.RefreshTokenClientExecutePostToTokenEndpoint,
          this.logger,
          this.performanceClient,
          e.correlationId,
        )(
          n,
          o,
          i,
          s,
          e.correlationId,
          Ko.RefreshTokenClientExecutePostToTokenEndpoint,
        );
      }
      async createTokenRequestBody(e) {
        this.performanceClient?.addQueueMeasurement(
          Ko.RefreshTokenClientCreateTokenRequestBody,
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
          e.redirectUri)
        )
          oIt(t, e.redirectUri);
        if (
          (rIt(
            t,
            e.scopes,
            !0,
            this.config.authOptions.authority.options.OIDCOptions
              ?.defaultScopes,
          ),
          a6r(t, eie.REFRESH_TOKEN_GRANT),
          aIt(t),
          t6r(t, this.config.libraryInfo),
          r6r(t, this.config.telemetry.application),
          p6r(t),
          this.serverTelemetryManager && !IZn(this.config))
        )
          d6r(t, this.serverTelemetryManager);
        if (
          (azi(t, e.refreshToken), this.config.clientCredentials.clientSecret)
        )
          o6r(t, this.config.clientCredentials.clientSecret);
        if (this.config.clientCredentials.clientAssertion) {
          let r = this.config.clientCredentials.clientAssertion;
          (i6r(
            t,
            await yZ(
              r.assertion,
              this.config.authOptions.clientId,
              e.resourceRequestUri,
            ),
          ),
            s6r(t, r.assertionType));
        }
        if (e.authenticationScheme === IS.POP) {
          let r = new lIt(this.cryptoUtils, this.performanceClient),
            n;
          if (!e.popKid)
            n = (
              await vE(
                r.generateCnf.bind(r),
                Ko.PopTokenGenerateCnf,
                this.logger,
                this.performanceClient,
                e.correlationId,
              )(e, this.logger)
            ).reqCnfString;
          else n = this.cryptoUtils.encodeKid(e.popKid);
          c6r(t, n);
        } else if (e.authenticationScheme === IS.SSH)
          if (e.sshJwk) u6r(t, e.sshJwk);
          else throw nH(y6e);
        if (
          !Ek.isEmptyObj(e.claims) ||
          (this.config.authOptions.clientCapabilities &&
            this.config.authOptions.clientCapabilities.length > 0)
        )
          iIt(t, e.claims, this.config.authOptions.clientCapabilities);
        if (this.config.systemOptions.preventCorsPreflight && e.ccsCredential)
          switch (e.ccsCredential.type) {
            case mZ.HOME_ACCOUNT_ID:
              try {
                let r = hNe(e.ccsCredential.credential);
                S6e(t, r);
              } catch (r) {
                this.logger.verbose(
                  "Could not parse home account ID for CCS Header: " + r,
                );
              }
              break;
            case mZ.UPN:
              jit(t, e.ccsCredential.credential);
              break;
          }
        if (e.embeddedClientId)
          v6e(
            t,
            this.config.authOptions.clientId,
            this.config.authOptions.redirectUri,
          );
        if (e.tokenBodyParameters) E6e(t, e.tokenBodyParameters);
        return (tIt(t, e.correlationId, this.performanceClient), gNe(t));
      }
    };
  });
