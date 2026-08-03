// Module: m7p (lines 770221-770276)
  var m7p = S(() => {
    Mg();
    up();
    zt();
    EM();
    Dy();
    WC();
    Uin();
    ((Gxb = Se(() => Re.object({ frames: Re.array(Re.unknown()).nullable() }))),
      (f7p =
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/),
      (Vxb = Se(() =>
        Re.object({
          slug: Re.string(),
          title: Re.string()
            .optional()
            .catch(void 0),
          favicon: Re.string()
            .optional()
            .catch(void 0),
          description: Re.string()
            .optional()
            .catch(void 0),
          label: Re.string()
            .optional()
            .catch(void 0),
          rel: Re.enum(["mine", "shared"]).catch("shared"),
          source_surface: Re.string()
            .optional()
            .catch(void 0),
          updatedAt: Re.string()
            .regex(f7p)
            .optional()
            .catch(void 0),
          created_at: Re.string()
            .regex(f7p)
            .optional()
            .catch(void 0),
          owner_email: Re.string()
            .optional()
            .catch(void 0),
          view_count: Re.number()
            .optional()
            .catch(void 0),
          unique_view_count: Re.number()
            .optional()
            .catch(void 0),
          needs_pin: Re.boolean()
            .optional()
            .catch(void 0),
          softDeleted: Re.boolean()
            .optional()
            .catch(void 0),
        }),
      )));
  });
