// Module: MQf (lines 906261-906311)
  var MQf = S(() => {
    Vn();
    zt();
    vt();
    Yd();
    hn();
    Ge();
    st();
    si();
    U8e();
    Zt();
    Pr();
    ((QjS = { LOW: 1, MEDIUM: 2, HIGH: 3 }),
      (nWS = {
        name: "explain_command",
        description: "Provide an explanation of a shell command",
        input_schema: {
          type: "object",
          properties: {
            explanation: {
              type: "string",
              description: "What this command does (1-2 sentences)",
            },
            reasoning: {
              type: "string",
              description:
                'Why YOU are running this command. Start with "I" - e.g. "I need to check the file contents"',
            },
            risk: {
              type: "string",
              description: "What could go wrong, under 15 words",
            },
            riskLevel: {
              type: "string",
              enum: ["LOW", "MEDIUM", "HIGH"],
              description:
                "LOW (safe dev workflows), MEDIUM (recoverable changes), HIGH (dangerous/irreversible)",
            },
          },
          required: ["explanation", "reasoning", "risk", "riskLevel"],
        },
      }),
      (oWS = Se(() =>
        v.object({
          riskLevel: v.enum(["LOW", "MEDIUM", "HIGH"]),
          explanation: v.string(),
          reasoning: v.string(),
          risk: v.string(),
        }),
      )));
  });
