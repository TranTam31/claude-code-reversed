// Module: F0d (lines 478058-478132)
  var F0d = S(() => {
    Vn();
    Gko();
    Ss();
    st();
    Zt();
    Pr();
    Gan();
    ((q9y = Se(() =>
      v.strictObject({
        uuids: v
          .array(v.string().min(1).max(64))
          .min(1)
          .max(32)
          .describe("directoryUuid or server_id values to resolve."),
      }),
    )),
      (z9y = Se(() =>
        v.object({
          connectors: v.array(g$t()),
          opt_in_required: v.literal(!0).optional(),
          message: v.string().optional(),
        }),
      )),
      (K9y = Ui({
        name: m1s,
        searchHint: "resolve MCP connector payloads by directoryUuid",
        maxResultSizeChars: 50000,
        shouldDefer: !0,
        get inputSchema() {
          return q9y();
        },
        get outputSchema() {
          return z9y();
        },
        isEnabled: Kft,
        isConcurrencySafe() {
          return !0;
        },
        isReadOnly() {
          return !0;
        },
        async description() {
          return h1s;
        },
        async prompt() {
          return g1s;
        },
        async call(e, t) {
          try {
            let r = await L0d(e.uuids, t.abortController.signal);
            if (CKe(r)) return { data: { connectors: [], ...r } };
            return { data: { connectors: r } };
          } catch (r) {
            if (t.abortController.signal.aborted) throw new tl();
            throw (
              wmr("lookup", r),
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
          return Et((e.uuids ?? []).length, "uuid");
        },
      })));
  });
