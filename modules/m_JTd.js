// Module: JTd (lines 476214-476421)
  var JTd = S(() => {
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
    Ja();
    BO();
    Qa();
    U8();
    z0();
    eW();
    Ga();
    XC();
    I$();
    ((KTd = require("fs/promises")),
      (YTd = require("os")),
      (u9y = Se(() =>
        v.strictObject({
          action: v
            .enum(["keep", "remove"])
            .describe(
              '"keep" leaves the worktree and branch on disk; "remove" deletes both.',
            ),
          discard_changes: v
            .boolean()
            .optional()
            .describe(
              'Required true when action is "remove" and the worktree has uncommitted files or unmerged commits. The tool will refuse and list them otherwise.',
            ),
        }),
      )),
      (d9y = Se(() =>
        v.object({
          action: v.enum(["keep", "remove"]),
          originalCwd: v.string(),
          worktreePath: v.string(),
          worktreeBranch: v.string().optional(),
          tmuxSessionName: v.string().optional(),
          discardedFiles: v.number().optional(),
          discardedCommits: v.number().optional(),
          message: v.string(),
        }),
      )));
    XTd = Ui({
      name: Air,
      searchHint:
        "exit a worktree session and return to the original directory",
      maxResultSizeChars: 1e5,
      async description() {
        return "Exits a worktree session created by EnterWorktree and restores the original working directory";
      },
      async prompt() {
        return VTd();
      },
      get inputSchema() {
        return u9y();
      },
      get outputSchema() {
        return d9y();
      },
      userFacingName(e) {
        return e?.action === "remove"
          ? "Cleaning up worktree"
          : "Exiting worktree";
      },
      shouldDefer: !0,
      isDestructive(e) {
        return e.action === "remove";
      },
      toAutoClassifierInput(e) {
        return e.action;
      },
      async validateInput(e) {
        if (Brt())
          return {
            result: !1,
            message:
              'ExitWorktree cannot be called from a subagent with a cwd override (isolation: "worktree" or explicit cwd) \u2014 it would mutate the parent session\'s process-wide working directory. This agent is already isolated; use Bash with `cd` for directory changes within it.',
            errorCode: 5,
          };
        let t = s_();
        if (!t)
          return {
            result: !1,
            message:
              "No-op: there is no active EnterWorktree session to exit. This tool only operates on worktrees created by EnterWorktree in the current session \u2014 it will not touch worktrees created manually or in a previous session. No filesystem changes were made.",
            errorCode: 1,
          };
        if (e.action === "remove" && t.enteredExisting)
          return {
            result: !1,
            message: `This session is not the owner of the worktree at ${t.worktreePath} \u2014 it either entered a pre-existing worktree via EnterWorktree({path}) or resumed into a checkout whose liveness lock another running Claude Code session still holds \u2014 so this tool will not remove it. Use action: "keep" to return to ${t.originalCwd}. If no other session is using it, remove it yourself with \`git worktree remove\`; while a live session's lock is present, git will refuse and name the owner.`,
            errorCode: 4,
          };
        if (e.action === "remove" && !e.discard_changes) {
          let r = await qTd(t.worktreePath, t.originalHeadCommit);
          if (r === null)
            return {
              result: !1,
              message: `Could not verify worktree state at ${t.worktreePath}. Refusing to remove without explicit confirmation. Re-invoke with discard_changes: true to proceed \u2014 or use action: "keep" to preserve the worktree.`,
              errorCode: 3,
            };
          let { changedFiles: n, commits: o } = r;
          if (n > 0 || o > 0) {
            let i = [];
            if (n > 0) i.push(`${n} uncommitted ${n === 1 ? "file" : "files"}`);
            if (o > 0)
              i.push(
                `${o} ${o === 1 ? "commit" : "commits"} on ${t.worktreeBranch ?? "the worktree branch"}`,
              );
            return {
              result: !1,
              message: `Worktree has ${i.join(" and ")}. Removing will discard this work permanently. Confirm with the user, then re-invoke with discard_changes: true \u2014 or use action: "keep" to preserve the worktree.`,
              errorCode: 2,
            };
          }
        }
        return { result: !0 };
      },
      renderToolUseMessage() {
        return "";
      },
      async call(e) {
        let t = s_();
        if (!t) throw Error("Not in a worktree session");
        let {
            originalCwd: r,
            preEnterOriginalCwd: n,
            worktreePath: o,
            worktreeBranch: i,
            tmuxSessionName: s,
            originalHeadCommit: a,
          } = t,
          l = Rl() === gn(),
          { changedFiles: c, commits: u } = (await qTd(o, a)) ?? {
            changedFiles: 0,
            commits: 0,
          };
        if (e.action === "keep") {
          await Y$e();
          let g = await zTd(r, n, l, o);
          O("tengu_worktree_kept", {
            mid_session: !0,
            commits: u,
            changed_files: c,
          });
          let y = s
            ? ` Tmux session ${s} is still running; reattach with: tmux attach -t ${s}`
            : "";
          return {
            data: {
              action: "keep",
              originalCwd: r,
              worktreePath: o,
              worktreeBranch: i,
              tmuxSessionName: s,
              message: `Exited worktree. Your work is preserved at ${o}${i ? ` on branch ${i}` : ""}. ${o1s(r, g)}${y}`,
            },
          };
        }
        if (s) await K$e(s);
        let d = await qlt(),
          p = await zTd(r, n, l, o);
        if (!d)
          return {
            data: {
              action: "remove",
              originalCwd: r,
              worktreePath: o,
              worktreeBranch: i,
              discardedFiles: 0,
              discardedCommits: 0,
              message: `Exited worktree but could not remove it \u2014 kept at ${o}. ${o1s(r, p)}`,
            },
          };
        O("tengu_worktree_removed", {
          source: Ee("exit_tool"),
          mid_session: !0,
          commits: u,
          changed_files: c,
        });
        let f = [];
        if (u > 0) f.push(`${u} ${u === 1 ? "commit" : "commits"}`);
        if (c > 0) f.push(`${c} uncommitted ${c === 1 ? "file" : "files"}`);
        let m = f.length > 0 ? ` Discarded ${f.join(" and ")}.` : "";
        return {
          data: {
            action: "remove",
            originalCwd: r,
            worktreePath: o,
            worktreeBranch: i,
            discardedFiles: c,
            discardedCommits: u,
            message: `Exited and removed worktree at ${o}.${m} ${o1s(r, p)}`,
          },
        };
      },
      mapToolResultToToolResultBlockParam({ message: e }, t) {
        return { type: "tool_result", content: e, tool_use_id: t };
      },
    });
  });
