// Module: oMa (lines 809858-810433)
  var oMa = S(() => {
    ct();
    KD();
    Pxr();
    ei();
    Ni();
    Pr();
    hn();
    Lk();
    Eo();
    jp();
    iZ();
    w5r();
    ts();
    pPa();
    Qr();
    fPa();
    Ar();
    pt();
    wQo();
    vt();
    zt();
    Jpf();
    CQo();
    SPa();
    uje();
    lff();
    si();
    uff();
    hff();
    _ff();
    xff();
    Pff();
    VPa();
    Z0n();
    zPa();
    Zff();
    FQo();
    $pr();
    vFt();
    Ge();
    Zr();
    ((amf = require("path")), (Zc = x(ue(), 1)), (WQo = x(_e(), 1)));
    ((pje = { org: 30, launch: 20, campaign: 15, promo: 10, hint: 5 }),
      (Z6b = {
        id: "safe-mode",
        tier: "warning",
        type: "warning",
        isActive: () => Vl(),
        render: () =>
          Zc.jsxs(Zc.Fragment, {
            children: [
              Zc.jsxs(oT, {
                status: "warning",
                children: [
                  "Safe mode: all customizations are disabled (CLAUDE.md, skills, plugins, hooks, MCP, agents, and more)",
                  V0n() &&
                    Zc.jsxs(Zc.Fragment, {
                      children: [
                        " \xB7 ",
                        "managed hooks and settings policy from your organization still apply; managed plugins, skills, CLAUDE.md, and MCP servers do not",
                      ],
                    }),
                ],
              }),
              Zc.jsx(H, {
                paddingLeft: 2,
                children: Zc.jsx(h, {
                  dimColor: !0,
                  children: `${yB(v0())} to re-enable`,
                }),
              }),
            ],
          }),
      }),
      (eqb = {
        id: "large-memory-files",
        tier: "warning",
        type: "warning",
        isActive: (e) => vXr(e.memoryFiles).length > 0,
        render: (e) => {
          let t = vXr(e.memoryFiles),
            r = EXr();
          return Zc.jsx(Zc.Fragment, {
            children: t.map((n) => {
              let o = n.path.startsWith(kt())
                ? amf.relative(kt(), n.path)
                : n.path;
              return Zc.jsxs(
                oT,
                {
                  status: "warning",
                  children: [
                    Zc.jsx(h, { bold: !0, children: o }),
                    " is over the",
                    " ",
                    _d(r),
                    "-char limit (",
                    _d(n.content.length),
                    " chars)",
                    Zc.jsx(h, {
                      dimColor: !0,
                      children: " \xB7 /memory to free up context",
                    }),
                  ],
                },
                n.path,
              );
            }),
          });
        },
      }),
      (tqb = {
        id: "claude-ai-external-token",
        tier: "warning",
        type: "warning",
        isActive: () => {
          let e = P0();
          return (
            ii() &&
            (e.source === "ANTHROPIC_AUTH_TOKEN" || e.source === "apiKeyHelper")
          );
        },
        render: () => {
          let e = P0();
          return Zc.jsx(H, {
            marginTop: 1,
            children: Zc.jsxs(oT, {
              status: "warning",
              children: [
                e.source,
                " overriding Claude subscription login",
                Zc.jsx(h, {
                  dimColor: !0,
                  children: " \xB7 unset it or /logout to sign it out",
                }),
              ],
            }),
          });
        },
      }),
      (rqb = {
        id: "api-key-conflict",
        tier: "warning",
        type: "warning",
        isActive: () => {
          let { source: e } = xZ({ skipRetrievingKeyFromApiKeyHelper: !0 });
          return !!QIt() && (e === "ANTHROPIC_API_KEY" || e === "apiKeyHelper");
        },
        render: () => {
          let { source: e } = xZ({ skipRetrievingKeyFromApiKeyHelper: !0 });
          return Zc.jsx(H, {
            marginTop: 1,
            children: Zc.jsxs(oT, {
              status: "warning",
              children: [
                e,
                " overriding saved Console key",
                Zc.jsx(h, {
                  dimColor: !0,
                  children: " \xB7 unset it or /logout to clear the saved key",
                }),
              ],
            }),
          });
        },
      }),
      (nqb = {
        id: "both-auth-methods",
        tier: "warning",
        type: "warning",
        isActive: () => {
          let { source: e } = xZ({ skipRetrievingKeyFromApiKeyHelper: !0 }),
            t = P0();
          return (
            e !== "none" &&
            t.source !== "none" &&
            !(e === "apiKeyHelper" && t.source === "apiKeyHelper")
          );
        },
        render: () => {
          let { source: e } = xZ({ skipRetrievingKeyFromApiKeyHelper: !0 }),
            t = P0();
          return Zc.jsxs(H, {
            flexDirection: "column",
            marginTop: 1,
            children: [
              Zc.jsxs(oT, {
                status: "warning",
                children: [
                  "Both ",
                  t.source,
                  " and ",
                  e,
                  " set \xB7 auth may not work as expected",
                ],
              }),
              Zc.jsxs(H, {
                flexDirection: "column",
                paddingLeft: 2,
                children: [
                  Zc.jsxs(h, {
                    dimColor: !0,
                    children: [
                      "\xB7 to use",
                      " ",
                      t.source === "claude.ai" ? "claude.ai" : t.source,
                      ":",
                      " ",
                      e === "ANTHROPIC_API_KEY"
                        ? 'Unset the ANTHROPIC_API_KEY environment variable, or claude /logout then say "No" to the API key approval before login.'
                        : e === "apiKeyHelper"
                          ? "Unset the apiKeyHelper setting."
                          : "claude /logout",
                    ],
                  }),
                  Zc.jsxs(h, {
                    dimColor: !0,
                    children: ["\xB7 to use ", e, ":", " ", XIt(t.source)],
                  }),
                ],
              }),
            ],
          });
        },
      }),
      (oqb = {
        id: "large-agent-descriptions",
        tier: "warning",
        type: "warning",
        isActive: (e) => dPa(e.agentDefinitions) > uPa,
        render: (e) => {
          let t = dPa(e.agentDefinitions);
          return Zc.jsxs(oT, {
            status: "warning",
            children: [
              "Agent descriptions are over the",
              " ",
              _d(uPa),
              "-token limit (~",
              _d(t),
              " tokens)",
              Zc.jsxs(h, {
                dimColor: !0,
                children: [
                  " ",
                  "\xB7 ask Claude to trim agent descriptions in .claude/agents/",
                ],
              }),
            ],
          });
        },
      }),
      (iqb = {
        id: "model-source",
        tier: "info",
        type: "info",
        isActive: (e) =>
          e.modelRestrictedWarning === null && (DGr() !== "" || AQo()),
        render: () => Zc.jsx(sff, {}),
      }),
      (sqb = {
        id: "npm-deprecation",
        tier: "warning",
        type: "warning",
        isActive: (e) => e.npmInstallDeprecated,
        render: () =>
          Zc.jsxs(oT, {
            status: "warning",
            children: [
              "Installed via npm (deprecated)",
              Zc.jsxs(h, {
                dimColor: !0,
                children: [
                  " ",
                  "\xB7 run claude install to switch to the native version",
                ],
              }),
            ],
          }),
      }),
      (aqb = {
        id: "mcp-needs-auth",
        tier: "warning",
        type: "warning",
        isActive: (e) => e.mcpNeedsAuthCount > 0,
        render: (e) =>
          Zc.jsxs(oT, {
            status: "warning",
            children: [
              e.mcpNeedsAuthCount,
              " MCP",
              " ",
              Et(e.mcpNeedsAuthCount, "server needs", "servers need"),
              " ",
              "authentication",
              Zc.jsx(h, { dimColor: !0, children: " \xB7 run /mcp" }),
            ],
          }),
      }),
      (lqb = {
        id: "model-deprecation",
        tier: "warning",
        type: "warning",
        isActive: (e) => e.modelDeprecationWarning !== null,
        render: (e) =>
          e.modelDeprecationWarning === null
            ? null
            : Zc.jsxs(oT, {
                status: "warning",
                children: [
                  e.modelDeprecationWarning.message,
                  Zc.jsxs(h, {
                    dimColor: !0,
                    children: [" \xB7 ", e.modelDeprecationWarning.action],
                  }),
                ],
              }),
      }),
      (cqb = {
        id: "model-restricted",
        tier: "warning",
        type: "warning",
        isActive: (e) => e.modelRestrictedWarning !== null,
        render: (e) =>
          e.modelRestrictedWarning === null
            ? null
            : Zc.jsx(oT, {
                status: "warning",
                children: rW(
                  e.modelRestrictedWarning.requested,
                  e.modelRestrictedWarning.effective,
                ),
              }),
      }),
      (uqb = {
        id: "hipaa-compliance",
        tier: "warning",
        type: "info",
        isActive: () => cY("hipaa"),
        render: () =>
          Zc.jsxs(oT, {
            status: "info",
            children: [
              "HIPAA \xB7 some features are restricted",
              Zc.jsx(h, {
                dimColor: !0,
                children: " \xB7 /status for details",
              }),
            ],
          }),
      }),
      (dqb = {
        id: "monitoring-notice",
        tier: "warning",
        type: "info",
        isActive: () => oit() !== null,
        render: () => {
          let e = oit();
          if (!e) return null;
          return Zc.jsxs(oT, {
            status: "info",
            children: [
              e.text,
              e.url
                ? Zc.jsxs(h, {
                    dimColor: !0,
                    children: [
                      " \xB7 ",
                      Zc.jsx(Do, {
                        url: e.url,
                        fallback: e.url,
                        children: "learn more",
                      }),
                    ],
                  })
                : null,
            ],
          });
        },
      }),
      (pqb = {
        id: "debug-mode",
        tier: "info",
        type: "info",
        isActive: () => HK(),
        render: () =>
          Zc.jsxs(kPe, {
            children: [
              "Debug mode enabled \xB7 logging to",
              " ",
              FG() ? "stderr" : vOe(),
            ],
          }),
      }),
      (fqb = {
        id: "tmux-session",
        tier: "info",
        type: "info",
        isActive: () => !!Z.CLAUDE_CODE_TMUX_SESSION,
        render: () =>
          Zc.jsxs(kPe, {
            children: [
              "tmux session: ",
              Z.CLAUDE_CODE_TMUX_SESSION,
              " \xB7 detach with",
              " ",
              Z.CLAUDE_CODE_TMUX_PREFIX_CONFLICTS
                ? `${Z.CLAUDE_CODE_TMUX_PREFIX} ${Z.CLAUDE_CODE_TMUX_PREFIX} d (press prefix twice - Claude uses ${Z.CLAUDE_CODE_TMUX_PREFIX})`
                : `${Z.CLAUDE_CODE_TMUX_PREFIX} d`,
            ],
          }),
      }));
    hqb = {
      id: "oauth-expiry",
      tier: "warning",
      type: "warning",
      isActive: () => Lxr() !== null,
      render: () => Zc.jsx(cmf, {}),
    };
    gqb = {
      id: IWt,
      tier: "info",
      type: "info",
      claimsFirstShow: () => (xt().seenNotifications?.[IWt] ?? 0) === 0,
      isActive: (e) => mqb(e),
      render: (e) => Zc.jsx(umf, { ctx: e }),
    };
    yqb = {
      id: "powerup-discovery",
      tier: "info",
      type: "info",
      isActive: () => jEi() && mPa() === "banner",
      render: () => Zc.jsx(dmf, {}),
    };
    ((_qb = {
      id: "emergency-tip",
      tier: "warning",
      type: "warning",
      isActive: () => wPa(APa()),
      render: () => Zc.jsx(cff, {}),
    }),
      (bqb = {
        id: "channels",
        tier: "info",
        type: "info",
        isActive: () => IC().length > 0,
        render: () => Zc.jsx(bPa, {}),
      }),
      (Sqb = {
        id: "prompt-caching-disabled",
        tier: "warning",
        type: "warning",
        isActive: () => omf().length > 0,
        render: () => {
          let e = omf();
          return Zc.jsxs(oT, {
            status: "warning",
            children: [
              "Prompt caching off (",
              e.join(", "),
              "), requests will be slower and cost more",
              Zc.jsx(h, {
                dimColor: !0,
                children: " \xB7 unset it to re-enable",
              }),
            ],
          });
        },
      }),
      (Eqb = {
        id: Bxr,
        tier: "announcement",
        type: "info",
        promo: !1,
        priority: pje.org,
        claimsFirstShow: () => Uxr("auto"),
        isActive: () => Uxr("auto"),
        render: () => Zc.jsx(GPa, {}),
      }),
      (vqb = {
        id: "company-announcement",
        tier: "announcement",
        type: "info",
        promo: !1,
        priority: pje.org,
        isActive: () => fff(),
        render: () => Zc.jsx(HPa, {}),
      }),
      (Aqb = {
        id: "startup-announcement",
        tier: "announcement",
        type: "info",
        promo: !1,
        priority: pje.launch,
        isActive: () =>
          USt(!1) !== void 0 &&
          !(Ofe()?.isTopPriorityAnnouncement === !0 && MQo()),
        showAccentBar: () => USt(!1)?.accentBar !== !1,
        render: () => Zc.jsx(QPa, {}),
      }),
      (wqb = {
        id: "fotw-nudge",
        tier: "announcement",
        type: "info",
        promo: !1,
        priority: pje.campaign,
        isActive: () => MQo(),
        render: () => Zc.jsx($Pa, {}),
      }),
      (Tqb = {
        id: "guest-passes",
        tier: "announcement",
        type: "info",
        promo: !0,
        maxImpressions: 3,
        priority: pje.promo,
        isActive: () => yff() && !tft() && !Npr(),
        render: () => Zc.jsx(IPa, {}),
      }),
      (Cqb = {
        id: "fullscreen-downsell",
        tier: "announcement",
        type: "info",
        promo: !1,
        priority: pje.hint,
        claimsFirstShow: () => (xt().fullscreenDownsellSeenCount ?? 0) === 0,
        isActive: () => Z.CLAUDE_CODE_TUI_JUST_SWITCHED === void 0 && Dff(),
        render: () => Zc.jsx(BPa, {}),
      }),
      (xqb = {
        id: "subscription-switch",
        tier: "announcement",
        type: "info",
        promo: !0,
        maxImpressions: kMo,
        priority: pje.promo,
        isActive: (e) => e.existingClaudeSubscription !== null,
        render: (e) =>
          e.existingClaudeSubscription === null
            ? null
            : Zc.jsx(qPa, { subscriptionType: e.existingClaudeSubscription }),
      }),
      (Hqb = [
        Z6b,
        eqb,
        oqb,
        tqb,
        rqb,
        nqb,
        bqb,
        Sqb,
        _qb,
        iqb,
        lqb,
        cqb,
        sqb,
        aqb,
        uqb,
        dqb,
        pqb,
        fqb,
        hqb,
        Eqb,
        gqb,
        yqb,
        vqb,
        Aqb,
        wqb,
        Tqb,
        xqb,
        Cqb,
      ]));
    imf = ["debug-mode", "model-source", "channels", "tmux-session"];
    Y2e(Iqb);
  });
