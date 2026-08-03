// Module: Eo (lines 184967-185155)
  var Eo = S(() => {
    gd();
    bl();
    Wu();
    zt();
    vt();
    y_e();
    ts();
    pt();
    uJt();
    T1e();
    KB();
    qIt();
    MJt();
    Gb();
    Iro();
    gno();
    tit();
    yno();
    s$();
    hn();
    Ge();
    n_();
    Ar();
    Qr();
    st();
    RT();
    Ja();
    Ano();
    Ir();
    QG();
    Iy();
    xq();
    bY();
    skt();
    _Y();
    Un();
    eNe();
    Zt();
    Pr();
    Oer();
    ((bXi = x(Drt(), 1)),
      (CXi = require("child_process")),
      (Cno = require("fs/promises")),
      (xXi = require("path")));
    ((Ueu = qr(() => {
      (w(
        `An Anthropic profile (~/.config/anthropic) is configured, but a claude.ai login exists \u2014 using the claude.ai login. Set ANTHROPIC_PROFILE=<name> to use the profile instead.${""}`,
        { level: "warn" },
      ),
        queueMicrotask(() =>
          O("tengu_wif_implicit_profile_skipped_stored_login", {}),
        ));
    })),
      (Beu = qr(() => {
        let e = pde() ?? "profile",
          t = e === "profile-implicit" && zWr() === "user_oauth";
        w(
          `Using Anthropic profile auth (${e}); ${t ? "a claude.ai login (/login) would take precedence over it" : "this takes precedence over any stored claude.ai login"}`,
          { level: "info" },
        );
      })));
    kXi = new Set(["claude-desktop", "local-agent", "claude-vscode"]);
    tZ = GOe(
      async () => {
        let e = performance.now();
        w("[API:auth] AWS credential resolve start");
        let t = await pkg(),
          r = await mkg();
        if (t) (await Z$c(), l5.cache.clear());
        return (
          w(
            `[API:auth] AWS credential resolve done in ${Math.round(performance.now() - e)}ms`,
          ),
          r
        );
      },
      (e) => Geu(e?.expiration),
    );
    l5 = VOe(async (e) => {
      let t = GOe(
        async () => {
          w(`[API:auth] resolving default AWS provider chain (region: ${e})`);
          let [{ fromNodeProviderChain: r }, n] = await Promise.all([
              Promise.resolve().then(() => (eit(), Zot)),
              HXt({
                url: `https://sts.${e}.amazonaws.com`,
                requestTimeoutMs: KIt,
              }),
            ]),
            o = r({
              ignoreCache: !0,
              parentClientConfig: {
                region: e,
                requestHandler:
                  n ?? new bXi.FetchHttpHandler({ requestTimeout: KIt }),
              },
              clientConfig: {
                requestHandler:
                  n ?? new bXi.FetchHttpHandler({ requestTimeout: KIt }),
              },
            });
          return Veu(o());
        },
        (r) => Geu(r.expiration?.getTime()),
        (r, n) => {
          if (r.expiration === void 0) return !0;
          let o = r.expiration.getTime();
          if (o > Date.now() + Peu) return !0;
          return n >= o - Peu && o > Date.now();
        },
      );
      return () => t();
    }, qeu);
    vXi = $Wn(new Map());
    sst = GOe(async () => await _kg(), ykg);
    QIt = qr(() => {
      if (tf() || Yv()) return null;
      let e = xt();
      if (!e.primaryApiKey) return null;
      return { key: e.primaryApiKey, source: "/login managed key" };
    });
    Tno = new Set();
    ((Akg = ["user:inference", "user:ccr_inference", "user:file_upload"]),
      (ms = qr(() => {
        if (tf()) return null;
        if (Z.CLAUDE_CODE_OAUTH_TOKEN)
          return {
            accessToken: Z.CLAUDE_CODE_OAUTH_TOKEN,
            refreshToken: null,
            expiresAt: null,
            scopes: Meu(),
            subscriptionType: Z.CLAUDE_CODE_SUBSCRIPTION_TYPE || null,
            rateLimitTier: Z.CLAUDE_CODE_RATE_LIMIT_TIER || null,
          };
        let e = Bde(),
          t = (r) => ({
            accessToken: r,
            refreshToken: null,
            expiresAt: null,
            scopes: vEi() ?? Meu(Akg),
            subscriptionType: Z.CLAUDE_CODE_SUBSCRIPTION_TYPE || null,
            rateLimitTier: Z.CLAUDE_CODE_RATE_LIMIT_TIER || null,
          });
        if (e && (!Lzt() || Yv())) return t(e);
        if (Yv()) return null;
        try {
          let o = zs().read()?.claudeAiOauth;
          if (o?.accessToken) return o;
        } catch (r) {
          xe(r);
        }
        if (e) return t(e);
        return null;
      })));
    _Xi = new Map();
    TU = VOe(async () => {
      if (tf()) return null;
      if (Z.CLAUDE_CODE_OAUTH_TOKEN) return ms();
      let e = Bde();
      if (e && (!Lzt() || Yv())) return ms();
      if (Yv()) return null;
      try {
        let n = (await zs().readAsync())?.claudeAiOauth;
        if (n?.accessToken) return n;
      } catch (t) {
        xe(t);
      }
      if (e) return ms();
      return null;
    });
    c8r = class c8r extends Error {
      constructor(e) {
        super(
          `Lock acquisition failed after ${e} attempts: another process is refreshing`,
        );
        this.name = "OAuthRefreshLockContendedError";
      }
    };
    p8r = VOe(async () => {
      if (tf() || Yv()) return null;
      let e = xt();
      if (!e.primaryApiKey) return null;
      return { key: e.primaryApiKey, source: "/login managed key" };
    });
    ((atu = ["EACCES", "EPERM", "EBUSY", "EIO", "EISDIR", "ELOOP"]),
      (Kkg = new RegExp(`\\b(${atu.join("|")})\\b`)));
    ltu = class ltu extends Error {};
  });
