// Module: wpt (lines 386590-386657)
  var wpt = S(() => {
    pt();
    Ge();
    Ar();
    Ir();
    Xm();
    Zt();
    Mg();
    Yq();
    vt();
    Yd();
    xf();
    ((Esd = require("fs")),
      (UAo = require("fs/promises")),
      (vsd = require("path")));
    xfe = new Map();
    dMy = Se(() =>
      Re.record(
        Re.string(),
        Re.object({
          systemHash: Re.number(),
          toolsHash: Re.number(),
          cacheControlHash: Re.number(),
          toolNames: Re.array(Re.string()),
          perToolHashes: Re.record(Re.string(), Re.number()),
          perBlockHashes: Re.array(Re.number()),
          perBlockLengths: Re.array(Re.number()),
          systemCharCount: Re.number(),
          model: Re.string(),
          fastMode: Re.boolean(),
          globalCacheStrategy: Re.string(),
          betas: Re.array(Re.string()),
          autoModeActive: Re.boolean(),
          isUsingOverage: Re.boolean(),
          anyDeferLoading: Re.boolean().default(!1),
          is1hCacheTTL: Re.boolean().default(!1),
          queryDepth: Re.number().optional(),
          cacheDiagnosis: Re.boolean().default(!1),
          effortValue: Re.string(),
          extraBodyHash: Re.number(),
          callCount: Re.number(),
          prevCacheReadTokens: Re.number().nullable(),
          cacheDeletionsPending: Re.boolean(),
          messageHashes: Re.array(Re.number()),
        }),
      ),
    );
    _sd = Promise.resolve();
    mMy = [
      "repl_main_thread",
      "sdk",
      "agent:custom",
      "agent:default",
      "agent:builtin",
    ];
    bMy = new Set([
      "type",
      "text",
      "thinking",
      "id",
      "tool_use_id",
      "name",
      "input",
      "source",
      "content",
      "cache_control",
    ]);
  });
