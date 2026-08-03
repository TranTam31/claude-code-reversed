// Module: PPo (lines 525407-525457)
  var PPo = S(() => {
    Mg();
    pt();
    zt();
    Eo();
    g2s();
    c2s();
    xcn();
    Ghr();
    Ge();
    st();
    em();
    vo();
    Lfr();
    Xx();
    gNt();
    EU();
    yte();
    U8e();
    Pr();
    ((Ea_ = ["all", "project"]),
      (va_ = Se(() =>
        Re.object({
          environment: Re.array(Re.string())
            .min(1)
            .describe(
              'Markdown bullets and `### ` section separators. Never carries "$defaults".',
            ),
          allow: Re.array(Re.string()).describe(
            'Optional carve-outs. Empty when nothing was suggested. When non-empty, MUST start with the literal entry "$defaults".',
          ),
          soft_deny: Re.array(Re.string()).describe(
            'Optional extra soft blocks. Empty when nothing was suggested. When non-empty, MUST start with "$defaults".',
          ),
          hard_deny: Re.array(Re.string()).describe(
            'Optional extra hard blocks. Almost always empty \u2014 only propose one when the recon shows a clear-cut destructive footgun. When non-empty, MUST start with "$defaults".',
          ),
          remove_from_permissions_allow: Re.array(Re.string()).describe(
            'Exact permissions.allow rule strings from the flagged lists in the "Existing auto-mode settings" section that should be removed. Empty when none were flagged.',
          ),
          notes: Re.array(Re.string()).describe(
            "Short notes for the user: sections that were NOT GATHERED / INCOMPLETE, slots left at the shipped default because nothing was found, and anything you would have asked about.",
          ),
          mode: Re.enum(["append", "replace"]).default("append"),
          scope: Re.enum(Ea_).optional(),
        }),
      )),
      (Ta_ =
        "Please fix up the formatting of this incorrect JSON: your previous reply could not be parsed as a proposal. Re-emit the same proposal as a single raw JSON object with exactly the six required keys (environment, allow, soft_deny, hard_deny, remove_from_permissions_allow, notes), each an " +
        "array of strings \u2014 no surrounding prose, no code fence, no other keys."));
  });
