// Module: Nhm (lines 958520-958549)
  var Nhm = S(() => {
    cfl();
    Dhm();
    Mhm();
    Ohm = [
      ...(Lhm ? [Lhm] : []),
      Rhm,
      Phm,
      {
        id: "marketplace-plugin-suggestion",
        compute: async () => {
          let e = await Ihm({ theme: "dark" }),
            t = e?.pluginId;
          if (!e || !t) return null;
          return (
            bmi(e, "startup"),
            {
              key: "marketplace-plugin-suggestion",
              kind: "upsell",
              segments: [
                { text: `plugin suggestion: ${t}`, color: "suggestion" },
                { text: " \xB7 /plugin", dim: !0 },
              ],
              priority: "low",
            }
          );
        },
      },
    ];
  });
