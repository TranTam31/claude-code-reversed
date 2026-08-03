// Module: WRp (lines 694009-694033)
  var WRp = S(() => {
    st();
    Yb();
    isa();
    ((CVo = require("fs/promises")),
      (Fme = x(require("path"))),
      (ORp = new Set([
        "schema_version",
        "name",
        "description",
        "tags",
        "plugins",
        "runs",
        "expected_outcome",
      ])),
      (NRp = new Set([
        "model",
        "max_turns",
        "timeout_seconds",
        "allowed_tools",
        "append_system_prompt",
        "env",
      ])));
    xab = { llm: "criteria", baseline: "criteria", regex: "pattern" };
  });
