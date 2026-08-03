// Module: Mfe (lines 409106-409232)
  var Mfe = S(() => {
    Vn();
    pt();
    dct();
    z8e();
    R5();
    zrn();
    cpd();
    ZIs();
    zt();
    Zr();
    vt();
    Yd();
    b5();
    don();
    I0();
    Ss();
    Ab();
    ES();
    Gp();
    ax();
    jl();
    Ge();
    Ir();
    eRs();
    rfe();
    ja();
    Qr();
    st();
    HHe();
    vo();
    tRs();
    Xx();
    yte();
    Dh();
    g0o();
    om();
    fv();
    Mk();
    R4();
    gdr();
    Rh();
    OOt();
    VM();
    NOt();
    ND();
    aH();
    gPt();
    mh();
    rRs();
    ((D$y = (WC(), en(BIt)).ARTIFACT_TOOL_NAME),
      (opd = new Set([Uj, p4, K8, iFe, Q5])));
    Spd = Se(() =>
      v.object({
        agentId: v.string(),
        agentType: v.string().optional(),
        content: v.array(
          v.object({
            type: v.literal("text"),
            text: v.string(),
            citations: v.array(v.any()).nullable().optional(),
          }),
        ),
        resolvedModel: v.string().optional(),
        modelsUsed: v.array(v.string()).optional(),
        totalToolUseCount: v.number(),
        totalDurationMs: v.number(),
        totalTokens: v.number(),
        usage: v.object({
          input_tokens: v.number(),
          output_tokens: v.number(),
          cache_creation_input_tokens: v.number().nullable(),
          cache_read_input_tokens: v.number().nullable(),
          server_tool_use: v
            .object({
              web_search_requests: v.number(),
              web_fetch_requests: v.number(),
            })
            .nullable(),
          service_tier: v.string().nullable(),
          cache_creation: v
            .object({
              ephemeral_1h_input_tokens: v.number(),
              ephemeral_5m_input_tokens: v.number(),
            })
            .nullable(),
          inference_geo: v.string().nullable().optional(),
          speed: v.string().nullable().optional(),
          iterations: v.unknown().optional(),
        }),
        toolStats: v
          .object({
            readCount: v.number(),
            searchCount: v.number(),
            bashCount: v.number(),
            editFileCount: v.number(),
            linesAdded: v.number(),
            linesRemoved: v.number(),
            otherToolCount: v.number(),
            frameCount: v.number().optional(),
          })
          .optional(),
      }),
    );
    ((iRs = ain + lin + 60000),
      ($$y = {
        name: Vo,
        toAutoClassifierInput(e) {
          return e.subagent_type
            ? `(${e.subagent_type}): ${e.prompt}`
            : `: ${e.prompt}`;
        },
      }));
    S0o = class S0o extends Dr {
      errorKind;
      constructor(e, t) {
        super(
          `Agent terminated early due to an API error: ${e}`,
          "Agent terminated early due to an API error",
        );
        this.errorKind = t;
        this.name = "AgentApiErrorTerminationError";
      }
    };
    F$y = new Set(["rate_limit", "overloaded", "server_error"]);
    B$y = new Set([Vo]);
  });
