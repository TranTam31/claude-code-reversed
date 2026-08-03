// Module: STd (lines 474307-474470)
  var STd = S(() => {
    Vn();
    bTd = Se(() => {
      let e = v.strictObject({
          operation: v.literal("goToDefinition"),
          filePath: v
            .string()
            .describe("The absolute or relative path to the file"),
          line: v
            .number()
            .int()
            .positive()
            .describe("The line number (1-based, as shown in editors)"),
          character: v
            .number()
            .int()
            .positive()
            .describe("The character offset (1-based, as shown in editors)"),
          query: v.string().optional(),
        }),
        t = v.strictObject({
          operation: v.literal("findReferences"),
          filePath: v
            .string()
            .describe("The absolute or relative path to the file"),
          line: v
            .number()
            .int()
            .positive()
            .describe("The line number (1-based, as shown in editors)"),
          character: v
            .number()
            .int()
            .positive()
            .describe("The character offset (1-based, as shown in editors)"),
          query: v.string().optional(),
        }),
        r = v.strictObject({
          operation: v.literal("hover"),
          filePath: v
            .string()
            .describe("The absolute or relative path to the file"),
          line: v
            .number()
            .int()
            .positive()
            .describe("The line number (1-based, as shown in editors)"),
          character: v
            .number()
            .int()
            .positive()
            .describe("The character offset (1-based, as shown in editors)"),
          query: v.string().optional(),
        }),
        n = v.strictObject({
          operation: v.literal("documentSymbol"),
          filePath: v
            .string()
            .describe("The absolute or relative path to the file"),
          line: v
            .number()
            .int()
            .positive()
            .describe("The line number (1-based, as shown in editors)"),
          character: v
            .number()
            .int()
            .positive()
            .describe("The character offset (1-based, as shown in editors)"),
          query: v.string().optional(),
        }),
        o = v.strictObject({
          operation: v.literal("workspaceSymbol"),
          filePath: v
            .string()
            .describe("The absolute or relative path to the file"),
          line: v
            .number()
            .int()
            .positive()
            .describe("The line number (1-based, as shown in editors)"),
          character: v
            .number()
            .int()
            .positive()
            .describe("The character offset (1-based, as shown in editors)"),
          query: v
            .string()
            .optional()
            .describe(
              "The symbol name or partial name to search for. Most language servers return no results for an empty query.",
            ),
        }),
        i = v.strictObject({
          operation: v.literal("goToImplementation"),
          filePath: v
            .string()
            .describe("The absolute or relative path to the file"),
          line: v
            .number()
            .int()
            .positive()
            .describe("The line number (1-based, as shown in editors)"),
          character: v
            .number()
            .int()
            .positive()
            .describe("The character offset (1-based, as shown in editors)"),
          query: v.string().optional(),
        }),
        s = v.strictObject({
          operation: v.literal("prepareCallHierarchy"),
          filePath: v
            .string()
            .describe("The absolute or relative path to the file"),
          line: v
            .number()
            .int()
            .positive()
            .describe("The line number (1-based, as shown in editors)"),
          character: v
            .number()
            .int()
            .positive()
            .describe("The character offset (1-based, as shown in editors)"),
          query: v.string().optional(),
        }),
        a = v.strictObject({
          operation: v.literal("incomingCalls"),
          filePath: v
            .string()
            .describe("The absolute or relative path to the file"),
          line: v
            .number()
            .int()
            .positive()
            .describe("The line number (1-based, as shown in editors)"),
          character: v
            .number()
            .int()
            .positive()
            .describe("The character offset (1-based, as shown in editors)"),
          query: v.string().optional(),
        }),
        l = v.strictObject({
          operation: v.literal("outgoingCalls"),
          filePath: v
            .string()
            .describe("The absolute or relative path to the file"),
          line: v
            .number()
            .int()
            .positive()
            .describe("The line number (1-based, as shown in editors)"),
          character: v
            .number()
            .int()
            .positive()
            .describe("The character offset (1-based, as shown in editors)"),
          query: v.string().optional(),
        });
      return v.discriminatedUnion("operation", [e, t, r, n, o, i, s, a, l]);
    });
  });
