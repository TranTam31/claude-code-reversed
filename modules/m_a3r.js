// Module: a3r (lines 68073-68107)
  var a3r = S(() => {
    _Ce();
    Vn();
    d5l();
    s3r = Se(() =>
      v
        .string()
        .optional()
        .describe(
          'Permission rule syntax to filter when this hook runs (e.g., "Bash(git *)"). Only runs if the tool call matches the pattern. Avoids spawning hooks for non-matching commands.',
        ),
    );
    ((f5l = Se(() => {
      let {
        BashCommandHookSchema: e,
        PromptHookSchema: t,
        AgentHookSchema: r,
        HttpHookSchema: n,
        McpToolHookSchema: o,
      } = nkh();
      return v.discriminatedUnion("type", [e, t, r, n, o]);
    })),
      (lLi = Se(() =>
        v.object({
          matcher: v
            .string()
            .optional()
            .describe('String pattern to match (e.g. tool names like "Write")'),
          hooks: v
            .array(f5l())
            .describe("List of hooks to execute when the matcher matches"),
        }),
      )),
      (woe = Se(() => v.partialRecord(v.enum(dU), v.array(lLi())))));
  });
