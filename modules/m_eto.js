// Module: eto (lines 163585-163779)
  var eto = S(() => {
    N0();
    /*! @azure/msal-node v3.8.1 2025-10-29 */ gIt = class gIt extends xY {
      constructor(e, t) {
        super(e);
        this.appTokenProvider = t;
      }
      async acquireToken(e) {
        if (e.skipCache || e.claims)
          return this.executeTokenRequest(e, this.authority);
        let [t, r] = await this.getCachedAuthenticationResult(
          e,
          this.config,
          this.cryptoUtils,
          this.authority,
          this.cacheManager,
          this.serverTelemetryManager,
        );
        if (t) {
          if (r === Sk.PROACTIVELY_REFRESHED) {
            this.logger.info(
              "ClientCredentialClient:getCachedAuthenticationResult - Cached access token's refreshOn property has been exceeded'. It's not expired, but must be refreshed.",
            );
            let n = !0;
            await this.executeTokenRequest(e, this.authority, n);
          }
          return t;
        } else return this.executeTokenRequest(e, this.authority);
      }
      async getCachedAuthenticationResult(e, t, r, n, o, i) {
        let s = t,
          a = t,
          l = Sk.NOT_APPLICABLE,
          c;
        if (s.serializableCache && s.persistencePlugin)
          ((c = new V_e(s.serializableCache, !1)),
            await s.persistencePlugin.beforeCacheAccess(c));
        let u = this.readAccessTokenFromCache(
          n,
          a.managedIdentityId?.id || s.authOptions.clientId,
          new l$(e.scopes || []),
          o,
          e.correlationId,
        );
        if (s.serializableCache && s.persistencePlugin && c)
          await s.persistencePlugin.afterCacheAccess(c);
        if (!u)
          return (
            i?.setCacheOutcome(Sk.NO_CACHED_ACCESS_TOKEN),
            [null, Sk.NO_CACHED_ACCESS_TOKEN]
          );
        if (
          kD.isTokenExpired(
            u.expiresOn,
            s.systemOptions?.tokenRenewalOffsetSeconds || gZt,
          )
        )
          return (
            i?.setCacheOutcome(Sk.CACHED_ACCESS_TOKEN_EXPIRED),
            [null, Sk.CACHED_ACCESS_TOKEN_EXPIRED]
          );
        if (u.refreshOn && kD.isTokenExpired(u.refreshOn.toString(), 0))
          ((l = Sk.PROACTIVELY_REFRESHED),
            i?.setCacheOutcome(Sk.PROACTIVELY_REFRESHED));
        return [
          await c$.generateAuthenticationResult(
            r,
            n,
            {
              account: null,
              idToken: null,
              accessToken: u,
              refreshToken: null,
              appMetadata: null,
            },
            !0,
            e,
          ),
          l,
        ];
      }
      readAccessTokenFromCache(e, t, r, n, o) {
        let i = {
            homeAccountId: Ai.EMPTY_STRING,
            environment: e.canonicalAuthorityUrlComponents.HostNameAndPort,
            credentialType: O0.ACCESS_TOKEN,
            clientId: t,
            realm: e.tenant,
            target: l$.createSearchScopes(r.asArray()),
          },
          s = n.getAccessTokensByFilter(i, o);
        if (s.length < 1) return null;
        else if (s.length > 1) throw os(rH.multipleMatchingTokens);
        return s[0];
      }
      async executeTokenRequest(e, t, r) {
        let n, o;
        if (this.appTokenProvider) {
          this.logger.info("Using appTokenProvider extensibility.");
          let a = {
            correlationId: e.correlationId,
            tenantId: this.config.authOptions.authority.tenant,
            scopes: e.scopes,
            claims: e.claims,
          };
          o = kD.nowSeconds();
          let l = await this.appTokenProvider(a);
          n = {
            access_token: l.accessToken,
            expires_in: l.expiresInSeconds,
            refresh_in: l.refreshInSeconds,
            token_type: IS.BEARER,
          };
        } else {
          let a = this.createTokenQueryParameters(e),
            l = iy.appendQueryString(t.tokenEndpoint, a),
            c = await this.createTokenRequestBody(e),
            u = this.createTokenRequestHeaders(),
            d = {
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
          (this.logger.info(
            "Sending token request to endpoint: " + t.tokenEndpoint,
          ),
            (o = kD.nowSeconds()));
          let p = await this.executePostToTokenEndpoint(
            l,
            c,
            u,
            d,
            e.correlationId,
          );
          ((n = p.body), (n.status = p.status));
        }
        let i = new c$(
          this.config.authOptions.clientId,
          this.cacheManager,
          this.cryptoUtils,
          this.logger,
          this.config.serializableCache,
          this.config.persistencePlugin,
        );
        return (
          i.validateTokenResponse(n, r),
          await i.handleServerTokenResponse(n, this.authority, o, e)
        );
      }
      async createTokenRequestBody(e) {
        let t = new Map();
        if (
          (Xc.addClientId(t, this.config.authOptions.clientId),
          Xc.addScopes(t, e.scopes, !1),
          Xc.addGrantType(t, eie.CLIENT_CREDENTIALS_GRANT),
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
        let n =
          e.clientAssertion || this.config.clientCredentials.clientAssertion;
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
        return u8.mapToQueryString(t);
      }
    };
  });
