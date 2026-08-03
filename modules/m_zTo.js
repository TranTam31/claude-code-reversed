// Module: zTo (lines 404120-404143)
  var zTo = S(() => {
    Mg();
    Lm();
    ES();
    Pr();
    _v();
    qTo();
    BNy = Se(() =>
      Re.object({
        agentId: Re.string()
          .min(1)
          .max(256)
          .refine((e) => jne(e) !== null, { message: "invalid agentId" }),
        skillName: GTo(),
        description: Re.string().max(wdd),
      }),
    );
    ((jNy = new RegExp(`<${iCt}>([\\s\\S]*?)</${iCt}>`, "g")),
      (WNy = new RegExp(
        `<(${PC}|${_B}|${WN}|${ST}|${nCt})>[\\s\\S]*?</\\1>`,
        "g",
      )),
      (GNy = new RegExp(`<(/?)${iCt}>`, "g")));
  });
