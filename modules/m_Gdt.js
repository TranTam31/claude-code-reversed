// Module: Gdt (lines 373936-374010)
  var Gdt = S(() => {
    Vn();
    pt();
    vt();
    zt();
    ei();
    st();
    Ja();
    Wi();
    Ir();
    jdt();
    H0();
    jp();
    yv();
    Zt();
    ((nrd = fur("commit")),
      (dvo = fur("push")),
      (ord = /(?:^|\s)(?:-n|--dry-run)(?=\s|$)/),
      (UIy = fur("cherry-pick")),
      (BIy = fur("merge", "(?!-)")),
      (jIy = fur("rebase")),
      (pvo = Se(() =>
        v.object({
          commit: v
            .object({
              sha: v.string(),
              kind: v.enum(["committed", "amended", "cherry-picked"]),
            })
            .optional(),
          push: v.object({ branch: v.string() }).optional(),
          branch: v
            .object({ ref: v.string(), action: v.enum(["merged", "rebased"]) })
            .optional(),
          pr: v
            .object({
              number: v.number(),
              url: v.string().optional(),
              action: v.enum([
                "created",
                "edited",
                "merged",
                "commented",
                "closed",
                "ready",
                "draft",
                "auto-merge-enabled",
                "auto-merge-disabled",
              ]),
            })
            .optional(),
        }),
      )),
      (WIy = /\bgh\s+pr\s+checkout\b[^&|;]*\s(\d+)(?=\s|$|[&|;])/),
      (GIy = /^[A-Za-z0-9][\w.-]*\/[A-Za-z0-9][\w.-]*$/),
      (ird = [
        { re: /\bgh\s+pr\s+create\b/, action: "created", op: "pr_create" },
        { re: /\bgh\s+pr\s+edit\b/, action: "edited", op: "pr_edit" },
        { re: /\bgh\s+pr\s+merge\b/, action: "merged", op: "pr_merge" },
        { re: /\bgh\s+pr\s+comment\b/, action: "commented", op: "pr_comment" },
        { re: /\bgh\s+pr\s+close\b/, action: "closed", op: "pr_close" },
        { re: /\bgh\s+pr\s+ready\b/, action: "ready", op: "pr_ready" },
      ]),
      (fvo =
        /https?:\/\/[^/\s"]+\/([^\s"]+?)\/(?:pull|pull-requests|-\/merge_requests)\/(\d+)/));
    ((qIy = String.raw`[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)*`),
      (cvo = String.raw`[A-Za-z0-9][\w.-]*`),
      (zIy = new RegExp(
        `^https?://${qIy}(?::\\d{1,5})?/(?:${cvo}/${cvo}/(?:pull|pull-requests)|(?:${cvo}/)+${cvo}/-/merge_requests` +
          String.raw`)/\d+$`,
      )));
    ((QIy =
      /(?:^|[;&|]|\b(?:then|do)\b)\s*gh\s+(?!auth\b|help\b|version\b|alias\b|completion\b|config\b)/),
      (ZIy =
        /API rate limit (?:already )?exceeded|exceeded a secondary rate limit|\bRATE_LIMITED\b/i));
  });
