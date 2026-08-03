// Module: Vgn (lines 664585-664658)
  var Vgn = S(() => {
    Mg();
    pt();
    Lm();
    zt();
    vt();
    Ab();
    C2e();
    XTo();
    yKe();
    ES();
    Gp();
    xS();
    np();
    Ge();
    Ar();
    st();
    KBe();
    Wi();
    Jv();
    Jh();
    Xm();
    yv();
    OE();
    Ga();
    oWo();
    Zt();
    _v();
    ((VSp = require("crypto")),
      (aC = require("fs/promises")),
      (LRe = require("path")),
      (qSp = require("timers/promises")),
      (Ggn = /^[\w-]+$/));
    ((VY_ = Se(() => KSp(GY_))),
      (qY_ = Se(() =>
        Re.object({
          id: Re.string(),
          cron: Re.string(),
          prompt: Re.string(),
          createdAt: Re.number(),
          recurring: Re.boolean().optional(),
          agentId: Re.string().optional(),
          kind: Re.literal("loop").optional(),
        }),
      )),
      (zY_ = Se(() =>
        Re.object({
          taskId: Re.string().regex(Ggn),
          workflowRunId: Re.string().regex(/^wf_[a-z0-9-]{6,}$/),
          scriptPath: Re.string(),
          scriptSha256: Re.string()
            .regex(/^[0-9a-f]{64}$/)
            .optional(),
          argsJson: Re.string().optional(),
          description: Re.string(),
          startTime: Re.number().optional(),
          transcriptDir: aWo(() => [wV()]),
        }),
      )),
      (KY_ = Se(() =>
        Re.object({
          agentId: Re.string().regex(Ggn),
          agentType: Re.string().optional(),
          description: Re.string().optional(),
          toolUseId: Re.string().optional(),
          spawnDepth: Re.number().int().optional(),
          startTime: Re.number().optional(),
          transcriptPath: aWo(() => [wV()]).optional(),
          parentAgentId: Re.string().regex(Ggn).optional(),
          forkedSkillName: Re.string().min(1).max(256).optional(),
        }),
      )));
    XSp = Se(() => YSp());
  });
