// Agent: workflow-subagent (lines 454531-454615)
  var zSd = S(() => {
    mV();
    Zr();
    vt();
    Jpt();
    Ss();
    r2();
    Gp();
    Yh();
    jl();
    KOt();
    ei();
    Ge();
    Wf();
    Ar();
    Qr();
    st();
    Qa();
    Ir();
    vo();
    Jdt();
    si();
    bh();
    WOt();
    Zt();
    Pr();
    om();
    nW();
    R4();
    eU();
    gKe();
    I$();
    Mfe();
    $ze();
    mh();
    Nw();
    yIe();
    A5();
    Z5();
    Hft();
    sLs();
    aLs();
    ((BSd = require("os")), (jSd = require("util")));
    ((q5y = V5y(BSd.cpus().length)),
      (K5y =
        `Workflow agent() call cap reached (${WSd}). This usually means a loop using budget.remaining() never terminates because ` +
        "no token budget was set \u2014 remaining() returns Infinity when budget.total is null. " +
        "Add a hard iteration cap to the loop, or pass a token budget."));
    GSd = class GSd extends Error {
      constructor() {
        super(K5y);
        this.name = "WorkflowAgentCapError";
      }
    };
    VSd = class VSd extends Error {
      constructor(e, t) {
        super(
          `Workflow token budget exceeded (${e.toLocaleString()} / ${t.toLocaleString()} output tokens). Stopping further agent() calls. In-flight agents will complete; their results are preserved.`,
        );
        this.name = "WorkflowBudgetExceededError";
      }
    };
    ((J5y = `

---

NOTE: You are running inside a workflow script. You MUST return your final answer by calling the ${Sg} tool exactly once \u2014 the tool's input schema defines the required shape. Do your work, then call ${Sg}; do NOT put your answer in a text response (the script reads ONLY the tool call). If validation fails, read the error and call ${Sg} again with a corrected shape.`),
      (Q5y = `You are a subagent spawned by a workflow orchestration script. Use the tools available to complete the task.

CRITICAL: You MUST call the ${Sg} tool exactly once to return your final answer. The tool's input schema defines the required shape.
- Do your work (Read files, run commands, etc.), then call ${Sg} with your answer.
- Do NOT put your answer in a text response. The script reads ONLY the ${Sg} tool call.
- If the schema validation fails, read the error and call ${Sg} again with a corrected shape.
- After calling ${Sg} successfully, end your turn. No acknowledgment needed.`),
      (lLs = {
        agentType: "workflow-subagent",
        whenToUse: "Internal subagent for workflow script orchestration.",
        tools: ["*"],
        disallowedTools: [wU, Vo, pH],
        source: "built-in",
        baseDir: "built-in",
        getSystemPrompt: () => Y5y,
      }),
      (Z5y = { ...lLs, getSystemPrompt: () => Q5y }));
  });
