// Module: j_n (lines 690794-690852)
  var j_n = S(() => {
    Vn();
    vt();
    EM();
    xS();
    Ge();
    st();
    Wi();
    Zt();
    rKr();
    B5();
    ((yVo = require("fs/promises")),
      (jia = require("path")),
      (rRp = Se(() =>
        v.object({ always_on: v.number(), on_invoke: v.number() }),
      )),
      (Fia = Se(() =>
        v.object({ name: v.string(), chars: rRp().optional() }).loose(),
      )),
      (Isb = Se(() =>
        v
          .object({
            plugin: v.string(),
            tokens: v.record(v.string(), rRp()),
            components: v
              .object({
                commands: v.array(Fia()),
                agents: v.array(Fia()),
                skills: v.array(Fia()),
                hooks: v.array(v.string()).optional(),
                mcpServers: v.array(v.string()).optional(),
                lspServers: v.array(v.string()).optional(),
              })
              .loose(),
            unique_installs: v.number().optional(),
            last_updated: v.string().optional(),
            marketplace_entry: v.record(v.string(), v.unknown()),
          })
          .loose(),
      )),
      (nRp = Se(() =>
        v
          .object({
            generated_at: v.string(),
            installs_generated_at: v.string().optional(),
            marketplace_sha: v.string(),
            models: v.array(v.string()),
            plugins: v.record(v.string(), Isb()),
          })
          .loose(),
      )),
      (Rsb = Se(() =>
        v.object({
          version: v.number(),
          fetchedAt: v.string(),
          catalog: nRp(),
        }),
      )));
  });
