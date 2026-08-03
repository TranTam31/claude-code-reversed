// Module: Iqc (lines 157598-157717)
  var Iqc = S(() => {
    g6r();
    Wit();
    jB();
    S6r();
    jI();
    Uit();
    wZt();
    cxe();
    A6e();
    WZn();
    vU();
    /*! @azure/msal-common v15.13.1 2025-10-29 */ neo = class neo extends xY {
      constructor(e, t) {
        super(e, t);
      }
      async acquireCachedToken(e) {
        this.performanceClient?.addQueueMeasurement(
          Ko.SilentFlowClientAcquireCachedToken,
          e.correlationId,
        );
        let t = Sk.NOT_APPLICABLE;
        if (
          e.forceRefresh ||
          (!this.config.cacheOptions.claimsBasedCachingEnabled &&
            !Ek.isEmptyObj(e.claims))
        )
          throw (
            this.setCacheOutcome(Sk.FORCE_REFRESH_OR_CLAIMS, e.correlationId),
            os(h6e)
          );
        if (!e.account) throw os(f6e);
        let r = e.account.tenantId || vqc(e.authority),
          n = this.cacheManager.getTokenKeys(),
          o = this.cacheManager.getAccessToken(e.account, e, n, r);
        if (!o)
          throw (
            this.setCacheOutcome(Sk.NO_CACHED_ACCESS_TOKEN, e.correlationId),
            os(h6e)
          );
        else if (
          uzi(o.cachedAt) ||
          IZt(o.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)
        )
          throw (
            this.setCacheOutcome(
              Sk.CACHED_ACCESS_TOKEN_EXPIRED,
              e.correlationId,
            ),
            os(h6e)
          );
        else if (o.refreshOn && IZt(o.refreshOn, 0))
          t = Sk.PROACTIVELY_REFRESHED;
        let i = e.authority || this.authority.getPreferredCache(),
          s = {
            account: this.cacheManager.getAccount(
              this.cacheManager.generateAccountKey(e.account),
              e.correlationId,
            ),
            accessToken: o,
            idToken: this.cacheManager.getIdToken(
              e.account,
              e.correlationId,
              n,
              r,
              this.performanceClient,
            ),
            refreshToken: null,
            appMetadata: this.cacheManager.readAppMetadataFromCache(i),
          };
        if (
          (this.setCacheOutcome(t, e.correlationId),
          this.config.serverTelemetryManager)
        )
          this.config.serverTelemetryManager.incrementCacheHits();
        return [
          await vE(
            this.generateResultFromCacheRecord.bind(this),
            Ko.SilentFlowClientGenerateResultFromCacheRecord,
            this.logger,
            this.performanceClient,
            e.correlationId,
          )(s, e),
          t,
        ];
      }
      setCacheOutcome(e, t) {
        if (
          (this.serverTelemetryManager?.setCacheOutcome(e),
          this.performanceClient?.addFields({ cacheOutcome: e }, t),
          e !== Sk.NOT_APPLICABLE)
        )
          this.logger.info(
            `Token refresh is required due to cache outcome: ${e}`,
          );
      }
      async generateResultFromCacheRecord(e, t) {
        this.performanceClient?.addQueueMeasurement(
          Ko.SilentFlowClientGenerateResultFromCacheRecord,
          t.correlationId,
        );
        let r;
        if (e.idToken)
          r = b6e(e.idToken.secret, this.config.cryptoInterface.base64Decode);
        if (t.maxAge || t.maxAge === 0) {
          let n = r?.auth_time;
          if (!n) throw os(p6e);
          XVr(n, t.maxAge);
        }
        return c$.generateAuthenticationResult(
          this.cryptoUtils,
          this.authority,
          e,
          !0,
          t,
          r,
        );
      }
    };
  });
