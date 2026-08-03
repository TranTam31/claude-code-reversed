// Module: WDs (lines 426397-426459)
  var WDs = S(() => {
    Zg();
    Wrt();
    vt();
    dH();
    Ge();
    st();
    PM();
    Ir();
    Xze();
    U_o();
    vo();
    Un();
    Zt();
    mRs();
    $pd();
    SHe();
    pRs();
    $Ds = class $Ds extends Error {
      constructor(e) {
        super(`Claude Code is unable to fetch from ${e}`);
        this.name = "DomainBlockedError";
      }
    };
    FDs = class FDs extends Error {
      constructor(e) {
        super(
          `Unable to verify if domain ${e} is safe to fetch. This may be due to network restrictions or enterprise security policies blocking claude.ai.`,
        );
        this.name = "DomainCheckFailedError";
      }
    };
    ogd = class ogd extends Error {
      domain;
      constructor(e) {
        super(
          Ie({
            error_type: "EGRESS_BLOCKED",
            domain: e,
            message: `Access to ${e} is blocked by the network egress proxy.`,
          }),
        );
        this.domain = e;
        this.name = "EgressBlockedError";
      }
    };
    igd = class igd extends Error {
      constructor(e) {
        super(`Too many redirects (exceeded ${e})`);
        this.name = "TooManyRedirectsError";
      }
    };
    Nin = class Nin extends Error {
      code;
      constructor(e, t) {
        super(e);
        ((this.name = "WebFetchTransportError"), (this.code = t));
      }
    };
    ((dCo = new JG({ maxSize: EBy, ttl: SBy })),
      (UDs = new JG({ max: 128, ttl: 300000 })));
    kBy = new Set([301, 302, 303, 307, 308]);
  });
