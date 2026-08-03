// Module: m$t (lines 473608-473671)
  var m$t = S(() => {
    Vn();
    vt();
    Gb();
    Qr();
    st();
    Ge();
    h1();
    Zt();
    ((Uwd = require("crypto")),
      (N2e = require("path")),
      (xzy = Czy * 24 * 60 * 60 * 1000));
    Pzy = /[^A-Za-z0-9.:_/@[\]-]/g;
    Mzy = /^req_[A-Za-z0-9_-]{1,36}$/;
    ((WOs = ["bug", "idea", "missing_capability"]),
      (Lzy = [
        "tool_error",
        "user_frustration",
        "missing_capability",
        "model_judgment",
        "exit_nudge",
      ]),
      (Ozy = Se(() =>
        v.object({
          draft_id: v.uuid(),
          created_at: v
            .string()
            .refine((e) => Number.isFinite(Date.parse(e)))
            .transform((e) => new Date(Date.parse(e)).toISOString()),
          source_session_id: v.string().regex(jwd),
          cwd: v.string().transform((e) => kIe(e, kko)),
          model: v.string().transform((e) => Rko(e)),
          cli_version: v.string().transform((e) => kIe(e, xko)),
          os: v.string().transform((e) => kIe(e, Hko)),
          request_ids: v.array(v.string()).transform((e) => f$t(e)),
          type: v.enum(WOs),
          title: v
            .string()
            .min(1)
            .transform((e) => ymr(e)),
          details: v.string().transform((e) => Iko(e)),
          area: v
            .string()
            .optional()
            .transform((e) => Dko(e)),
          trigger: v.enum(Lzy),
          transcript_ref: v
            .object({
              session_file: v.string(),
              message_range: v.tuple([v.number(), v.number()]).nullable(),
              project_dir_key: v
                .string()
                .optional()
                .transform((e) => (e !== void 0 && GOs.test(e) ? e : void 0)),
            })
            .nullable(),
          status: v.enum(["queued", "submitted", "discarded", "expired"]),
        }),
      )));
    ((Bwd =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/),
      (jwd = /^[A-Za-z0-9_-]{1,128}$/),
      (GOs = /^[A-Za-z0-9-]{1,255}$/));
  });
