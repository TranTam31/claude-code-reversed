// Module: MYr (lines 253345-253395)
  var MYr = S(() => {
    Vn();
    dv();
    vCu();
    ((hor = Se(() =>
      tc.enum([
        "userSettings",
        "projectSettings",
        "localSettings",
        "session",
        "cliArg",
      ]),
    )),
      (wlt = Se(() =>
        tc.discriminatedUnion("type", [
          tc.object({
            type: tc.literal("addRules"),
            rules: tc.array(Puo()),
            behavior: Duo(),
            destination: hor(),
          }),
          tc.object({
            type: tc.literal("replaceRules"),
            rules: tc.array(Puo()),
            behavior: Duo(),
            destination: hor(),
          }),
          tc.object({
            type: tc.literal("removeRules"),
            rules: tc.array(Puo()),
            behavior: Duo(),
            destination: hor(),
          }),
          tc.object({
            type: tc.literal("setMode"),
            mode: o3r(),
            destination: hor(),
          }),
          tc.object({
            type: tc.literal("addDirectories"),
            directories: tc.array(tc.string()),
            destination: hor(),
          }),
          tc.object({
            type: tc.literal("removeDirectories"),
            directories: tc.array(tc.string()),
            destination: hor(),
          }),
        ]),
      )));
  });
