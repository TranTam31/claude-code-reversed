// Module: vLl (lines 34261-34404)
  var vLl = S(() => {
    II();
    P4n();
    u2r();
    Uue();
    _Ct();
    rCe();
    IOe();
    j4n();
    Xxi();
    ((mZm = typeof XMLHttpRequest < "u"),
      (ELl =
        mZm &&
        function (e) {
          return new Promise(function (r, n) {
            let o = V4n(e),
              i = o.data,
              s = NO.from(o.headers).normalize(),
              {
                responseType: a,
                onUploadProgress: l,
                onDownloadProgress: c,
              } = o,
              u,
              d,
              p,
              f,
              m;
            function g() {
              (f && f(),
                m && m(),
                o.cancelToken && o.cancelToken.unsubscribe(u),
                o.signal && o.signal.removeEventListener("abort", u));
            }
            let y = new XMLHttpRequest();
            (y.open(o.method.toUpperCase(), o.url, !0),
              (y.timeout = o.timeout));
            function _() {
              if (!y) return;
              let A = NO.from(
                  "getAllResponseHeaders" in y && y.getAllResponseHeaders(),
                ),
                T = {
                  data:
                    !a || a === "text" || a === "json"
                      ? y.responseText
                      : y.response,
                  status: y.status,
                  statusText: y.statusText,
                  headers: A,
                  config: e,
                  request: y,
                };
              (ROe(
                function (I) {
                  (r(I), g());
                },
                function (I) {
                  (n(I), g());
                },
                T,
              ),
                (y = null));
            }
            if ("onloadend" in y) y.onloadend = _;
            else
              y.onreadystatechange = function () {
                if (!y || y.readyState !== 4) return;
                if (
                  y.status === 0 &&
                  !(y.responseURL && y.responseURL.indexOf("file:") === 0)
                )
                  return;
                setTimeout(_);
              };
            if (
              ((y.onabort = function () {
                if (!y) return;
                (n(new Pl("Request aborted", Pl.ECONNABORTED, e, y)),
                  (y = null));
              }),
              (y.onerror = function (b) {
                let T = b && b.message ? b.message : "Network Error",
                  C = new Pl(T, Pl.ERR_NETWORK, e, y);
                ((C.event = b || null), n(C), (y = null));
              }),
              (y.ontimeout = function () {
                let b = o.timeout
                    ? "timeout of " + o.timeout + "ms exceeded"
                    : "timeout exceeded",
                  T = o.transitional || urt;
                if (o.timeoutErrorMessage) b = o.timeoutErrorMessage;
                (n(
                  new Pl(
                    b,
                    T.clarifyTimeoutError ? Pl.ETIMEDOUT : Pl.ECONNABORTED,
                    e,
                    y,
                  ),
                ),
                  (y = null));
              }),
              i === void 0 && s.setContentType(null),
              "setRequestHeader" in y)
            )
              Gn.forEach(s.toJSON(), function (b, T) {
                y.setRequestHeader(T, b);
              });
            if (!Gn.isUndefined(o.withCredentials))
              y.withCredentials = !!o.withCredentials;
            if (a && a !== "json") y.responseType = o.responseType;
            if (c) (([p, m] = v5e(c, !0)), y.addEventListener("progress", p));
            if (l && y.upload)
              (([d, f] = v5e(l)),
                y.upload.addEventListener("progress", d),
                y.upload.addEventListener("loadend", f));
            if (o.cancelToken || o.signal) {
              if (
                ((u = (A) => {
                  if (!y) return;
                  (n(!A || A.type ? new Bue(null, e, y) : A),
                    y.abort(),
                    (y = null));
                }),
                o.cancelToken && o.cancelToken.subscribe(u),
                o.signal)
              )
                o.signal.aborted ? u() : o.signal.addEventListener("abort", u);
            }
            let E = b2r(o.url);
            if (E && Cw.protocols.indexOf(E) === -1) {
              n(
                new Pl(
                  "Unsupported protocol " + E + ":",
                  Pl.ERR_BAD_REQUEST,
                  e,
                ),
              );
              return;
            }
            y.send(i || null);
          });
        }));
  });
