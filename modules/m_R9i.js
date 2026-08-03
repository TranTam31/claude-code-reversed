// Module: R9i (lines 163781-163997)
  var R9i = S(() => {
    N0();
    x6r();
    /*! @azure/msal-node v3.8.1 2025-10-29 */ q6r = class q6r extends xY {
      constructor(e) {
        super(e);
      }
      async acquireToken(e) {
        if (
          ((this.scopeSet = new l$(e.scopes || [])),
          (this.userAssertionHash = await this.cryptoUtils.hashString(
            e.oboAssertion,
          )),
          e.skipCache || e.claims)
        )
          return this.executeTokenRequest(
            e,
            this.authority,
            this.userAssertionHash,
          );
        try {
          return await this.getCachedAuthenticationResult(e);
        } catch (t) {
          return await this.executeTokenRequest(
            e,
            this.authority,
            this.userAssertionHash,
          );
        }
      }
      async getCachedAuthenticationResult(e) {
        let t = this.readAccessTokenFromCacheForOBO(
          this.config.authOptions.clientId,
          e,
        );
        if (!t)
          throw (
            this.serverTelemetryManager?.setCacheOutcome(
              Sk.NO_CACHED_ACCESS_TOKEN,
            ),
            this.logger.info(
              "SilentFlowClient:acquireCachedToken - No access token found in cache for the given properties.",
            ),
            os(rH.tokenRefreshRequired)
          );
        else if (
          kD.isTokenExpired(
            t.expiresOn,
            this.config.systemOptions.tokenRenewalOffsetSeconds,
          )
        )
          throw (
            this.serverTelemetryManager?.setCacheOutcome(
              Sk.CACHED_ACCESS_TOKEN_EXPIRED,
            ),
            this.logger.info(
              `OnbehalfofFlow:getCachedAuthenticationResult - Cached access token is expired or will expire within ${this.config.systemOptions.tokenRenewalOffsetSeconds} seconds.`,
            ),
            os(rH.tokenRefreshRequired)
          );
        let r = this.readIdTokenFromCacheForOBO(
            t.homeAccountId,
            e.correlationId,
          ),
          n,
          o = null;
        if (r) {
          n = xZn.extractTokenClaims(r.secret, nie.base64Decode);
          let i = n.oid || n.sub,
            s = {
              homeAccountId: r.homeAccountId,
              environment: r.environment,
              tenantId: r.realm,
              username: Ai.EMPTY_STRING,
              localAccountId: i || Ai.EMPTY_STRING,
            };
          o = this.cacheManager.getAccount(
            this.cacheManager.generateAccountKey(s),
            e.correlationId,
          );
        }
        if (this.config.serverTelemetryManager)
          this.config.serverTelemetryManager.incrementCacheHits();
        return c$.generateAuthenticationResult(
          this.cryptoUtils,
          this.authority,
          {
            account: o,
            accessToken: t,
            idToken: r,
            refreshToken: null,
            appMetadata: null,
          },
          !0,
          e,
          n,
        );
      }
      readIdTokenFromCacheForOBO(e, t) {
        let r = {
            homeAccountId: e,
            environment:
              this.authority.canonicalAuthorityUrlComponents.HostNameAndPort,
            credentialType: O0.ID_TOKEN,
            clientId: this.config.authOptions.clientId,
            realm: this.authority.tenant,
          },
          n = this.cacheManager.getIdTokensByFilter(r, t);
        if (Object.values(n).length < 1) return null;
        return Object.values(n)[0];
      }
      readAccessTokenFromCacheForOBO(e, t) {
        let r = t.authenticationScheme || IS.BEARER,
          o = {
            credentialType:
              r && r.toLowerCase() !== IS.BEARER.toLowerCase()
                ? O0.ACCESS_TOKEN_WITH_AUTH_SCHEME
                : O0.ACCESS_TOKEN,
            clientId: e,
            target: l$.createSearchScopes(this.scopeSet.asArray()),
            tokenType: r,
            keyId: t.sshKid,
            requestedClaimsHash: t.requestedClaimsHash,
            userAssertionHash: this.userAssertionHash,
          },
          i = this.cacheManager.getAccessTokensByFilter(o, t.correlationId),
          s = i.length;
        if (s < 1) return null;
        else if (s > 1) throw os(rH.multipleMatchingTokens);
        return i[0];
      }
      async executeTokenRequest(e, t, r) {
        let n = this.createTokenQueryParameters(e),
          o = iy.appendQueryString(t.tokenEndpoint, n),
          i = await this.createTokenRequestBody(e),
          s = this.createTokenRequestHeaders(),
          a = {
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
          l = kD.nowSeconds(),
          c = await this.executePostToTokenEndpoint(
            o,
            i,
            s,
            a,
            e.correlationId,
          ),
          u = new c$(
            this.config.authOptions.clientId,
            this.cacheManager,
            this.cryptoUtils,
            this.logger,
            this.config.serializableCache,
            this.config.persistencePlugin,
          );
        return (
          u.validateTokenResponse(c.body),
          await u.handleServerTokenResponse(
            c.body,
            this.authority,
            l,
            e,
            void 0,
            r,
          )
        );
      }
      async createTokenRequestBody(e) {
        let t = new Map();
        if (
          (Xc.addClientId(t, this.config.authOptions.clientId),
          Xc.addScopes(t, e.scopes),
          Xc.addGrantType(t, eie.JWT_BEARER),
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
          Xc.addRequestTokenUse(t, eIt.ON_BEHALF_OF),
          Xc.addOboAssertion(t, e.oboAssertion),
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
          e.claims ||
          (this.config.authOptions.clientCapabilities &&
            this.config.authOptions.clientCapabilities.length > 0)
        )
          Xc.addClaims(t, e.claims, this.config.authOptions.clientCapabilities);
        return u8.mapToQueryString(t);
      }
    };
  });
