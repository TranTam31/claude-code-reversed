// Module: W0d (lines 478160-478236)
  var W0d = S(() => {
    Vn();
    Gko();
    Ss();
    st();
    Zt();
    Gan();
    ((Y9y = Se(() =>
      v.strictObject({
        keywords: v
          .array(v.string().min(1).max(64))
          .max(8)
          .optional()
          .describe("Optional filter; omit to list everything."),
      }),
    )),
      (X9y = Se(() =>
        v.object({
          connectors: v.array(g$t()),
          opt_in_required: v.literal(!0).optional(),
          message: v.string().optional(),
        }),
      )));
    J9y = Ui({
      name: _1s,
      searchHint: "list the user's installed MCP connectors",
      maxResultSizeChars: 300000,
      persistenceThresholdCeiling: 300000,
      shouldDefer: !0,
      get inputSchema() {
        return Y9y();
      },
      get outputSchema() {
        return X9y();
      },
      isEnabled: Kft,
      isConcurrencySafe() {
        return !0;
      },
      isReadOnly() {
        return !0;
      },
      async description() {
        return b1s;
      },
      async prompt() {
        return S1s;
      },
      async call(e, t) {
        try {
          let r = await O0d(t.abortController.signal);
          if (CKe(r)) return { data: { connectors: [], ...r } };
          let n = t.options.refreshMcpClients?.() ?? t.options.mcpClients,
            o = Wko(r, n);
          return { data: { connectors: B0d(o, e.keywords) } };
        } catch (r) {
          if (t.abortController.signal.aborted) throw new tl();
          throw (
            wmr("list", r),
            new y$t(
              "Connector registry is unavailable right now; please try again.",
            )
          );
        }
      },
      mapToolResultToToolResultBlockParam(e, t) {
        return {
          tool_use_id: t,
          type: "tool_result",
          content: Ie(e.opt_in_required ? e : e.connectors),
        };
      },
      renderToolUseMessage(e) {
        return (e.keywords ?? []).join(", ");
      },
    });
  });
