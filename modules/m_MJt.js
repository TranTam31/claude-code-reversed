// Module: MJt (lines 126873-126933)
  var MJt = S(() => {
    bl();
    st();
    ((kkc = require("fs")),
      (DVe = require("path")),
      (Iog = ["ANTHROPIC_FEDERATION_RULE_ID", "ANTHROPIC_ORGANIZATION_ID"]),
      (pde = qr(() => {
        let e = $Yn(),
          t = process.env.ANTHROPIC_PROFILE?.trim();
        if (t) {
          if (e === null) return null;
          let r = V3i(e, t);
          return r === "oidc_federation" || r === "user_oauth"
            ? "profile-explicit"
            : null;
        }
        if (Iog.every((r) => process.env[r]?.trim())) return "env-quad";
        if (e !== null) {
          let r = V3i(e, NYn(e));
          if (r === "oidc_federation" || r === "user_oauth")
            return "profile-implicit";
        }
        return null;
      })));
    ((zWr = qr(() => {
      let e = pde();
      if (e === null) return null;
      if (e === "env-quad") return "oidc_federation";
      let t = $Yn();
      if (t === null) return null;
      let r =
          e === "profile-explicit"
            ? (process.env.ANTHROPIC_PROFILE?.trim() ?? "default")
            : NYn(t),
        n = V3i(t, r);
      return n === "oidc_federation" || n === "user_oauth" ? n : null;
    })),
      (Rog = qr(() => {
        let e = pde();
        if (e === null || e === "env-quad") return;
        let t = $Yn();
        if (t === null) return;
        let r =
            e === "profile-explicit"
              ? (process.env.ANTHROPIC_PROFILE?.trim() ?? "default")
              : NYn(t),
          n = qWr(Rkc(t, r));
        if (n === null) return;
        try {
          let o = JSON.parse(n);
          return {
            organizationUuid: o.organization_uuid,
            organizationName: o.organization_name,
            accountEmail: o.account_email,
            workspaceName: o.workspace_name,
          };
        } catch {
          return;
        }
      })));
  });
