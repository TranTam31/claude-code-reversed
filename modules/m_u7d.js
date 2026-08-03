// Module: u7d (lines 584617-584628)
  var u7d = S(() => {
    Qr();
    c7d = {
      type: "local-jsx",
      name: "setup-bedrock",
      description:
        "Reconfigure Amazon Bedrock authentication, region, or model pins",
      get isHidden() {
        return !Yt(process.env.CLAUDE_CODE_USE_BEDROCK);
      },
    };
  });
