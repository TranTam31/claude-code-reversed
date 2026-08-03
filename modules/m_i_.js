// Module: I$ (lines 266938-266999)
  var I$ = S(() => {
    gd();
    pt();
    zt();
    vt();
    np();
    hn();
    ei();
    Ge();
    st();
    Ja();
    Wi();
    Jv();
    pGn();
    U5e();
    S7r();
    BO();
    Qa();
    kPt();
    im();
    hp();
    Ei();
    E7r();
    Cqe();
    xq();
    Un();
    Coe();
    w$e();
    Pr();
    I8e();
    ((Ha = require("fs/promises")),
      (vRu = x(Pst(), 1)),
      (ka = require("path")));
    KQg = /^[a-zA-Z0-9._-]+$/;
    m_ = class m_ extends Error {
      constructor(e) {
        super(e);
        this.name = "WorktreeIsolationError";
      }
    };
    gcs = class gcs extends Error {
      constructor(e) {
        super(e);
        this.name = "WorktreeGitTransientError";
      }
    };
    Vlt =
      /^claude (?:agent|session) .{1,255} \(pid (\d{1,10})(?: start (.{1,255}))?\)$/;
    ((tZg = /\p{Cc}/u), (mcs = /[\p{Cc}\p{Cf}]/u));
    rZg =
      /is not a working tree|validation failed|not a git repository: .*[\\/]\.git[\\/]worktrees[\\/]/;
    $Ru = `${ORu}.${NRu}`;
    nZg = [
      /^agent-a[0-9a-f]{16}$/,
      /^agent-a[0-9a-f]{7}$/,
      /^wf_[0-9a-f]{8}-[0-9a-f]{3}-\d+$/,
      /^wf-\d+$/,
      /^bridge-[A-Za-z0-9_]+(-[A-Za-z0-9_]+)*$/,
      /^job-[a-zA-Z0-9._-]{1,55}-[0-9a-f]{8}$/,
      /^bg-[a-zA-Z0-9._-]{1,55}-[0-9a-f]{8}$/,
    ];
  });
