// Module: E5r (lines 140440-140489)
  var E5r = S(() => {
    bl();
    ts();
    ((Ycg = [
      {
        modelEnvVar: "ANTHROPIC_DEFAULT_FABLE_MODEL",
        capabilitiesEnvVar:
          "ANTHROPIC_DEFAULT_FABLE_MODEL_SUPPORTED_CAPABILITIES",
      },
      {
        modelEnvVar: "ANTHROPIC_DEFAULT_OPUS_MODEL",
        capabilitiesEnvVar:
          "ANTHROPIC_DEFAULT_OPUS_MODEL_SUPPORTED_CAPABILITIES",
      },
      {
        modelEnvVar: "ANTHROPIC_DEFAULT_SONNET_MODEL",
        capabilitiesEnvVar:
          "ANTHROPIC_DEFAULT_SONNET_MODEL_SUPPORTED_CAPABILITIES",
      },
      {
        modelEnvVar: "ANTHROPIC_DEFAULT_HAIKU_MODEL",
        capabilitiesEnvVar:
          "ANTHROPIC_DEFAULT_HAIKU_MODEL_SUPPORTED_CAPABILITIES",
      },
      {
        modelEnvVar: "ANTHROPIC_CUSTOM_MODEL_OPTION",
        capabilitiesEnvVar:
          "ANTHROPIC_CUSTOM_MODEL_OPTION_SUPPORTED_CAPABILITIES",
      },
    ]),
      (Tde = qr(
        (e, t) => {
          if (tm()) return;
          let r = e.toLowerCase();
          for (let n of Ycg) {
            let o = process.env[n.modelEnvVar]?.trim(),
              i = process.env[n.capabilitiesEnvVar];
            if (!o || i === void 0) continue;
            if (r !== o.toLowerCase()) continue;
            return i
              .toLowerCase()
              .split(",")
              .map((s) => s.trim())
              .includes(t);
          }
          return;
        },
        (e, t) => `${e.toLowerCase()}:${t}`,
      )));
  });
