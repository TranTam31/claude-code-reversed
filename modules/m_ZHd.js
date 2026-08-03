// Module: ZHd (lines 490287-491075)
  var ZHd = S(() => {
    tse();
    Vn();
    bfe();
    dct();
    Yh();
    pt();
    P4();
    S4();
    Lm();
    zt();
    Ss();
    t$t();
    Ab();
    ES();
    L9e();
    fmr();
    vIo();
    EIo();
    ax();
    jl();
    Ge();
    st();
    Ni();
    Zm();
    LD();
    Jh();
    Afe();
    e1t();
    Kke();
    dv();
    Mdt();
    Ga();
    Un();
    Zt();
    z5();
    iHd();
    H4();
    om();
    k4();
    _v();
    mh();
    Umr();
    V8e();
    f4();
    gHd();
    ((KHd = /^[^\n\r]{1,200}$/), (FNs = new Map()));
    ((WIo = new Map()),
      (q7y = Se(() =>
        v.discriminatedUnion("type", [
          v.object({
            type: v.literal("shutdown_request"),
            reason: v.string().optional(),
          }),
          v.object({
            type: v.literal("shutdown_response"),
            request_id: v
              .string()
              .regex(KHd, "must be the request id being responded to"),
            approve: zU(),
            reason: v.string().optional(),
          }),
          v.object({
            type: v.literal("plan_approval_response"),
            request_id: v
              .string()
              .regex(KHd, "must be the request id being responded to"),
            approve: zU(),
            feedback: v.string().optional(),
          }),
        ]),
      )),
      (XHd = Se(() =>
        v.object({
          to: v.string().describe("Recipient: teammate name"),
          summary: v
            .string()
            .max(200)
            .optional()
            .describe(
              "A 5-10 word summary shown as a preview in the UI (required when message is a string)",
            ),
          message: v.union([
            v.string().describe("Plain text message content"),
            q7y(),
          ]),
        }),
      )),
      (z7y = Se(() =>
        XHd().extend({
          message: v.string().describe("Plain text message content"),
        }),
      )));
    $Ns = {
      data: {
        success: !1,
        message:
          "That agent cannot receive messages (it is a background observer, or its status could not be verified).",
      },
    };
    VIo = class VIo extends Error {
      constructor(e) {
        super(e);
        this.name = "SendMessagePreconditionError";
      }
    };
    rXy = Ui({
      name: ff,
      searchHint: "send messages to agent teammates",
      maxResultSizeChars: 1e5,
      userFacingName() {
        return "SendMessage";
      },
      get inputSchema() {
        return K7y();
      },
      shouldDefer: !0,
      isReadOnly(e) {
        return typeof e.message === "string";
      },
      backfillObservableInput(e) {
        if ("type" in e) return;
        if (typeof e.to !== "string") return;
        if (typeof e.message === "string")
          ((e.type = "message"),
            (e.recipient = e.to),
            (e.content = oa(e.message, 50)));
        else if (typeof e.message === "object" && e.message !== null) {
          let t = e.message;
          if (
            ((e.type = t.type), (e.recipient = e.to), t.request_id !== void 0)
          )
            e.request_id = t.request_id;
          if (t.approve !== void 0) e.approve = t.approve;
          let r = t.reason ?? t.feedback;
          if (r !== void 0) e.content = oa(r, 50);
        }
      },
      toAutoClassifierInput(e) {
        if (typeof e.message === "string") return `to ${e.to}: ${e.message}`;
        switch (e.message.type) {
          case "shutdown_request":
            return `shutdown_request to ${e.to}`;
          case "shutdown_response":
            return `shutdown_response ${e.message.approve ? "approve" : "reject"} ${e.message.request_id}`;
          case "plan_approval_response":
            return `plan_approval ${e.message.approve ? "approve" : "reject"} to ${e.to}`;
        }
      },
      async checkPermissions(e, t) {
        return { behavior: "allow", updatedInput: e };
      },
      async validateInput(e, t) {
        if (e.to === "*")
          return {
            result: !1,
            message:
              'broadcast (to: "*") is no longer supported \u2014 send a message per recipient',
            errorCode: 9,
          };
        let r = qvo(e.to, o7);
        if (r !== void 0) return { result: !1, message: r, errorCode: 9 };
        if (e.to.includes("@"))
          return {
            result: !1,
            message:
              "to must be a bare teammate name \u2014 there is only one team per session",
            errorCode: 9,
          };
        if (typeof e.message === "string") {
          if (!e.summary || e.summary.trim().length === 0)
            return {
              result: !1,
              message: "summary is required when message is a string",
              errorCode: 9,
            };
          if (qse(e.message))
            return {
              result: !1,
              message:
                'message text must not be a teammate protocol frame (permission/mode/plan/shutdown JSON) \u2014 to respond to a plan or shutdown request, use the structured object form ({"message": {"type": ...}}); otherwise send plain text',
              errorCode: 9,
            };
          try {
            let n = Bt(e.message);
            if (
              n !== null &&
              typeof n === "object" &&
              "type" in n &&
              typeof n.type === "string" &&
              [
                "idle_notification",
                "teammate_terminated",
                "task_assignment",
                "task_completed",
                "shutdown_rejected",
              ].includes(n.type)
            )
              return {
                result: !1,
                message:
                  "message text must not be a teammate lifecycle/task frame (idle/terminated/task/shutdown JSON) \u2014 send plain text instead",
                errorCode: 9,
              };
          } catch {}
          return { result: !0 };
        }
        if (!mc())
          return {
            result: !1,
            message:
              "Structured team-protocol messages are only available with agent teams enabled.",
            errorCode: 9,
          };
        if (e.message.type === "shutdown_response" && e.to !== zf)
          return {
            result: !1,
            message: `shutdown_response must be sent to "${zf}"`,
            errorCode: 9,
          };
        if (
          e.message.type === "shutdown_response" &&
          e.message.approve &&
          e.message.reason !== void 0
        )
          return {
            result: !1,
            message:
              "reason is only delivered on rejections (approve: false) \u2014 approvals are sent as a silent confirmation with no reason text; omit reason or reject instead",
            errorCode: 9,
          };
        if (
          e.message.type === "shutdown_response" &&
          !e.message.approve &&
          (!e.message.reason || e.message.reason.trim().length === 0)
        )
          return {
            result: !1,
            message: "reason is required when rejecting a shutdown request",
            errorCode: 9,
          };
        return { result: !0 };
      },
      async description() {
        return mHd;
      },
      async prompt() {
        return hHd(mc());
      },
      mapToolResultToToolResultBlockParam(e, t) {
        return {
          tool_use_id: t,
          type: "tool_result",
          content: [{ type: "text", text: Ie(e) }],
        };
      },
      async call(e, t, r, n) {
        let o = t.agentId;
        if (o !== void 0 && ern(o))
          return {
            data: {
              success: !1,
              message:
                "Observers report via ObserverReport, not SendMessage. SendMessage is not available from an observer.",
            },
          };
        let i = o ? JHd(t, o) : void 0,
          s = t.toolUseId === void 0 ? void 0 : FNs.get(G7y(t.toolUseId, e));
        if (t.toolUseId !== void 0) V7y(t.toolUseId);
        let a = s !== void 0,
          c =
            s?.resolved ??
            void 0 ??
            (await SIo(e.to, e.message, t.getAppState())),
          u = t.options.tools.some((y) => Va(y, o7));
        if (
          c.kind === "agent-live" ||
          c.kind === "agent-stopped" ||
          c.kind === "agent-evicted"
        ) {
          if (ern(c.agentId)) return $Ns;
          let y;
          try {
            y = await tW(Vc(c.agentId));
          } catch {
            return $Ns;
          }
          if (y?.isObserver) return $Ns;
        }
        if (c.kind === "not-found") {
          let y =
              c.closest.length > 0
                ? ` Did you mean: ${c.closest.map((A) => (typeof e.message === "string" && A.where === "in-process" ? l$t(A) : A.name)).join(", ")}?`
                : "",
            _ =
              (e.message,
              typeof e.message === "string"
                ? "Check the spelling, or use the agent ID from a background agent's spawn result."
                : "Check the spelling against your team roster."),
            E = "";
          return {
            data: {
              success: !1,
              message: `No agent named '${e.to}' is reachable.${y}${E}
${_}`,
            },
          };
        }
        if (c.kind === "ambiguous") {
          let y = Date.now(),
            _ = c.candidates.map((T) => `  ${yan(T, y)}`).join(`
`),
            E =
              c.total > c.candidates.length
                ? `
  \u2026and ${c.total - c.candidates.length} more${"."}`
                : "",
            A =
              c.total === 1
                ? `'${e.to}' is not an agent in this conversation. Re-send with the ref to confirm you mean:`
                : `'${e.to}' matches ${c.total} agents. Re-send with the ref:`,
            b =
              c.total === 1
                ? `
e.g. {"to": "${l$t(c.candidates[0])}", ...}`
                : "";
          return {
            data: {
              success: !1,
              message: `${A}
${_}${E}${b}`,
            },
          };
        }
        let d = await tHd({
          to: e.to,
          message: e.message,
          resolved: c,
          appState: t.getAppState(),
          agentLifecycle: t.agentLifecycle,
        });
        if (d.kind === "rebound") {
          Ne("send_message_pin_guard", "rebound");
          let y = `'${d.name}' now resolves to a different agent than it did earlier in this conversation: earlier sends went to [${d.previous.ref}], which this name no longer reaches. Nothing was sent.`,
            _ = d.previous.id,
            E =
              jne(_) !== null
                ? "If you need the earlier agent and it is still running, address it by its agent ID from its spawn result."
                : `The earlier recipient is ${Zpe(_) !== _ ? "a Claude session running in the cloud" : "another Claude session on this machine"}; this name now belongs to an agent in this session.`;
          if (d.next === void 0)
            return {
              data: {
                success: !1,
                message: `${y}
Check the spelling, or use the agent ID from a background agent's spawn result.`,
              },
            };
          return {
            data: {
              success: !1,
              message: `${y}
It now resolves to:
  ${yan(d.next, Date.now())}
To message the new agent, re-send with its ref:
e.g. {"to": "${l$t(d.next)}", ...}
${E}`,
            },
          };
        }
        let p = d.pin ? { pin: d.pin } : void 0;
        if (p) be("send_message_pin_guard");
        if (typeof e.message !== "string") {
          let y = c.kind === "mailbox" ? c.recipientName : e.to,
            _ =
              c.kind === "mailbox" ? (c.displayName ?? c.recipientName) : e.to;
          if (t.agentId) {
            let A = t.getAppState().tasks[t.agentId];
            if (hc(A) || t.agentContext?.agentType !== "teammate")
              return {
                data: {
                  success: !1,
                  message:
                    "Structured team-protocol messages (shutdown/plan responses and requests) are acts of the session itself and cannot be sent by a background subagent. Send a plain text message instead.",
                },
              };
          }
          let E = y;
          if (
            c.kind === "mailbox" &&
            c.memberAgentId !== void 0 &&
            e.message.type !== "shutdown_response"
          ) {
            let A = t.getAppState(),
              b = A.teamContext?.teammates ?? {};
            if (
              c.memberIdentitySource === "team-context" &&
              Object.hasOwn(b, c.memberAgentId)
            )
              E = b[c.memberAgentId].name;
            else if (c.memberIdentitySource === "team-context")
              return {
                data: {
                  success: !1,
                  message: `The member this message was resolved to has left team '${nm(A.teamContext) ?? ""}' \u2014 nothing was sent. Another member may share the same display name '${_}'. Check the roster, or message the lead.`,
                },
              };
            else {
              let T = nm(A.teamContext);
              if (T) {
                let C = await rP(T);
                if (C === null)
                  return {
                    data: {
                      success: !1,
                      message: `Couldn't read the roster of team '${T}' to locate the member this message was resolved to \u2014 nothing was sent. Try again, or message the lead.`,
                    },
                  };
                let I = C.members.filter((k) => k.agentId === c.memberAgentId);
                if (I.length > 1)
                  return {
                    data: {
                      success: !1,
                      message: `The team roster lists the member this message was resolved to more than once \u2014 nothing was sent. Ask the lead to repair team '${T}''s file.`,
                    },
                  };
                let R = I[0];
                if (R === void 0)
                  return {
                    data: {
                      success: !1,
                      message: `The member this message was resolved to has left team '${T}' \u2014 nothing was sent. Another member may share the same display name '${_}'. Check the roster, or message the lead.`,
                    },
                  };
                E = R.name;
              }
            }
          }
          switch (e.message.type) {
            case "shutdown_request":
              return J7y(E, _, e.message.reason, t);
            case "shutdown_response":
              if (e.message.approve) return Q7y(e.message.request_id, t);
              return Z7y(e.message.request_id, e.message.reason);
            case "plan_approval_response":
              if (e.message.approve)
                return eXy(E, _, e.message.request_id, e.message.feedback, t);
              return tXy(
                E,
                _,
                e.message.request_id,
                e.message.feedback ?? "Plan needs revision",
                t,
              );
          }
        }
        let f = o !== void 0 && i !== void 0 ? xvo(i, e.message) : e.message,
          m = i ? Pur(i) : "",
          g =
            o !== void 0 && i !== void 0
              ? {
                  kind: "peer",
                  from: i,
                  senderTaskId: o,
                  ...(m && { name: m }),
                  body: cSe(ort, e.message),
                }
              : { kind: "coordinator" };
        switch (c.kind) {
          case "main": {
            if (o === void 0)
              return {
                data: {
                  success: !1,
                  message: `You are the main conversation \u2014 "${gV}" addresses you. Send to a named agent instead.`,
                },
              };
            return (
              HE({
                mode: "prompt",
                agentId: Si(),
                value: f,
                priority: "next",
                origin: g,
                skipSlashCommands: !0,
                isMeta: !0,
              }),
              {
                data: {
                  success: !0,
                  message:
                    "Message queued for the main conversation's next turn.",
                },
              }
            );
          }
          case "agent-live":
            return (
              RKe(c.agentId, f, t.taskRegistry, { origin: g, isMeta: !0 }),
              {
                data: {
                  success: !0,
                  message: `Message queued for delivery to ${c.agentName} at its next tool round.`,
                  ...p,
                },
              }
            );
          case "agent-stopped-by-user":
            return {
              data: {
                success: !1,
                message: `Agent "${c.agentName}" was stopped by the user and was not resumed. Treat its work as cancelled; only start a new agent for it if the user explicitly asks.`,
              },
            };
          case "agent-stopped": {
            let y = IE();
            try {
              let _ = await fve({
                  agentId: c.agentId,
                  prompt: f,
                  promptOrigin: g,
                  toolUseContext: t,
                  canUseTool: r,
                  invokingRequestId: n?.requestId,
                  awaitCompletion: y,
                }),
                E = t.getAppState().tasks[c.agentId],
                A = !hc(E) || !E.ownerAgentId || E.ownerAgentId === Si();
              return {
                data: {
                  success: !0,
                  message: y
                    ? `Agent "${c.agentName}" was stopped (${c.status}); resumed it with your message and ran to completion. Result:

${_.finalText || "(no text output)"}`
                    : `Agent "${c.agentName}" was stopped (${c.status}); resumed it in the background with your message. You'll be notified when it finishes. Output: ${_.outputFile}`,
                  ...(!y && A && { resumedAgentId: c.agentId }),
                  ...p,
                },
              };
            } catch (_) {
              return {
                data: {
                  success: !1,
                  message:
                    _ instanceof emt
                      ? le(_)
                      : _ instanceof SL
                        ? `Agent "${c.agentName}" is stopped (${c.status}) and could not be resumed: ${le(_)}`
                        : `Agent "${c.agentName}" was resumed but ${_ instanceof Error && _.name === "AbortError" ? "was interrupted" : "failed while running"}: ${le(_)}`,
                },
              };
            }
          }
          case "agent-evicted": {
            let y = c.agentId,
              _ = WIo.get(y);
            if (_) {
              let b = await _,
                T = b ? t.getAppState().tasks[b] : void 0;
              if (T && Bw(T))
                return (
                  await qT(
                    T.identity.agentName,
                    {
                      from: GIo(t),
                      text: e.message,
                      summary: e.summary,
                      timestamp: new Date().toISOString(),
                      color: wD(),
                    },
                    T.identity.teamName,
                  ),
                  T.retryWake?.emit(),
                  {
                    data: {
                      success: !0,
                      message: `Teammate "${c.agentName}" is already running; queued your message for its next turn.`,
                      ...p,
                    },
                  }
                );
            }
            let E = Promise.withResolvers();
            WIo.set(y, E.promise);
            let A = null;
            try {
              if (((A = await nHd(y)), A)) {
                let C = A.name ?? c.agentName,
                  I = A.teamName ?? nm(t.getAppState().teamContext);
                for (let k of Object.values(t.getAppState().tasks))
                  if (
                    Bw(k) &&
                    k.status === "running" &&
                    (k.identity.resumableAgentId === y ||
                      (k.identity.agentName === C && k.identity.teamName === I))
                  )
                    return (
                      E.resolve(k.id),
                      await qT(
                        k.identity.agentName,
                        {
                          from: GIo(t),
                          text: e.message,
                          summary: e.summary,
                          timestamp: new Date().toISOString(),
                          color: wD(),
                        },
                        k.identity.teamName,
                      ),
                      k.retryWake?.emit(),
                      {
                        data: {
                          success: !0,
                          message: `Teammate "${c.agentName}" is already running; queued your message for its next turn.`,
                          ...p,
                        },
                      }
                    );
                let R = await oHd({
                  resumableAgentId: y,
                  prompt: e.message,
                  senderName: i,
                  meta: A,
                  fallbackName: c.agentName,
                  toolUseContext: t,
                });
                return (
                  E.resolve(R.taskId),
                  {
                    data: {
                      success: !0,
                      message:
                        R.resumedMessageCount > 0
                          ? `Teammate "${c.agentName}" was not running; resumed it as an in-process teammate with ${R.resumedMessageCount} prior messages and your message as its next prompt.`
                          : `Teammate "${c.agentName}" was not running; resumed it as an in-process teammate (no prior transcript) with your message as its next prompt.`,
                      ...p,
                    },
                  }
                );
              }
              E.resolve(null);
              let b = IE(),
                T = await fve({
                  agentId: y,
                  prompt: f,
                  promptOrigin: g,
                  toolUseContext: t,
                  canUseTool: r,
                  invokingRequestId: n?.requestId,
                  awaitCompletion: b,
                });
              return {
                data: {
                  success: !0,
                  message: b
                    ? `Agent "${c.agentName}" had no active task; resumed from transcript with your message and ran to completion. Result:

${T.finalText || "(no text output)"}`
                    : `Agent "${c.agentName}" had no active task; resumed from transcript in the background with your message. You'll be notified when it finishes. Output: ${T.outputFile}`,
                  ...(b ? {} : { resumedAgentId: y }),
                  ...p,
                },
              };
            } catch (b) {
              return (
                E.resolve(null),
                {
                  data: {
                    success: !1,
                    message:
                      b instanceof emt
                        ? le(b)
                        : A
                          ? `Failed to resume teammate "${c.agentName}": ${le(b)}`
                          : b instanceof SL
                            ? `Agent "${c.agentName}" could not be resumed: ${le(b)}`
                            : `Agent "${c.agentName}" was resumed but ${b instanceof Error && b.name === "AbortError" ? "was interrupted" : "failed while running"}: ${le(b)}`,
                  },
                }
              );
            } finally {
              WIo.delete(y);
            }
          }
          case "local-session": {
            let { sendToUdsSocket: y } = ($9e(), en(Rrn)),
              _ = Ht(),
              E = B2e(_);
            try {
              let { msgId: A } = await y(c.sock, f, E);
              YHd(t, c.displayName, { kind: "session", id: c.sock });
              let b = e.summary || oa(e.message, 50),
                T = c.sameNamedSiblings
                  ? `
Note: ${c.sameNamedSiblings} other live session${c.sameNamedSiblings === 1 ? " is" : "s are"} also named '${c.displayName}'. This went to the one this conversation confirmed; to switch, re-send with that session's 'name [ref]'.`
                  : "";
              return {
                data: {
                  success: !0,
                  message: `\u201C${b}\u201D \u2192 ${c.displayName} (another Claude session on this machine)${T}`,
                  msg_id: A,
                },
              };
            } catch (A) {
              let b = Ut(A),
                T =
                  b === "ENOENT" || b === "ECONNREFUSED"
                    ? ` \u2014 that session may have just exited.${""}`
                    : b === "EBUSY"
                      ? " \u2014 the session is alive but momentarily busy. Retry the same name shortly."
                      : "";
              return {
                data: {
                  success: !1,
                  message: `Failed to send to ${c.displayName}${b ? ` (${b})` : ""}${T || "."}`,
                },
              };
            }
          }
          case "cloud-session": {
            let { postInterClaudeMessage: y, isLikelyStaleBridgeError: _ } =
                (NNs(), en(ONs)),
              E = Ht(),
              A = B2e(E),
              b = await y(c.sessionId, f, A),
              T = e.summary || oa(e.message, 50);
            if (!b.ok) {
              let R = _(b.error)
                ? ` \u2014 that cloud session may have ended or been archived.${""}`
                : "";
              return {
                data: {
                  success: !1,
                  message: `Failed to send to ${c.displayName}: ${b.error ?? "unknown"}${R}`,
                },
              };
            }
            YHd(t, c.displayName, { kind: "cloud-session", id: c.sessionId });
            let C = c.sameNamedSiblings
                ? `
Note: ${c.sameNamedSiblings} other agent${c.sameNamedSiblings === 1 ? " is" : "s are"} also named '${c.displayName}'. This went to the one this conversation confirmed; to switch, re-send with that agent's 'name [ref]'.`
                : "",
              I = !jw() || !$x();
            return {
              data: {
                success: !0,
                message: `\u201C${T}\u201D \u2192 ${c.displayName} (a Claude session running in the cloud${I ? "; one-way: Remote Control is not connected, so the receiver cannot address a reply to this session" : ""})${C}`,
                msg_id: b.msgId,
              },
            };
          }
          case "mailbox":
            return X7y(
              c.recipientName,
              e.message,
              e.summary,
              t,
              c.memberAgentId,
              c.memberIdentitySource,
            );
        }
      },
      renderToolUseMessage(e) {
        if (
          typeof e.to === "string" &&
          e.to.startsWith("did:") &&
          typeof e.message === "string"
        ) {
          let t = (i) =>
              Yod(i)
                .replace(/[\s\u2800]+/g, " ")
                .trim(),
            r = t(e.message),
            n = Xde(r),
            o =
              n > 200
                ? `${Atr(r).slice(0, 200).join("")}\u2026 [${n} chars total]`
                : r;
          return `${t(e.to)} \u2190 "${o}"`;
        }
        if (typeof e.message !== "object" || e.message === null) return null;
        if (e.message.type === "plan_approval_response")
          return e.message.approve
            ? `approve plan from: ${e.to}`
            : `reject plan from: ${e.to}`;
        return null;
      },
    });
  });
