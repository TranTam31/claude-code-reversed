// Module: g2s (lines 524690-524753)
  var g2s = S(() => {
    pt();
    o2s();
    Gb();
    ix();
    Ar();
    Qr();
    st();
    Ja();
    Wi();
    H0();
    Lfr();
    S1d();
    Xx();
    yte();
    zt();
    Hdt();
    Ei();
    Vu();
    jp();
    eSe();
    Grt();
    OE();
    Un();
    Zt();
    Pr();
    SPo();
    c2s();
    wPo();
    t2s();
    xcn();
    P1d();
    ((B1d = require("child_process")),
      (Hte = x(require("fs/promises"))),
      ($4 = require("path")),
      (Amt = Symbol("deadline reached")),
      (W1d = `"${ri}"`));
    ((V1d = /:\/\/[^/\s\\]*@/g),
      (q1d = /(?<![a-z0-9.+-])(?:s3|gs|az):\/\/([a-z0-9][a-z0-9._-]*)/g));
    js_ = new Map([
      ["CLAUDE.md files and project docs", Ee("docs")],
      ["Repo facts", Ee("repo_facts")],
      [Ohr, Ee("repo_visibility")],
      [K2e, Ee("sibling_docs")],
      ["Existing auto-mode settings (selective read)", Ee("settings")],
      ["Recent usage in this project (names only)", Ee("transcripts")],
      [gFt, Ee("shell_history")],
      [Uhr, Ee("home_repos")],
      [Bhr, Ee("all_projects_transcripts")],
      ["Config scans (names only)", Ee("config_scans")],
      ["Shipped default auto-mode rule labels", Ee("default_rule_labels")],
    ]);
    ((qs_ = /^(127\.0\.0\.1|localhost|.*jsdelivr.*|.*unpkg.*|example\.com)$/),
      (Ks_ =
        /denied by the Claude Code auto mode classifier\. Reason: ([\w][\w ,'-]{0,59})/g),
      (Ys_ = new Set(
        "ls cd cat rg grep find git gh node bun npm yarn pnpm cargo go make just docker curl wget echo printf sed awk tr cut sort uniq xargs jq tee head tail wc which date diff touch ln chmod mkdir cp mv rm ps kill pgrep pkill sleep stat env set export unset read source command ssh scp tar zip unzip vim nano less more man tmux sudo bash sh zsh if then else elif fi for while until do done case esac function return exit true false".split(
          " ",
        ),
      )));
    F1d =
      /^(docker\.io|ghcr\.io|registry\.npmjs\.org|pypi\.org|mcr\.microsoft\.com|nvcr\.io|gcr\.io|public\.ecr\.aws|lscr\.io|quay\.io|registry-1\.docker\.io|127\.0\.0\.1|localhost)$/;
    U1d = /(^|\/)(helm|iam|prod|k8s|kubernetes|rbac)\//;
  });
