// Module: vkd (lines 491915-491940)
  var vkd = S(() => {
    Dfr();
    Zt();
    OKe = new RegExp(`^${Rfr}$`);
    ((bln = new Map()), (mkd = new Map()), (hkd = new Map()));
    bXy = {
      format: 1,
      name: "workshop-decisions",
      island: "ws-decisions",
      key: "id",
      maxEntries: 20,
      fields: {
        id: { kind: "token" },
        opts: { kind: "tokenArray", minItems: 2, maxItems: 5, unique: !0 },
        state: { kind: "enum", values: ["open", "resolved"] },
        choice: { kind: "ref", into: "opts", nullable: !0 },
        custom: { kind: "text", nullable: !0 },
      },
      invariants: [
        { when: { state: "open" }, null: ["choice", "custom"] },
        { when: { state: "resolved" }, exactlyOneOf: ["choice", "custom"] },
        { forKey: "get-started", null: ["custom"] },
      ],
    };
    _Xy({ doc: bXy, enabled: () => Skd(), derive: SXy });
  });
