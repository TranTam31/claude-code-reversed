// Module: Etn (lines 366412-366478)
  var Etn = S(() => {
    Vn();
    Mdt();
    ((REo = Se(() =>
      v.strictObject({
        file_path: v
          .string()
          .describe("The absolute path to the file to modify"),
        old_string: v.string().describe("The text to replace"),
        new_string: v
          .string()
          .describe(
            "The text to replace it with (must be different from old_string)",
          ),
        replace_all: zU(v.boolean().default(!1).optional()).describe(
          "Replace all occurrences of old_string (default false)",
        ),
      }),
    )),
      (Wws = Se(() =>
        v.object({
          oldStart: v.number(),
          oldLines: v.number(),
          newStart: v.number(),
          newLines: v.number(),
          lines: v.array(v.string()),
        }),
      )),
      (Gws = Se(() =>
        v.object({
          filename: v.string(),
          status: v.enum(["modified", "added"]),
          additions: v.number(),
          deletions: v.number(),
          changes: v.number(),
          patch: v.string(),
          repository: v
            .string()
            .nullable()
            .optional()
            .describe("GitHub owner/repo when available"),
        }),
      )),
      (Vws = Se(() =>
        v.object({
          filePath: v.string().describe("The file path that was edited"),
          oldString: v
            .string()
            .describe("The original string that was replaced"),
          newString: v.string().describe("The new string that replaced it"),
          originalFile: v
            .string()
            .nullable()
            .describe("The original file contents before editing"),
          structuredPatch: v
            .array(Wws())
            .describe("Diff patch showing the changes"),
          userModified: v
            .boolean()
            .describe("Whether the user modified the proposed changes"),
          replaceAll: v
            .boolean()
            .describe("Whether all occurrences were replaced"),
          gitDiff: Gws().optional(),
        }),
      )));
  });
