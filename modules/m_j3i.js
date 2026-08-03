// Module: j3i (lines 126095-126129)
  var j3i = S(() => {
    RVe = {
      fromJSON(e) {
        return {
          account_id: B3i(e.account_id) ? globalThis.Number(e.account_id) : 0,
          organization_uuid: B3i(e.organization_uuid)
            ? globalThis.String(e.organization_uuid)
            : "",
          account_uuid: B3i(e.account_uuid)
            ? globalThis.String(e.account_uuid)
            : "",
        };
      },
      toJSON(e) {
        let t = {};
        if (e.account_id !== void 0) t.account_id = Math.round(e.account_id);
        if (e.organization_uuid !== void 0)
          t.organization_uuid = e.organization_uuid;
        if (e.account_uuid !== void 0) t.account_uuid = e.account_uuid;
        return t;
      },
      create(e) {
        return RVe.fromPartial(e ?? {});
      },
      fromPartial(e) {
        let t = vog();
        return (
          (t.account_id = e.account_id ?? 0),
          (t.organization_uuid = e.organization_uuid ?? ""),
          (t.account_uuid = e.account_uuid ?? ""),
          t
        );
      },
    };
  });
