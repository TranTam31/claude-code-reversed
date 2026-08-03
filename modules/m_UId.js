// Module: UId (lines 496449-496615)
  var UId = S(() => {
    Vn();
    pt();
    bRo();
    Ss();
    st();
    ((Zmr = require("fs/promises")),
      (p$s = require("path")),
      (vJy = Se(() =>
        v.strictObject({
          mode: v
            .enum(["check", "update", "create", "delete"])
            .default("check")
            .describe(
              "'check' (default): if ONBOARDING.md is present locally, uploads it to the most-recent guide (creates one if none exist); otherwise reports the existing link without uploading. 'update': upload to a specific guide by short_code. 'create': always make a new link. 'delete': remove a guide.",
            ),
          short_code: v
            .string()
            .regex(/^[A-Za-z0-9_-]{1,64}$/)
            .optional()
            .describe(
              "Short code of a specific guide to target (returned by a previous call). Honored by check, update, and delete \u2014 skips the org-wide lookup and targets this guide directly.",
            ),
        }),
      )),
      (AJy = Se(() =>
        v.object({
          status: v.enum([
            "created",
            "updated",
            "deleted",
            "has_existing",
            "unavailable",
          ]),
          share_url: v.string().optional(),
          short_code: v.string().optional(),
          message: v.string(),
        }),
      )),
      (wJy = Ui({
        name: Aln,
        searchHint: "upload ONBOARDING.md and get a team share link",
        maxResultSizeChars: 1000,
        async description() {
          return c$s;
        },
        isEnabled() {
          return Qmr();
        },
        isConcurrencySafe() {
          return !1;
        },
        isReadOnly() {
          return !1;
        },
        get inputSchema() {
          return vJy();
        },
        get outputSchema() {
          return AJy();
        },
        async validateInput() {
          return { result: !0 };
        },
        async prompt() {
          return c$s;
        },
        toAutoClassifierInput(e) {
          return `share onboarding guide (mode: ${e.mode ?? "check"})`;
        },
        isDestructive(e) {
          return e.mode === "delete";
        },
        renderToolUseMessage(e) {
          return e.mode && e.mode !== "check" ? e.mode : null;
        },
        async call({ mode: e = "check", short_code: t }) {
          if (e === "delete")
            try {
              let i = t ?? (await u$s())?.short_code;
              if (!i) return O$t("No guide found for this org to delete.");
              return (
                await $Id(i),
                { data: { status: "deleted", message: `Guide ${i} deleted.` } }
              );
            } catch (i) {
              let s = i instanceof Error ? i.message : String(i);
              return O$t(`Delete didn't go through (${s}).`);
            }
          if (e === "check")
            try {
              let i = t
                ? (await l$s()).find((s) => s.short_code === t)
                : await u$s();
              if (i) {
                let s = p$s.join(gn(), wln),
                  a = null;
                try {
                  a = (await Zmr.stat(s)).size;
                } catch (u) {
                  if (!Vt(u)) throw u;
                }
                if (a === null)
                  return {
                    data: {
                      status: "has_existing",
                      share_url: i.share_url,
                      short_code: i.short_code,
                      message: `A guide already exists for this org at ${i.share_url} (short_code: ${i.short_code}). If this link is what the user needed, share it. If they want to create or update a guide, tell them to run /team-onboarding themselves (it scans local session data and cannot be invoked by the model).`,
                    },
                  };
                if (a > SRo)
                  return O$t(
                    `${wln} is over ${SRo / 1024}KB. Trim it before sharing.`,
                  );
                let l = await Zmr.readFile(s, "utf8"),
                  c = await a$s(i.short_code, l);
                return d$s("updated", c.share_url, c.short_code, !1);
              }
            } catch (i) {
              let s = i instanceof Error ? i.message : String(i);
              return O$t(
                `Upload didn't go through (${s}). Fall back to the manual share copy.`,
              );
            }
          let r = p$s.join(gn(), wln),
            n;
          try {
            n = (await Zmr.stat(r)).size;
          } catch (i) {
            if (Vt(i))
              return O$t(
                `${wln} not found in the current directory. Write the guide first.`,
              );
            throw i;
          }
          if (n > SRo)
            return O$t(
              `${wln} is over ${SRo / 1024}KB. Trim it before sharing.`,
            );
          let o = await Zmr.readFile(r, "utf8");
          try {
            if (e === "update") {
              let s = t ?? (await u$s())?.short_code;
              if (s) {
                let a = await a$s(s, o);
                return d$s("updated", a.share_url, a.short_code, !0);
              }
            }
            let i = await NId(o);
            return d$s("created", i.share_url, i.short_code, !1);
          } catch (i) {
            let s = i instanceof Error ? i.message : String(i);
            return O$t(
              `Upload didn't go through (${s}). Fall back to the manual share copy.`,
            );
          }
        },
        mapToolResultToToolResultBlockParam(e, t) {
          return {
            tool_use_id: t,
            type: "tool_result",
            content: `[${e.status}] ${e.message}`,
          };
        },
      })));
  });
