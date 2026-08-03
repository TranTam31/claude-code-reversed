// Module: $Cd (lines 479654-479784)
  var $Cd = S(() => {
    zt();
    vt();
    Wu();
    Ir();
    KB();
    NCd = require("http");
    U1s = class U1s {
      localServer;
      port = 0;
      promiseResolver = null;
      promiseRejecter = null;
      expectedState = null;
      pendingResponse = null;
      callbackPath;
      constructor(e = "/callback") {
        ((this.localServer = NCd.createServer()), (this.callbackPath = e));
      }
      async start(e) {
        return new Promise((t, r) => {
          (this.localServer.once("error", (n) => {
            (pe(
              "oauth_callback_listener",
              "oauth_callback_server_start_failed",
            ),
              r(Error(`Failed to start OAuth callback server: ${n.message}`)));
          }),
            this.localServer.listen(e ?? 0, "127.0.0.1", () => {
              let n = this.localServer.address();
              ((this.port = n.port), t(this.port));
            }));
        });
      }
      getPort() {
        return this.port;
      }
      hasPendingResponse() {
        return this.pendingResponse !== null;
      }
      async waitForAuthorization(e, t) {
        return new Promise((r, n) => {
          ((this.promiseResolver = r),
            (this.promiseRejecter = n),
            (this.expectedState = e),
            this.startLocalListener(t));
        });
      }
      handleSuccessRedirect(e, t) {
        if (!this.pendingResponse) return;
        if (t) {
          (t(this.pendingResponse, e),
            (this.pendingResponse = null),
            O("tengu_oauth_automatic_redirect", { custom_handler: !0 }));
          return;
        }
        let r = y8(e) ? Ds().CLAUDEAI_SUCCESS_URL : Ds().CONSOLE_SUCCESS_URL;
        (this.pendingResponse.writeHead(302, { Location: r }),
          this.pendingResponse.end(),
          (this.pendingResponse = null),
          O("tengu_oauth_automatic_redirect", {}));
      }
      handleErrorRedirect() {
        if (!this.pendingResponse) return;
        let e = Ds().CLAUDEAI_SUCCESS_URL;
        (this.pendingResponse.writeHead(302, { Location: e }),
          this.pendingResponse.end(),
          (this.pendingResponse = null),
          O("tengu_oauth_automatic_redirect_error", {}));
      }
      startLocalListener(e) {
        (this.localServer.on("request", this.handleRedirect.bind(this)),
          this.localServer.on("error", this.handleError.bind(this)),
          e());
      }
      handleRedirect(e, t) {
        let r = new URL(e.url || "", `http://${e.headers.host || "localhost"}`);
        if (r.pathname !== this.callbackPath) {
          (t.writeHead(404), t.end());
          return;
        }
        let n = r.searchParams.get("code") ?? void 0,
          o = r.searchParams.get("state") ?? void 0;
        this.validateAndRespond(n, o, t);
      }
      validateAndRespond(e, t, r) {
        if (!e) {
          (pe("oauth_callback_listener", "oauth_callback_no_code"),
            r.writeHead(400),
            r.end("Authorization code not found"),
            this.reject(Error("No authorization code received")));
          return;
        }
        if (t !== this.expectedState) {
          (pe("oauth_callback_listener", "oauth_callback_state_mismatch"),
            r.writeHead(400),
            r.end("Invalid state parameter"),
            this.reject(Error("Invalid state parameter")));
          return;
        }
        ((this.pendingResponse = r),
          be("oauth_callback_listener"),
          this.resolve(e));
      }
      handleError(e) {
        (pe("oauth_callback_listener", "oauth_callback_server_error"),
          xe(e),
          this.close(),
          this.reject(e));
      }
      resolve(e) {
        if (this.promiseResolver)
          (this.promiseResolver(e),
            (this.promiseResolver = null),
            (this.promiseRejecter = null));
      }
      reject(e) {
        if (this.promiseRejecter)
          (this.promiseRejecter(e),
            (this.promiseResolver = null),
            (this.promiseRejecter = null));
      }
      close() {
        if (this.pendingResponse) this.handleErrorRedirect();
        if (this.localServer)
          (this.localServer.removeAllListeners(), this.localServer.close());
      }
      [Symbol.dispose]() {
        this.close();
      }
    };
  });
