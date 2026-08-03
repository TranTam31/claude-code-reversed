// Module: veo (lines 159073-159294)
  var veo = S(() => {
    N0();
    oeo();
    hZn();
    Eeo();
    w8c();
    /*! @azure/msal-node v3.8.1 2025-10-29 */ pIt = class pIt extends Zkt {
      constructor(e, t, r, n) {
        super(t, r, e, new TZt(), n);
        ((this.cache = {}), (this.changeEmitters = []), (this.logger = e));
      }
      registerChangeEmitter(e) {
        this.changeEmitters.push(e);
      }
      emitChange() {
        this.changeEmitters.forEach((e) => e.call(null));
      }
      cacheToInMemoryCache(e) {
        let t = {
          accounts: {},
          idTokens: {},
          accessTokens: {},
          refreshTokens: {},
          appMetadata: {},
        };
        for (let r in e) {
          let n = e[r];
          if (typeof n !== "object") continue;
          if (n instanceof WB) t.accounts[r] = n;
          else if (hZ.isIdTokenEntity(n)) t.idTokens[r] = n;
          else if (hZ.isAccessTokenEntity(n)) t.accessTokens[r] = n;
          else if (hZ.isRefreshTokenEntity(n)) t.refreshTokens[r] = n;
          else if (hZ.isAppMetadataEntity(r, n)) t.appMetadata[r] = n;
          else continue;
        }
        return t;
      }
      inMemoryCacheToCache(e) {
        let t = this.getCache();
        return (
          (t = {
            ...t,
            ...e.accounts,
            ...e.idTokens,
            ...e.accessTokens,
            ...e.refreshTokens,
            ...e.appMetadata,
          }),
          t
        );
      }
      getInMemoryCache() {
        return (
          this.logger.trace("Getting in-memory cache"),
          this.cacheToInMemoryCache(this.getCache())
        );
      }
      setInMemoryCache(e) {
        this.logger.trace("Setting in-memory cache");
        let t = this.inMemoryCacheToCache(e);
        (this.setCache(t), this.emitChange());
      }
      getCache() {
        return (this.logger.trace("Getting cache key-value store"), this.cache);
      }
      setCache(e) {
        (this.logger.trace("Setting cache key value store"),
          (this.cache = e),
          this.emitChange());
      }
      getItem(e) {
        return (this.logger.tracePii(`Item key: ${e}`), this.getCache()[e]);
      }
      setItem(e, t) {
        this.logger.tracePii(`Item key: ${e}`);
        let r = this.getCache();
        ((r[e] = t), this.setCache(r));
      }
      generateCredentialKey(e) {
        return v8c(e);
      }
      generateAccountKey(e) {
        return A8c(e);
      }
      getAccountKeys() {
        let e = this.getInMemoryCache();
        return Object.keys(e.accounts);
      }
      getTokenKeys() {
        let e = this.getInMemoryCache();
        return {
          idToken: Object.keys(e.idTokens),
          accessToken: Object.keys(e.accessTokens),
          refreshToken: Object.keys(e.refreshTokens),
        };
      }
      getAccount(e) {
        return this.getItem(e)
          ? Object.assign(new WB(), this.getItem(e))
          : null;
      }
      async setAccount(e) {
        let t = this.generateAccountKey(WB.getAccountInfo(e));
        this.setItem(t, e);
      }
      getIdTokenCredential(e) {
        let t = this.getItem(e);
        if (hZ.isIdTokenEntity(t)) return t;
        return null;
      }
      async setIdTokenCredential(e) {
        let t = this.generateCredentialKey(e);
        this.setItem(t, e);
      }
      getAccessTokenCredential(e) {
        let t = this.getItem(e);
        if (hZ.isAccessTokenEntity(t)) return t;
        return null;
      }
      async setAccessTokenCredential(e) {
        let t = this.generateCredentialKey(e);
        this.setItem(t, e);
      }
      getRefreshTokenCredential(e) {
        let t = this.getItem(e);
        if (hZ.isRefreshTokenEntity(t)) return t;
        return null;
      }
      async setRefreshTokenCredential(e) {
        let t = this.generateCredentialKey(e);
        this.setItem(t, e);
      }
      getAppMetadata(e) {
        let t = this.getItem(e);
        if (hZ.isAppMetadataEntity(e, t)) return t;
        return null;
      }
      setAppMetadata(e) {
        let t = hZ.generateAppMetadataKey(e);
        this.setItem(t, e);
      }
      getServerTelemetry(e) {
        let t = this.getItem(e);
        if (t && hZ.isServerTelemetryEntity(e, t)) return t;
        return null;
      }
      setServerTelemetry(e, t) {
        this.setItem(e, t);
      }
      getAuthorityMetadata(e) {
        let t = this.getItem(e);
        if (t && hZ.isAuthorityMetadataEntity(e, t)) return t;
        return null;
      }
      getAuthorityMetadataKeys() {
        return this.getKeys().filter((e) => this.isAuthorityMetadata(e));
      }
      setAuthorityMetadata(e, t) {
        this.setItem(e, t);
      }
      getThrottlingCache(e) {
        let t = this.getItem(e);
        if (t && hZ.isThrottlingEntity(e, t)) return t;
        return null;
      }
      setThrottlingCache(e, t) {
        this.setItem(e, t);
      }
      removeItem(e) {
        this.logger.tracePii(`Item key: ${e}`);
        let t = !1,
          r = this.getCache();
        if (r[e]) (delete r[e], (t = !0));
        if (t) (this.setCache(r), this.emitChange());
        return t;
      }
      removeOutdatedAccount(e) {
        this.removeItem(e);
      }
      containsKey(e) {
        return this.getKeys().includes(e);
      }
      getKeys() {
        this.logger.trace("Retrieving all cache keys");
        let e = this.getCache();
        return [...Object.keys(e)];
      }
      clear() {
        (this.logger.trace("Clearing cache entries created by MSAL"),
          this.getKeys().forEach((t) => {
            this.removeItem(t);
          }),
          this.emitChange());
      }
      static generateInMemoryCache(e) {
        return zit.deserializeAllCache(zit.deserializeJSONBlob(e));
      }
      static generateJsonCache(e) {
        return vkt.serializeAllCache(e);
      }
      updateCredentialCacheKey(e, t) {
        let r = this.generateCredentialKey(t);
        if (e !== r) {
          let n = this.getItem(e);
          if (n)
            return (
              this.removeItem(e),
              this.setItem(r, n),
              this.logger.verbose(
                `Updated an outdated ${t.credentialType} cache key`,
              ),
              r
            );
          else
            this.logger.error(
              `Attempted to update an outdated ${t.credentialType} cache key but no item matching the outdated key was found in storage`,
            );
        }
        return e;
      }
    };
  });
