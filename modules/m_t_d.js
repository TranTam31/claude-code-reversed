// Module: t$d (lines 527488-527564)
  var t$d = S(() => {
    AK();
    ncn();
    ei();
    Qa();
    PLt();
    J8e();
    icn();
    yb();
    mmt();
    ((QNd = [
      "git checkout -b *",
      "git add *",
      "git status *",
      "git commit *",
      "gh pr create *",
      "gh pr edit *",
      "gh pr view *",
    ]),
      (vl_ = [
        "ToolSearch",
        "mcp__slack__send_message",
        "mcp__claude_ai_Slack__slack_send_message",
      ]),
      (YNd = ZNd([...QNd, "git push origin *", "git push -u origin *"])));
    ((wl_ = {
      type: "prompt",
      name: E0s,
      description: "Commit, push, and open a PR",
      allowedTools: YNd,
      getAllowedTools: Al_,
      get contentLength() {
        return XNd("main", !1).length;
      },
      progressMessage: "creating commit and PR",
      source: "builtin",
      async getPromptForCommand(e, t) {
        ocn("commit_push_pr");
        let [r, n] = await Promise.all([wB(), QMd(t.getAppState)]),
          o = Eue(r) ? r : "main",
          s = XNd(o, !1, n),
          a = e?.trim();
        if (a)
          s += `

## Additional instructions from user

${xee(a)}`;
        return [
          {
            type: "text",
            text: await VFe(
              s,
              {
                ...t,
                getAppState() {
                  let c = t.getAppState();
                  return {
                    ...c,
                    toolPermissionContext: {
                      ...c.toolPermissionContext,
                      alwaysAllowRules: {
                        ...c.toolPermissionContext.alwaysAllowRules,
                        command: YNd,
                      },
                    },
                  };
                },
              },
              `/${E0s}`,
            ),
          },
        ];
      },
    }),
      (e$d = wl_));
  });
