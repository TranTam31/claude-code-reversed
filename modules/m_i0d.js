// Module: i0d (lines 476568-476690)
  var i0d = S(() => {
    Vn();
    Ss();
    Ge();
    st();
    im();
    F$();
    om();
    Gft();
    e0d();
    n0d();
    ((_9y = Se(() =>
      v.strictObject({
        subject: v.string().describe("A brief title for the task"),
        description: v.string().describe("What needs to be done"),
        activeForm: v
          .string()
          .optional()
          .describe(
            'Present continuous form shown in spinner when in_progress (e.g., "Running tests")',
          ),
        metadata: v
          .record(v.string(), v.unknown())
          .optional()
          .describe("Arbitrary metadata to attach to the task"),
      }),
    )),
      (b9y = Se(() =>
        v.object({ task: v.object({ id: v.string(), subject: v.string() }) }),
      )),
      (o0d = Ui({
        name: p4,
        searchHint: "create a task in the task list",
        maxResultSizeChars: 1e5,
        async description() {
          return t0d;
        },
        async prompt() {
          return r0d();
        },
        get inputSchema() {
          return _9y();
        },
        get outputSchema() {
          return b9y();
        },
        userFacingName() {
          return "TaskCreate";
        },
        shouldDefer: !0,
        coerceInput: QTd,
        validationErrorSteer: ZTd,
        isEnabled() {
          return nP() && !vte();
        },
        isConcurrencySafe() {
          return !1;
        },
        toAutoClassifierInput(e) {
          return e.subject;
        },
        renderToolUseMessage() {
          return null;
        },
        async call(
          { subject: e, description: t, activeForm: r, metadata: n },
          o,
          i,
          s,
          a,
        ) {
          let l = await $id(vV(), {
              subject: e,
              description: t,
              activeForm: r,
              status: "pending",
              owner: void 0,
              blocks: [],
              blockedBy: [],
              metadata: n,
            }),
            c = [],
            u = Wan(
              l,
              e,
              t,
              Qv(),
              nm(),
              void 0,
              o?.abortController?.signal,
              void 0,
              o,
            );
          try {
            for await (let d of u)
              if (d.blockingError) c.push(i1s(d.blockingError));
          } catch (d) {
            if (!(d instanceof gE)) throw d;
            w("TaskCreated hooks cancelled (control stream closed)");
          }
          if (c.length > 0)
            throw (
              await AAo(vV(), l),
              Error(
                c.join(`
`),
              )
            );
          return (
            a?.({ type: "set_expanded_view", expandedView: "tasks" }),
            { data: { task: { id: l, subject: e } } }
          );
        },
        mapToolResultToToolResultBlockParam(e, t) {
          let { task: r } = e;
          return {
            tool_use_id: t,
            type: "tool_result",
            content: `Task #${r.id} created successfully: ${r.subject}`,
          };
        },
      })));
  });
