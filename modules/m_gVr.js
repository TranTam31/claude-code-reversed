// Module: gVr (lines 151647-151886)
  var gVr = S(() => {
    B6c();
    xit();
    cNe();
    vj();
    iNe();
    l8();
    tH();
    dNe = class dNe extends mZn {
      constructor(e) {
        var t, r;
        let n = `azsdk-js-identity/${MQn}`,
          o = (
            (t = e === null || e === void 0 ? void 0 : e.userAgentOptions) ===
              null || t === void 0
              ? void 0
              : t.userAgentPrefix
          )
            ? `${e.userAgentOptions.userAgentPrefix} ${n}`
            : `${n}`,
          i = thg(e);
        if (!i.startsWith("https:"))
          throw Error(
            "The authorityHost address must use the 'https' protocol.",
          );
        super(
          Object.assign(
            Object.assign(
              {
                requestContentType: "application/json; charset=utf-8",
                retryOptions: { maxRetries: 3 },
              },
              e,
            ),
            { userAgentOptions: { userAgentPrefix: o }, baseUri: i },
          ),
        );
        if (
          ((this.allowInsecureConnection = !1),
          (this.authorityHost = i),
          (this.abortControllers = new Map()),
          (this.allowLoggingAccountIdentifiers =
            (r = e === null || e === void 0 ? void 0 : e.loggingOptions) ===
              null || r === void 0
              ? void 0
              : r.allowLoggingAccountIdentifiers),
          (this.tokenCredentialOptions = Object.assign({}, e)),
          e === null || e === void 0 ? void 0 : e.allowInsecureConnection)
        )
          this.allowInsecureConnection = e.allowInsecureConnection;
      }
      async sendTokenRequest(e) {
        Joe.info(`IdentityClient: sending token request to [${e.url}]`);
        let t = await this.sendRequest(e);
        if (t.bodyAsText && (t.status === 200 || t.status === 201)) {
          let r = JSON.parse(t.bodyAsText);
          if (!r.access_token) return null;
          this.logIdentifiers(t);
          let n = {
            accessToken: {
              token: r.access_token,
              expiresOnTimestamp: G6c(r),
              refreshAfterTimestamp: V6c(r),
              tokenType: "Bearer",
            },
            refreshToken: r.refresh_token,
          };
          return (
            Joe.info(
              `IdentityClient: [${e.url}] token acquired, expires on ${n.accessToken.expiresOnTimestamp}`,
            ),
            n
          );
        } else {
          let r = new oxe(t.status, t.bodyAsText);
          throw (
            Joe.warning(
              `IdentityClient: authentication error. HTTP status: ${t.status}, ${r.errorResponse.errorDescription}`,
            ),
            r
          );
        }
      }
      async refreshAccessToken(e, t, r, n, o, i = {}) {
        if (n === void 0) return null;
        Joe.info(
          `IdentityClient: refreshing access token with client ID: ${t}, scopes: ${r} started`,
        );
        let s = {
          grant_type: "refresh_token",
          client_id: t,
          refresh_token: n,
          scope: r,
        };
        if (o !== void 0) s.client_secret = o;
        let a = new URLSearchParams(s);
        return eA.withSpan(
          "IdentityClient.refreshAccessToken",
          i,
          async (l) => {
            try {
              let c = j6c(e),
                u = Hde({
                  url: `${this.authorityHost}/${e}/${c}`,
                  method: "POST",
                  body: a.toString(),
                  abortSignal: i.abortSignal,
                  headers: l6e({
                    Accept: "application/json",
                    "Content-Type": "application/x-www-form-urlencoded",
                  }),
                  tracingOptions: l.tracingOptions,
                }),
                d = await this.sendTokenRequest(u);
              return (
                Joe.info(`IdentityClient: refreshed token for client ID: ${t}`),
                d
              );
            } catch (c) {
              if (
                c.name === X5r &&
                c.errorResponse.error === "interaction_required"
              )
                return (
                  Joe.info(
                    `IdentityClient: interaction required for client ID: ${t}`,
                  ),
                  null
                );
              else
                throw (
                  Joe.warning(
                    `IdentityClient: failed refreshing token for client ID: ${t}: ${c}`,
                  ),
                  c
                );
            }
          },
        );
      }
      generateAbortSignal(e) {
        let t = new AbortController(),
          r = this.abortControllers.get(e) || [];
        (r.push(t), this.abortControllers.set(e, r));
        let n = t.signal.onabort;
        return (
          (t.signal.onabort = (...o) => {
            if ((this.abortControllers.set(e, void 0), n)) n.apply(t.signal, o);
          }),
          t.signal
        );
      }
      abortRequests(e) {
        let t = e || hVr,
          r = [
            ...(this.abortControllers.get(t) || []),
            ...(this.abortControllers.get(hVr) || []),
          ];
        if (!r.length) return;
        for (let n of r) n.abort();
        this.abortControllers.set(t, void 0);
      }
      getCorrelationId(e) {
        var t;
        let r =
          (t = e === null || e === void 0 ? void 0 : e.body) === null ||
          t === void 0
            ? void 0
            : t
                .split("&")
                .map((n) => n.split("="))
                .find(([n]) => n === "client-request-id");
        return r && r.length ? r[1] || hVr : hVr;
      }
      async sendGetRequestAsync(e, t) {
        let r = Hde({
            url: e,
            method: "GET",
            body: t === null || t === void 0 ? void 0 : t.body,
            allowInsecureConnection: this.allowInsecureConnection,
            headers: l6e(t === null || t === void 0 ? void 0 : t.headers),
            abortSignal: this.generateAbortSignal(hVr),
          }),
          n = await this.sendRequest(r);
        return (
          this.logIdentifiers(n),
          {
            body: n.bodyAsText ? JSON.parse(n.bodyAsText) : void 0,
            headers: n.headers.toJSON(),
            status: n.status,
          }
        );
      }
      async sendPostRequestAsync(e, t) {
        let r = Hde({
            url: e,
            method: "POST",
            body: t === null || t === void 0 ? void 0 : t.body,
            headers: l6e(t === null || t === void 0 ? void 0 : t.headers),
            allowInsecureConnection: this.allowInsecureConnection,
            abortSignal: this.generateAbortSignal(this.getCorrelationId(t)),
          }),
          n = await this.sendRequest(r);
        return (
          this.logIdentifiers(n),
          {
            body: n.bodyAsText ? JSON.parse(n.bodyAsText) : void 0,
            headers: n.headers.toJSON(),
            status: n.status,
          }
        );
      }
      getTokenCredentialOptions() {
        return this.tokenCredentialOptions;
      }
      logIdentifiers(e) {
        if (!this.allowLoggingAccountIdentifiers || !e.bodyAsText) return;
        let t = "No User Principal Name available";
        try {
          let n = (e.parsedBody || JSON.parse(e.bodyAsText)).access_token;
          if (!n) return;
          let o = n.split(".")[1],
            {
              appid: i,
              upn: s,
              tid: a,
              oid: l,
            } = JSON.parse(Buffer.from(o, "base64").toString("utf8"));
          Joe.info(
            `[Authenticated account] Client ID: ${i}. Tenant ID: ${a}. User Principal Name: ${s || t}. Object ID (user): ${l}`,
          );
        } catch (r) {
          Joe.warning(
            "allowLoggingAccountIdentifiers was set, but we couldn't log the account information. Error:",
            r.message,
          );
        }
      }
    };
  });
