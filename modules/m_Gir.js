// Module: Gir (lines 279886-279909)
  var Gir = S(() => {
    Vn();
    pt();
    jir();
    N8e();
    Y5();
    T1e();
    Ar();
    N_e();
    si();
    Un();
    pFe = a_({
      kind: "fable_overage_consent_prompt",
      payload: Se(() =>
        v.object({
          overagesEnabled: v.boolean(),
          balanceCents: v.number().nullable().optional(),
          currency: v.string().nullable().optional(),
        }),
      ),
      result: Se(() => v.enum(["consent", "switch_default", "cancelled"])),
      default: "cancelled",
    });
  });
