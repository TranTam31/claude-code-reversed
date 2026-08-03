// Module: Axd (lines 482383-483142)
  var Axd = S(() => {
    Vn();
    Wu();
    Dy();
    Ss();
    pt();
    Eo();
    jl();
    ja();
    st();
    im();
    ts();
    eNe();
    Zt();
    Pr();
    Zko();
    XLt();
    Y1s();
    jZr();
    J1s();
    dxd();
    ((oYy = Se(() =>
      v.strictObject({
        operation: v
          .string()
          .regex(/^[\w.-]{1,64}$/)
          .describe(
            `Claude Design action to perform. Call with "${Yfe}" first to discover the available operations and their argument schemas.`,
          ),
        arguments: v
          .record(v.string(), v.unknown())
          .default({})
          .describe(
            "Action input object (server-validated). Pass {} for operations that take no input.",
          ),
      }),
    )),
      (iYy = Se(() =>
        v.object({
          operation: v.string(),
          content: v.array(v.record(v.string(), v.unknown())),
          isError: v.boolean().optional(),
        }),
      )));
    ((fxd = {
      invited: "private: invited members only",
      org: "visible to your whole organization",
      public: "PUBLIC",
    }),
      (mxd =
        /[\u0000-\u001F\u007F-\u009F\u00AD\u061C\u180E\u200B\u200E\u200F\u202A-\u202E\u2060-\u2064\u2066-\u2069\u2026\u2800\u3164\uFE00-\uFE0E\uFEFF\uFFF9-\uFFFB\uFFA0]/));
    ((hxd = /\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF]|\uD834[\uDD73-\uDD7A]/),
      (gxd =
        /["\u201C\u201D\u201E\u201F\uFF02\u2033\u2036\u02BA\u02DD\u02EE\u05F4\u3003\u301D-\u301F\u275D\u275E\u2014\u2015]/));
    ((cYy = Ui({
      name: IKe,
      searchHint: "work with Claude Design (claude.ai/design) projects",
      maxResultSizeChars: 1e5,
      get inputSchema() {
        return oYy();
      },
      get outputSchema() {
        return iYy();
      },
      isEnabled: eIo,
      isConcurrencySafe(e) {
        if (e.operation === Yfe) return !0;
        return (Mmr(e.operation) ?? iIo(e.operation))?.readOnly === !0;
      },
      isReadOnly(e) {
        if (e.operation === Yfe) return !0;
        return (Mmr(e.operation) ?? iIo(e.operation))?.readOnly === !0;
      },
      async description() {
        return X1s;
      },
      async prompt() {
        return X1s;
      },
      userFacingName(e) {
        let t = Sxd(e?.operation);
        return t ? `Claude Design: ${t}` : "Claude Design";
      },
      toAutoClassifierInput(e) {
        return { operation: e.operation, arguments: e.arguments ?? {} };
      },
      async validateInput(e) {
        let t = lxd(e.operation, e.arguments);
        if (t) return { result: !1, message: t, errorCode: 1 };
        if (e.operation === "finalize_plan") {
          let r = e.arguments?.project_id;
          if (typeof r !== "string" || r.length === 0)
            return {
              result: !1,
              message:
                "ClaudeDesign finalize_plan: project_id is required (a plan is always scoped to one project).",
              errorCode: 1,
            };
          if (!/^[A-Za-z0-9._-]+$/.test(r))
            return {
              result: !1,
              message:
                "ClaudeDesign finalize_plan: project_id contains characters outside the server id charset (letters, digits, dot, underscore, dash).",
              errorCode: 1,
            };
          if (r.length > Ulr - 2)
            return {
              result: !1,
              message:
                "ClaudeDesign finalize_plan: project_id is longer than any server-issued project id.",
              errorCode: 1,
            };
        }
        return { result: !0 };
      },
      async checkPermissions(e, t) {
        let r = e.operation === Yfe ? null : await tln(),
          n = {
            ...e,
            __consentBitShown: r,
            __consentAskCanReachUser: Q1s(t),
            __projectGrantAskShown: void 0,
            __projectGrantServerObserved: void 0,
            __reservedTargetsAskShown: void 0,
            __finalizePlanAskShown: void 0,
          },
          o = r !== null ? HKe(r) : null;
        if (e.operation === "finalize_plan" && e.arguments?.scope === "project")
          return {
            behavior: "deny",
            message:
              'ClaudeDesign finalize_plan: scope "project" is no longer supported by this client. Write files directly without plan_token \u2014 the first write to a project asks for a one-time durable approval \u2014 or use finalize_plan with writes/deletes for path-scoped plans and deletes.',
            decisionReason: {
              type: "safetyCheck",
              reason:
                'finalize_plan scope:"project" is superseded by the durable per-project write grant',
              classifierApprovable: !1,
            },
          };
        let i =
            e.operation === Yfe
              ? { readOnly: !0, destructive: !1 }
              : (Mmr(e.operation) ?? iIo(e.operation)),
          s = i?.readOnly !== !0,
          a = s && i?.destructive !== !1;
        if (
          e.operation === "copy_files" &&
          !(
            typeof e.arguments?.plan_token === "string" &&
            e.arguments.plan_token.length > 0
          )
        )
          return {
            behavior: "deny",
            message:
              "ClaudeDesign copy_files: copying without a plan_token always requires per-batch approval \u2014 use finalize_plan declaring every destination in writes, then pass the returned plan_token.",
            decisionReason: {
              type: "safetyCheck",
              reason:
                "tokenless copy_files is per-batch-only \u2014 its destinations have no reserved-path or render-integrity gate",
              classifierApprovable: !1,
            },
          };
        if (o) {
          if (
            (e.operation === "write_files" ||
              e.operation === "create_support_js") &&
            !(
              typeof e.arguments?.plan_token === "string" &&
              e.arguments.plan_token.length > 0
            )
          ) {
            let u = BZr(e.operation, e.arguments);
            if (u.outcome !== "pass" || !kSs(u.targets)) {
              let d = u.targets !== void 0 && u.targets.length === 0,
                p = u.outcome === "pass";
              return {
                behavior: "deny",
                message: d
                  ? `ClaudeDesign ${e.operation}: this call names no target paths \u2014 list the files to write, or use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`
                  : p
                    ? `ClaudeDesign ${e.operation}: this batch is too large to display fully for approval \u2014 split it into smaller batches, or use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`
                    : `ClaudeDesign ${e.operation}: this batch includes paths that always require per-batch approval \u2014 use finalize_plan with writes/deletes and pass the returned plan_token.`,
                decisionReason: {
                  type: "safetyCheck",
                  reason: d
                    ? "a write batch naming no target paths \u2014 malformed call"
                    : p
                      ? "the batch cannot be rendered fully in the approval dialog \u2014 split it or use per-batch plans"
                      : "reserved or unenumerable target paths always require per-batch approval",
                  classifierApprovable: !1,
                },
              };
            }
          }
          let l = s ? `Design ${e.operation} writes to claude.ai/design.` : "",
            c = e.operation === "finalize_plan" ? pxd : "";
          return {
            behavior: "ask",
            message: [o, l, c].filter(Boolean).join(" "),
            updatedInput:
              e.operation === "finalize_plan"
                ? { ...n, __finalizePlanAskShown: !0 }
                : n,
            localDisplayOnly: !0,
            decisionReason: {
              type: "safetyCheck",
              reason:
                "design agent consent \u2014 approving records a server-side grant for Claude agents to read and write your design projects",
              classifierApprovable: !1,
            },
          };
        }
        if (!s) return { behavior: "allow", updatedInput: n };
        if (
          En(t).mode !== "plan" &&
          sIo(t) &&
          Bqu(e.operation, e.arguments).outcome === "allow"
        )
          return { behavior: "allow", updatedInput: n };
        if (
          (e.operation === "write_files" ||
            e.operation === "create_support_js") &&
          !(
            typeof e.arguments?.plan_token === "string" &&
            e.arguments.plan_token.length > 0
          )
        ) {
          if (t.options?.isNonInteractiveSession === !0)
            return {
              behavior: "deny",
              message: `ClaudeDesign ${e.operation}: writing without a plan_token requires a one-time interactive project approval, which is not available in non-interactive sessions \u2014 use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`,
              decisionReason: {
                type: "safetyCheck",
                reason:
                  "a durable project write grant requires an interactive approval with a server-verified project identity",
                classifierApprovable: !1,
              },
            };
          if (!sIo(t))
            return {
              behavior: "deny",
              message: `ClaudeDesign ${e.operation}: writing without a plan_token requires a one-time project approval, which is not available in subagent or PermissionRequest-hook sessions \u2014 use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`,
              decisionReason: {
                type: "safetyCheck",
                reason:
                  "a durable project write grant requires a context where the approval card reaches the user directly",
                classifierApprovable: !1,
              },
            };
          let l = e.arguments?.project_id;
          if (typeof l === "string" && l.length > 0) {
            if (Nqu(l))
              return {
                behavior: "deny",
                message: `ClaudeDesign ${e.operation}: this project cannot hold a durable write grant for this account (it may be shared from another organization) \u2014 use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`,
                decisionReason: {
                  type: "safetyCheck",
                  reason:
                    "the server refused to mint a durable grant for this project \u2014 per-batch plans only",
                  classifierApprovable: !1,
                },
              };
            let c = BZr(e.operation, e.arguments),
              u = En(t).mode === "plan";
            if (c.outcome === "pass" && u) {
              if (!(
                P_o(l) ||
                (!Jze(l) && (await Qko(l)) === "granted" && !Jze(l))
              ))
                return {
                  behavior: "deny",
                  message: `ClaudeDesign ${e.operation}: writing without a plan_token requires a one-time project approval, which is not shown in plan mode \u2014 use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`,
                  decisionReason: {
                    type: "safetyCheck",
                    reason:
                      "a durable project write grant cannot be minted from plan mode \u2014 per-batch plans only",
                    classifierApprovable: !1,
                  },
                };
              adt(l);
            } else if (c.outcome === "pass") {
              if (P_o(l)) return { behavior: "allow", updatedInput: n };
              let d = await Qko(l);
              if (d === "granted" && !Jze(l)) {
                if ((adt(l), En(t).mode !== "plan"))
                  return { behavior: "allow", updatedInput: n };
              } else if (d === "unavailable")
                return {
                  behavior: "deny",
                  message: `ClaudeDesign ${e.operation}: could not check for a project write grant (this server may not support durable grants) \u2014 use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`,
                  decisionReason: {
                    type: "safetyCheck",
                    reason:
                      "the grant state could not be verified \u2014 fail toward the per-batch plan flow",
                    classifierApprovable: !1,
                  },
                };
              else {
                let p = () =>
                    En(t).mode !== "plan"
                      ? null
                      : {
                          behavior: "deny",
                          message: `ClaudeDesign ${e.operation}: writing without a plan_token requires a one-time project approval, which is not shown in plan mode \u2014 use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`,
                          decisionReason: {
                            type: "safetyCheck",
                            reason:
                              "a durable project write grant cannot be minted from plan mode \u2014 per-batch plans only",
                            classifierApprovable: !1,
                          },
                        },
                  f = p();
                if (f) return f;
                if (!Q1s(t))
                  return {
                    behavior: "deny",
                    message: `ClaudeDesign ${e.operation}: writing without a plan_token to a project without a write grant requires a one-time interactive approval, which cannot be shown in this permission mode \u2014 use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`,
                    decisionReason: {
                      type: "safetyCheck",
                      reason:
                        "a durable project write grant requires an interactive approval with a server-verified project identity",
                      classifierApprovable: !1,
                    },
                  };
                let m = await lYy(l, t.abortController.signal);
                if (m === null)
                  return {
                    behavior: "deny",
                    message: `ClaudeDesign ${e.operation}: a durable project write grant is only offered when the approval dialog can name its target, and the project identity (name, sharing, URL) could not be verified or rendered faithfully. If this is a fresh connection, read the project first (e.g. get_project \u2014 approve the Claude Design connection if prompted) and retry once; otherwise use finalize_plan with writes/deletes and pass the returned plan_token (the per-batch flow), which is always supported.`,
                    decisionReason: {
                      type: "safetyCheck",
                      reason:
                        "a durable project write grant requires a server-verified project identity in the approval card",
                      classifierApprovable: !1,
                    },
                  };
                let g = p();
                if (g) return g;
                return {
                  behavior: "ask",
                  message: `Approving writes the listed files now, and lets Claude write to ANY file in the project "${m.name}" (${m.sharingLabel}) \u2014 ${m.url} \u2014 without asking again. This approval is remembered for this project until you revoke it in settings at claude.ai/design (future writes and file contents are not shown for approval). Deletes and CLAUDE.md/.claude paths still ask every time.`,
                  updatedInput: { ...n, __projectGrantAskShown: l },
                  localDisplayOnly: !0,
                  serverApprovalWatch: {
                    kind: "design_project_grant",
                    projectId: l,
                  },
                  decisionReason: {
                    type: "safetyCheck",
                    reason:
                      "first write under a project grant \u2014 approval mints a durable write grant for this project, revocable at claude.ai/design settings",
                    classifierApprovable: !1,
                  },
                };
              }
            } else {
              if (!(
                kSs(c.targets) &&
                (P_o(l) || (!Jze(l) && (await Qko(l)) === "granted" && !Jze(l)))
              )) {
                let f = c.targets !== void 0 && c.targets.length === 0;
                return {
                  behavior: "deny",
                  message: f
                    ? `ClaudeDesign ${e.operation}: this call names no target paths \u2014 list the files to write, or use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`
                    : `ClaudeDesign ${e.operation}: this batch includes paths that always require per-batch approval \u2014 use finalize_plan with writes/deletes and pass the returned plan_token.`,
                  decisionReason: {
                    type: "safetyCheck",
                    reason: f
                      ? "a write batch naming no target paths \u2014 malformed call"
                      : "reserved or unenumerable target paths always require per-batch approval",
                    classifierApprovable: !1,
                  },
                };
              }
              return (
                adt(l),
                {
                  behavior: "ask",
                  message: `Design ${e.operation} writes to claude.ai/design.`,
                  updatedInput: { ...n, __reservedTargetsAskShown: !0 },
                  localDisplayOnly: !0,
                  decisionReason: {
                    type: "safetyCheck",
                    reason: a
                      ? "destructive \u2014 model-generated arguments"
                      : "remote write \u2014 model-generated arguments",
                    classifierApprovable: !1,
                  },
                }
              );
            }
          }
        }
        if (e.operation === "finalize_plan")
          return {
            behavior: "ask",
            message: `Design finalize_plan writes to claude.ai/design. ${pxd}`,
            updatedInput: { ...n, __finalizePlanAskShown: !0 },
            localDisplayOnly: !0,
            decisionReason: {
              type: "safetyCheck",
              reason:
                "finalize_plan \u2014 the human is the path-review boundary; approval also grants prompt-free writes to these paths for 15 min",
              classifierApprovable: !1,
            },
          };
        if (a)
          return {
            behavior: "ask",
            message: `Design ${e.operation} writes to claude.ai/design.`,
            updatedInput: n,
            decisionReason: {
              type: "safetyCheck",
              reason: i
                ? "destructive \u2014 model-generated arguments"
                : "unknown operation \u2014 fail-closed to destructive write",
              classifierApprovable: !1,
            },
          };
        return {
          behavior: "ask",
          message: `Design ${e.operation} writes to claude.ai/design.`,
          updatedInput: n,
          decisionReason: {
            type: "safetyCheck",
            reason: "remote write \u2014 model-generated arguments",
            classifierApprovable: !1,
          },
        };
      },
      async call(e, t) {
        let r = e.__consentAskCanReachUser ?? !1,
          n = r && Q1s(t);
        if (e.operation === "finalize_plan" && r) {
          let m = (e.arguments ?? {}).project_id;
          if (typeof m === "string" && m.length > 0) sdt(m);
        }
        if (idt.has(e.operation)) {
          let m = (e.arguments ?? {}).project_id;
          if (typeof m === "string" && m.length > 0)
            (sdt(m), $lr(m), JLt(m), Blr(m));
        }
        let o = await v$t();
        if (!o.ok)
          throw new Dr(
            TYy(o, {
              isNonInteractiveSession: t.options?.isNonInteractiveSession,
            }),
            "design_tool_auth_failed",
          );
        let i = o.accessToken,
          s = e.__consentBitShown ?? null,
          a = e.__projectGrantAskShown ?? null,
          l = e.__projectGrantServerObserved === !0,
          c = (() => {
            if (
              e.operation !== "write_files" &&
              e.operation !== "create_support_js"
            )
              return null;
            let m = e.arguments ?? {};
            if (typeof m.plan_token === "string" && m.plan_token.length > 0)
              return null;
            let g = m.project_id;
            return typeof g === "string" && g.length > 0 ? g : null;
          })();
        if (
          e.operation === "copy_files" &&
          !(
            typeof e.arguments?.plan_token === "string" &&
            e.arguments.plan_token.length > 0
          )
        )
          throw new Dr(
            "copy_files without a plan_token always requires per-batch approval \u2014 use finalize_plan declaring every destination in writes, then pass the returned plan_token.",
            "design_tool_exec_backstop_tokenless_copy",
          );
        if (c !== null) {
          let m = BZr(e.operation, e.arguments),
            g = e.__reservedTargetsAskShown === !0;
          if (m.outcome !== "pass" && !g)
            throw new Dr(
              `${e.operation} without a plan_token: this batch includes paths that always require per-batch approval \u2014 use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`,
              "design_tool_exec_backstop_safety_trip",
            );
        }
        let u = t.abortController.signal,
          d = t.agentContext?.agentId ?? null,
          p;
        try {
          if (
            ((p = await f({})),
            e.operation === "finalize_plan" &&
              e.__finalizePlanAskShown === !0 &&
              n &&
              sIo(t))
          ) {
            let m = e.arguments ?? {},
              g = p.isError !== !0 ? jqu(p.content) : null,
              y = (_) =>
                Array.isArray(_) ? _.filter((E) => typeof E === "string") : [];
            if (
              g !== null &&
              typeof m.project_id === "string" &&
              m.scope !== "project"
            )
              $qu(g.token, {
                projectId: m.project_id,
                writes: y(m.writes),
                deletes: y(m.deletes),
                serverExpiresAtMs: g.expiresAtMs ?? void 0,
              });
          }
        } catch (m) {
          if (u.aborted && !(m instanceof tl)) throw new tl();
          if (m instanceof rNs)
            throw new Dr(
              wYy({
                isNonInteractiveSession: t.options?.isNonInteractiveSession,
                wasRetried: m.wasRetried,
              }),
              "design_tool_auth_401",
            );
          throw m;
        }
        return { data: p };
        async function f(m) {
          try {
            let g = await Exd(e.operation, e.arguments, i, u, d);
            if (s !== null && !u.aborted && g.isError !== !0) pve(s, !0);
            if (
              c !== null &&
              !u.aborted &&
              g.isError !== !0 &&
              ((a === c && !l) || !Jze(c))
            )
              adt(c);
            return g;
          } catch (g) {
            if (g instanceof cIo) {
              if ((JLt(g.projectId), zCd(), m.grant === !0)) throw g;
              if (g.projectId !== a || l) {
                if (
                  e.operation === "write_files" ||
                  e.operation === "create_support_js"
                )
                  throw new Dr(
                    "Writing to this project needs a one-time approval \u2014 retry the write: you will be shown the approval, or routed to the per-batch finalize_plan flow.",
                    "design_tool_needs_project_grant_not_shown",
                  );
                throw new Dr(
                  "This operation needs a plan_token here \u2014 use finalize_plan (listing the destination paths in writes) and pass the returned plan_token. (It can run without one only under an existing project write grant, set up by a write_files to this project.)",
                  "design_tool_needs_project_grant_ineligible_op",
                );
              }
              if (!n || !sIo(t))
                throw new Dr(
                  "Writing to this project needs a one-time approval, which cannot be granted automatically in this permission mode \u2014 use finalize_plan with writes/deletes and pass the returned plan_token.",
                  "design_tool_needs_project_grant_no_prompt",
                );
              try {
                await XCd(g.projectId);
              } catch (_) {
                if (Gv(_).kind === "auth")
                  throw new Dr(
                    "This session's credential cannot record the project approval \u2014 approve this project from an interactive Claude Code session (run the write there and accept the approval card), then retry here: this session picks the recorded approval up from the server.",
                    "design_tool_grant_mint_bearer_refused",
                  );
                throw _;
              }
              return f({ ...m, grant: !0 });
            }
            if (!(g instanceof lIo)) throw g;
            if (m.consent === !0) throw g;
            let y = g.consent;
            if (y !== s)
              throw (
                pve(y, !1),
                new Dr(
                  `${HKe(y)} The user hasn't granted this yet \u2014 ask them to retry (the prompt will show on the next call) or run /design consent.`,
                  "design_tool_needs_consent_not_shown",
                )
              );
            if (!n)
              throw (
                pve(y, !1),
                new Dr(
                  `${HKe(y)} The user hasn't granted this \u2014 run /design consent to grant it (it can't be approved automatically in this permission mode).`,
                  "design_tool_needs_consent_no_prompt",
                )
              );
            return (await Xft(y), f({ ...m, consent: !0 }));
          }
        }
      },
      mapToolResultToToolResultBlockParam(e, t) {
        let r = fYy(e.content.flatMap(dYy)),
          n = e.isError
            ? r
                .flatMap((o) => (o.type === "text" ? [o.text] : []))
                .join(
                  `
`,
                )
                .trim() || "(error with no message)"
            : null;
        return {
          tool_use_id: t,
          type: "tool_result",
          is_error: e.isError,
          content: n ?? (r.length > 0 ? r : "(empty result)"),
        };
      },
      renderToolUseMessage(e, { verbose: t }) {
        let n = (_, E = 80) => {
            let A = _.replace(/[\x00-\x1f\x7f-\x9f]+/g, " ");
            return A.length > E ? A.slice(0, E).trimEnd() + "\u2026" : A;
          },
          o = e.arguments;
        if (!o || Object.keys(o).length === 0) return "";
        if (!t) {
          let _ = {};
          for (let [E, A] of Object.entries(o))
            if (Array.isArray(A)) {
              let b =
                E === "messages"
                  ? "message"
                  : E === "validators"
                    ? "validator"
                    : "file";
              _[b] = (_[b] ?? 0) + A.length;
            }
          return Object.entries(_)
            .map(([E, A]) => `${A} ${A === 1 ? E : E + "s"}`)
            .join(", ");
        }
        if (
          !Object.hasOwn(rIo, e.operation ?? "") &&
          !Object.hasOwn(nIo, e.operation ?? "")
        ) {
          let _ = Ie(o) ?? "";
          return `${n(e.operation ?? "")} (${Qft(Lmr(_))} of arguments not shown \u2014 operation unknown to this client version)`;
        }
        let i = (_, E) => {
            if (typeof _ === "string")
              return _.length > 80 ? `${n(_)} (${Qft(Lmr(_))})` : n(_);
            if (typeof _ === "object" && _ !== null) {
              let b = _,
                T = Lmr(Ie(_) ?? "");
              if (typeof b.path === "string") {
                let C = typeof b.data === "string" ? b.data : "",
                  I = ["encoding", "local_path", "if_match"].filter(
                    (k) => typeof b[k] === "string" && b[k],
                  ),
                  R = `${n(b.path)} (${Qft(T)})${I.length ? ` [+${I.join(",")}]` : ""}`;
                return E > 0 && C ? `${R}: ${n(C, E)}` : R;
              }
              if (typeof b.content === "string") {
                let C = typeof b.role === "string" ? b.role : "?",
                  I = `${n(C, 12)} (${Qft(T)})`;
                return E > 0 && b.content ? `${I}: ${n(b.content, E)}` : I;
              }
              if (typeof b.src === "string" || typeof b.dest === "string")
                return `${n(String(b.src ?? "?"), 40)} \u2192 ${n(String(b.dest ?? "?"), 40)}${b.src_project_id ? ` [from ${n(String(b.src_project_id), 24)}]` : ""}${typeof b.if_match === "string" && b.if_match ? " [+if_match]" : ""}${T > 256 ? ` (${Qft(T)})` : ""}`;
            }
            let A = Ie(_) ?? String(_);
            return `${n(A)} (${Qft(Lmr(A))})`;
          },
          s = (_) =>
            typeof _ === "string"
              ? n(_, 40)
              : typeof _ === "object" && _ !== null
                ? n(String(_.path ?? _.dest ?? _.role ?? "?"), 40)
                : "?",
          a = (_) => {
            if (Array.isArray(_) && _.length > 0) {
              let A = _.slice(0, 20),
                b = t
                  ? Math.max(0, Math.min(200, Math.floor(1800 / A.length) - 95))
                  : 0,
                T =
                  t &&
                  b === 0 &&
                  A.some((R) => {
                    if (typeof R !== "object" || R === null) return !1;
                    let k = R;
                    return (
                      (typeof k.data === "string" && k.data) ||
                      (typeof k.content === "string" && k.content)
                    );
                  }),
                C = _.slice(20),
                I =
                  C.length > 0
                    ? `, +${C.length} more: ${C.slice(0, 10).map(s).join(", ")}${C.length > 10 ? ", \u2026" : ""}`
                    : "";
              return (
                `[${_.length} ${_.length === 1 ? "entry" : "entries"}: ` +
                A.map((R) => i(R, b)).join(", ") +
                I +
                "]" +
                (T ? " (content previews omitted)" : "")
              );
            }
            let E = Ie(_) ?? String(_);
            return E.length > 80 ? `${n(E)} (${Qft(Lmr(E))})` : n(E);
          },
          l = Object.entries(o).sort(
            ([, _], [, E]) =>
              Number(Array.isArray(_)) - Number(Array.isArray(E)),
          ),
          c = l.filter(([, _]) => Array.isArray(_)),
          u =
            c.length >= 2
              ? ` (${c.map(([_, E]) => `${n(_)}: ${E.length}`).join(", ")})`
              : "",
          d = l.map(([_, E]) => `${n(_)}: ${a(E)}`).join(", "),
          p = Ie(o) ?? "",
          f = Lmr(p),
          g = `${f > 256 ? ` (${Qft(f)} total)` : ""}${u} ${d}`.trimStart(),
          y = t ? 2000 : 1500;
        return g.length > y ? g.slice(0, y - 1).trimEnd() + "\u2026" : g;
      },
    })),
      (uYy = /^image\/(png|jpeg|gif|webp)$/));
    lIo = class lIo extends Error {
      consent;
      constructor(e) {
        super("Claude Design requires consent");
        this.consent = e;
        this.name = "DesignNeedsConsentError";
      }
    };
    cIo = class cIo extends Error {
      projectId;
      constructor(e) {
        super("Claude Design requires a project write grant");
        this.projectId = e;
        this.name = "DesignNeedsProjectGrantError";
      }
    };
    A$t = new Map();
    rNs = class rNs extends Dr {
      wasRetried;
      constructor(e = !1) {
        super(
          "Claude Design authentication failed (HTTP 401). The claude.ai credential is missing or expired \u2014 run /login, or /design login for a separate design credential.",
          "design_tool_auth_401",
        );
        ((this.name = "DesignAuth401Error"), (this.wasRetried = e));
      }
    };
    mSd({
      isEnabled: axd,
      createObserver: (e) =>
        e.kind === "design_project_grant" ? JCd(e.projectId) : null,
    });
  });
