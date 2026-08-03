// Module: R4n (lines 31321-31423)
  var R4n = S(() => {
    II();
    Uue();
    u2r();
    c2r();
    lMl();
    rCe();
    bxi();
    Sxi = {
      transitional: urt,
      adapter: ["xhr", "http", "fetch"],
      transformRequest: [
        function (t, r) {
          let n = r.getContentType() || "",
            o = n.indexOf("application/json") > -1,
            i = Gn.isObject(t);
          if (i && Gn.isHTMLForm(t)) t = new FormData(t);
          if (Gn.isFormData(t)) return o ? JSON.stringify(I4n(t)) : t;
          if (
            Gn.isArrayBuffer(t) ||
            Gn.isBuffer(t) ||
            Gn.isStream(t) ||
            Gn.isFile(t) ||
            Gn.isBlob(t) ||
            Gn.isReadableStream(t)
          )
            return t;
          if (Gn.isArrayBufferView(t)) return t.buffer;
          if (Gn.isURLSearchParams(t))
            return (
              r.setContentType(
                "application/x-www-form-urlencoded;charset=utf-8",
                !1,
              ),
              t.toString()
            );
          let a;
          if (i) {
            let l = vKt(this, "formSerializer");
            if (n.indexOf("application/x-www-form-urlencoded") > -1)
              return _xi(t, l).toString();
            if (
              (a = Gn.isFileList(t)) ||
              n.indexOf("multipart/form-data") > -1
            ) {
              let c = vKt(this, "env"),
                u = c && c.FormData;
              return crt(a ? { "files[]": t } : t, u && new u(), l);
            }
          }
          if (i || o) return (r.setContentType("application/json", !1), YJm(t));
          return t;
        },
      ],
      transformResponse: [
        function (t) {
          let r = vKt(this, "transitional") || Sxi.transitional,
            n = r && r.forcedJSONParsing,
            o = vKt(this, "responseType"),
            i = o === "json";
          if (Gn.isResponse(t) || Gn.isReadableStream(t)) return t;
          if (t && Gn.isString(t) && ((n && !o) || i)) {
            let a = !(r && r.silentJSONParsing) && i;
            try {
              return JSON.parse(t, vKt(this, "parseReviver"));
            } catch (l) {
              if (a) {
                if (l.name === "SyntaxError")
                  throw Pl.from(
                    l,
                    Pl.ERR_BAD_RESPONSE,
                    this,
                    null,
                    vKt(this, "response"),
                  );
                throw l;
              }
            }
          }
          return t;
        },
      ],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      env: { FormData: Cw.classes.FormData, Blob: Cw.classes.Blob },
      validateStatus: function (t) {
        return t >= 200 && t < 300;
      },
      headers: {
        common: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": void 0,
        },
      },
    };
    Gn.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
      Sxi.headers[e] = {};
    });
    AKt = Sxi;
  });
