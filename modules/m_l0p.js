// Module: l0p (lines 679093-679123)
  var l0p = S(() => {
    Pyn();
    ZV();
    ((Tta = x(ot(), 1)),
      (Cta = x(ue(), 1)),
      (a0p = x(_e(), 1)),
      (s0p = [
        {
          type: "text",
          key: "accessKeyId",
          label: "Access key ID",
          placeholder: "AKIA\u2026",
          required: !0,
        },
        {
          type: "text",
          key: "secretAccessKey",
          label: "Secret access key",
          mask: "*",
          required: !0,
        },
        {
          type: "text",
          key: "sessionToken",
          label: "Session token",
          mask: "*",
          hint: () =>
            "Only needed for temporary credentials from STS. Leave empty for long-lived keys.",
        },
      ]));
  });
