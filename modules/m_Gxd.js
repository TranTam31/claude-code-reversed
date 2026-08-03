// Module: Gxd (lines 483927-484027)
  var Gxd = S(() => {
    Vn();
    pt();
    vt();
    Ss();
    Ge();
    st();
    Ga();
    cNs();
    ((GYy = Se(() => v.strictObject({}))),
      (VYy = Se(() => v.object({ ended: v.boolean(), message: v.string() }))),
      (qYy = Ui({
        name: FU,
        shouldDefer: !0,
        searchHint:
          "end the conversation \u2014 only for sustained user abuse, or when the user explicitly asks to see it demonstrated",
        maxResultSizeChars: 1e4,
        async description() {
          return oln;
        },
        async prompt() {
          return oln;
        },
        get inputSchema() {
          return GYy();
        },
        get outputSchema() {
          return VYy();
        },
        userFacingName() {
          return FU;
        },
        isEnabled() {
          let e = a7n();
          return e !== void 0 && mIo(e);
        },
        isReadOnly() {
          return !0;
        },
        isConcurrencySafe() {
          return !1;
        },
        async checkPermissions(e) {
          return { behavior: "allow", updatedInput: e };
        },
        toAutoClassifierInput() {
          return "";
        },
        renderToolUseMessage() {
          return null;
        },
        mapToolResultToToolResultBlockParam(e, t) {
          return { tool_use_id: t, type: "tool_result", content: e.message };
        },
        async call(e, t) {
          let r = t.options.isNonInteractiveSession,
            n = t.agentId ? "fork" : r ? "print" : "repl";
          if (t.agentId)
            return (
              O("tengu_end_conversation_tool_call", {
                surface: Ee(n),
                is_non_interactive: r,
                phase: Ee("reflect"),
              }),
              { data: { ended: !1, message: sNs } }
            );
          if (!jxd(t.messages))
            return (
              O("tengu_end_conversation_tool_call", {
                surface: Ee(n),
                is_non_interactive: r,
                phase: Ee("reflect"),
              }),
              { data: { ended: !1, message: lNs } }
            );
          O("tengu_end_conversation_tool_call", {
            surface: Ee(n),
            is_non_interactive: r,
            phase: Ee("end"),
          });
          try {
            await uNs(Ht());
          } catch (o) {
            w(`[EndConversation] marker write failed: ${le(o)}`);
          }
          if ((t.abortController.abort("end_conversation"), r)) {
            let { gracefulShutdown: o } = await Promise.resolve().then(
              () => (Zm(), Fmr),
            );
            return (
              o(1, "other", { finalMessage: aNs }),
              { data: { ended: !0, message: fIo } }
            );
          }
          return (
            t.setAppState((o) => ({ ...o, endedByModel: !0 })),
            { data: { ended: !0, message: fIo } }
          );
        },
      })));
  });
