// Module: S1d (lines 522636-522657)
  var S1d = S(() => {
    Rh();
    ls_ = new Set(["-u", "-g", "-c", "-d", "-h", "-p", "-r", "-t"]);
    ((s2s =
      /\.ssh\b|id_rsa|id_ed25519|id_ecdsa|\.aws\/credentials|\.netrc\b|\.gnupg\/|\/etc\/shadow\b|\.kube\/config\b|\.docker\/config\.json\b|\.npmrc\b|\.pypirc\b|\.git-credentials\b|\.config\/gh\/hosts\.yml\b/i),
      (us_ =
        /(^|\s)[0-7]{2,3}[2367](\s|$|:)|(^|\s)(?:a|ugo|o|go|uo)(?:\+|=)[rstx]*w[rstx]*(\s|$|:)/),
      (g1d = new Set([
        "bash",
        "sh",
        "zsh",
        "dash",
        "ksh",
        "fish",
        "node",
        "perl",
        "ruby",
      ])),
      (ds_ = new Set(["iex", "invoke-expression"])),
      (ps_ = new Set(["curl", "wget", "iwr", "invoke-webrequest"])));
    gs_ = new Set(["remove-item", "ri", "rm", "del", "erase", "rd", "rmdir"]);
  });
