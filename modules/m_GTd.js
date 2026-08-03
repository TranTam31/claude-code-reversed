// Module: GTd (lines 475858-476114)
  var GTd = S(() => {
    Vn();
    pt();
    P4();
    Fan();
    vt();
    Ss();
    KD();
    ei();
    Ge();
    st();
    BO();
    Qa();
    z0();
    eW();
    Ga();
    I$();
    ((Uan = require("path")),
      (s9y =
        /[\p{Cc}\p{Cf}\p{Cn}\p{Co}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800]|(?!\u0020)\p{Zs}/gu));
    ((a9y =
      /["\u201C\u201D\u201F\u2033\u2036\uFF02\u301D\u301E\u301F\u02BA\u02EE\u02DD\u05F4]/g),
      (l9y = Se(() =>
        v
          .strictObject({
            name: v
              .string()
              .superRefine((e, t) => {
                try {
                  qor(e);
                } catch (r) {
                  t.addIssue({ code: "custom", message: le(r) });
                }
              })
              .optional()
              .describe(
                'Optional name for a new worktree. Each "/"-separated segment may contain only letters, digits, dots, underscores, and dashes; max 64 chars total. A random name is generated if not provided. Mutually exclusive with `path`.',
              ),
            path: v
              .string()
              .optional()
              .describe(
                "Path to an existing worktree to switch into instead of creating a new one. Must appear in `git worktree list` for the current repo \u2014 or, on first entry from the launch directory, for a repo nested inside it (multi-repo workspace). Mutually exclusive with `name`.",
              ),
          })
          .refine((e) => !(e.name && e.path), {
            message: "Provide at most one of `name` or `path`, not both.",
          }),
      )),
      (c9y = Se(() =>
        v.object({
          worktreePath: v.string(),
          worktreeBranch: v.string().optional(),
          message: v.string(),
        }),
      )),
      (WTd = Ui({
        name: Ipe,
        searchHint: "create an isolated git worktree and switch into it",
        maxResultSizeChars: 1e5,
        async description() {
          return "Creates an isolated worktree (via git or configured hooks) and switches the session into it";
        },
        async prompt() {
          return BTd();
        },
        get inputSchema() {
          return l9y();
        },
        get outputSchema() {
          return c9y();
        },
        userFacingName(e) {
          return e?.path ? "Entering worktree" : "Creating worktree";
        },
        shouldDefer: !0,
        toAutoClassifierInput(e) {
          return e.path ?? e.name ?? "";
        },
        async validateInput(e) {
          if (Brt()) {
            if (e.path) return { result: !0 };
            let t = kt(),
              r = gu(t);
            return {
              result: !1,
              message:
                `EnterWorktree cannot create a worktree from a subagent with a cwd override (isolation: "worktree" or explicit cwd) \u2014 it would mutate the parent session's process-wide working directory. ` +
                (r != null && t !== r && t.startsWith(r + Uan.sep)
                  ? "To switch this agent into an existing worktree managed by Claude Code (under .claude/worktrees/ of this repository), call EnterWorktree with `path`. To work in any other directory, spawn an Agent with `cwd` set to it."
                  : "To work in a different directory (including a worktree), spawn an Agent with `cwd` set to it."),
              errorCode: 1,
            };
          }
          if (s_() && !e.path)
            return {
              result: !1,
              message:
                "Already in a worktree session. Pass `path` to switch into another existing worktree, or use ExitWorktree to leave this one before creating a new worktree.",
              errorCode: 2,
            };
          return { result: !0 };
        },
        async checkPermissions(e) {
          if (!e.path) return { behavior: "allow", updatedInput: e };
          let t = await Ccs(e.path);
          if (t?.managed)
            return {
              behavior: "allow",
              updatedInput: { ...e, path: t.targetReal },
            };
          let r = Uan.resolve(kt(), e.path),
            n = (l) => jTd(l).replace(a9y, "\uFFFD"),
            o = n(r),
            i = t ? n(t.targetReal) : null,
            s =
              o !== r || (t && i !== t.targetReal)
                ? " (path sanitized for display)"
                : "",
            a =
              i !== null && i.normalize("NFC") !== o.normalize("NFC")
                ? ` (resolves to "${i}")`
                : "";
          return {
            behavior: "ask",
            message: `Enter the worktree at "${o}"${a}${s}? This moves the session's working directory and write access there, and loads project configuration (CLAUDE.md, settings) from that location.`,
            updatedInput: { ...e, path: r },
            decisionReason: {
              type: "safetyCheck",
              reason: `permission-root relocation to "${o}"${a}${s} \u2014 a model-supplied worktree outside .claude/worktrees/`,
              classifierApprovable: !1,
            },
            localDisplayOnly: !0,
          };
        },
        renderToolUseMessage({ name: e, path: t }) {
          return (t !== void 0 ? jTd(t) : null) ?? e ?? "";
        },
        async call(e, t) {
          if (Brt()) {
            if (!e.path)
              throw new m_(
                "EnterWorktree from a session with a pinned working directory requires `path`.",
              );
            let s = await Qdo(e.path, {
              requireManagedLocation: !0,
              requireCwdInsideRepo: !0,
            });
            if (
              (wv(s.worktreePath),
              PTs(s.worktreePath, t.agentId ?? Ht()),
              t.agentId)
            )
              try {
                await bur(t.agentId, { cwd: s.worktreePath });
              } catch (l) {
                w(
                  `Failed to update agent metadata cwd after worktree switch: ${le(l)}`,
                );
              }
            O("tengu_worktree_entered_existing", {
              mid_session: !0,
              cwd_override: !0,
            });
            let a = s.worktreeBranch ? ` on branch ${s.worktreeBranch}` : "";
            return {
              data: {
                worktreePath: s.worktreePath,
                worktreeBranch: s.worktreeBranch,
                message: `Entered worktree at ${s.worktreePath}${a}. This agent's working directory and write access now point at the worktree; the previous directory was left untouched.`,
              },
              contextLayers: [
                { kind: "working_directory", directory: s.worktreePath },
              ],
            };
          }
          if (s_() && !e.path) throw Error("Already in a worktree session");
          let r;
          if (e.path)
            r = await Tcs(
              Ht(),
              e.path,
              (await xcs(Uan.resolve(kt(), e.path)))
                ? { requireManagedLocation: !0 }
                : void 0,
            );
          else {
            let s = kt(),
              a = gu(s),
              l = !1;
            if (a && a !== s) (process.chdir(a), wv(a), (l = !0));
            try {
              r = await k7r(Ht(), e.name ?? IIe(), void 0, {
                fromCwd: s,
                repoRoot: a ?? void 0,
              });
            } catch (c) {
              if (l)
                try {
                  (process.chdir(s), wv(s));
                } catch {
                  (Kye(), jw()?.refreshGitBranch?.());
                }
              throw c;
            }
          }
          if (
            (process.chdir(r.worktreePath),
            wv(r.worktreePath),
            DN(kt()),
            !r.hookBased && !r.nestedRepoRoot)
          )
            try {
              await h$t();
            } catch (s) {
              Ban(s, "EnterWorktree");
            }
          (PTs(r.worktreePath, Ht()),
            cae(r),
            zft(),
            D$(),
            y_.cache.clear?.(),
            bL(),
            Kye(),
            jw()?.refreshGitBranch?.(),
            O(
              e.path
                ? "tengu_worktree_entered_existing"
                : "tengu_worktree_created",
              { mid_session: !0 },
            ));
          let n = r.worktreeBranch ? ` on branch ${r.worktreeBranch}` : "",
            o = e.path
              ? "Entered"
              : r.resetToFreshBase
                ? "Reused"
                : r.resumedExisting
                  ? "Resumed"
                  : "Created",
            i = r.resetToFreshBase
              ? " A worktree with this name already existed; its previous work was fully merged upstream, so it was reset to the current base."
              : r.resumedExisting
                ? " A worktree with this name already existed and was resumed as-is \u2014 it may carry an earlier session\u2019s commits. Pass a different name if you wanted a fresh worktree."
                : "";
          return {
            data: {
              worktreePath: r.worktreePath,
              worktreeBranch: r.worktreeBranch,
              message: `${o} worktree at ${r.worktreePath}${n}.${i} The session is now working in the worktree. Use ExitWorktree to leave mid-session, or exit the session to be prompted.`,
            },
          };
        },
        mapToolResultToToolResultBlockParam({ message: e }, t) {
          return { type: "tool_result", content: e, tool_use_id: t };
        },
      })));
  });
