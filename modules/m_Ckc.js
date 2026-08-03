// Module: Ckc (lines 126695-126779)
  var Ckc = S(() => {
    U3i();
    j3i();
    W3i = {
      fromJSON(e) {
        return {
          event_id: dde(e.event_id) ? globalThis.String(e.event_id) : "",
          timestamp: dde(e.timestamp) ? Tkc(e.timestamp) : void 0,
          experiment_id: dde(e.experiment_id)
            ? globalThis.String(e.experiment_id)
            : "",
          variation_id: dde(e.variation_id)
            ? globalThis.Number(e.variation_id)
            : 0,
          environment: dde(e.environment)
            ? globalThis.String(e.environment)
            : "",
          user_attributes: dde(e.user_attributes)
            ? globalThis.String(e.user_attributes)
            : "",
          experiment_metadata: dde(e.experiment_metadata)
            ? globalThis.String(e.experiment_metadata)
            : "",
          device_id: dde(e.device_id) ? globalThis.String(e.device_id) : "",
          auth: dde(e.auth) ? RVe.fromJSON(e.auth) : void 0,
          session_id: dde(e.session_id) ? globalThis.String(e.session_id) : "",
          anonymous_id: dde(e.anonymous_id)
            ? globalThis.String(e.anonymous_id)
            : "",
          event_metadata_vars: dde(e.event_metadata_vars)
            ? globalThis.String(e.event_metadata_vars)
            : "",
          server_timestamp: dde(e.server_timestamp)
            ? Tkc(e.server_timestamp)
            : void 0,
        };
      },
      toJSON(e) {
        let t = {};
        if (e.event_id !== void 0) t.event_id = e.event_id;
        if (e.timestamp !== void 0) t.timestamp = e.timestamp.toISOString();
        if (e.experiment_id !== void 0) t.experiment_id = e.experiment_id;
        if (e.variation_id !== void 0)
          t.variation_id = Math.round(e.variation_id);
        if (e.environment !== void 0) t.environment = e.environment;
        if (e.user_attributes !== void 0) t.user_attributes = e.user_attributes;
        if (e.experiment_metadata !== void 0)
          t.experiment_metadata = e.experiment_metadata;
        if (e.device_id !== void 0) t.device_id = e.device_id;
        if (e.auth !== void 0) t.auth = RVe.toJSON(e.auth);
        if (e.session_id !== void 0) t.session_id = e.session_id;
        if (e.anonymous_id !== void 0) t.anonymous_id = e.anonymous_id;
        if (e.event_metadata_vars !== void 0)
          t.event_metadata_vars = e.event_metadata_vars;
        if (e.server_timestamp !== void 0)
          t.server_timestamp = e.server_timestamp.toISOString();
        return t;
      },
      create(e) {
        return W3i.fromPartial(e ?? {});
      },
      fromPartial(e) {
        let t = Hog();
        return (
          (t.event_id = e.event_id ?? ""),
          (t.timestamp = e.timestamp ?? void 0),
          (t.experiment_id = e.experiment_id ?? ""),
          (t.variation_id = e.variation_id ?? 0),
          (t.environment = e.environment ?? ""),
          (t.user_attributes = e.user_attributes ?? ""),
          (t.experiment_metadata = e.experiment_metadata ?? ""),
          (t.device_id = e.device_id ?? ""),
          (t.auth =
            e.auth !== void 0 && e.auth !== null
              ? RVe.fromPartial(e.auth)
              : void 0),
          (t.session_id = e.session_id ?? ""),
          (t.anonymous_id = e.anonymous_id ?? ""),
          (t.event_metadata_vars = e.event_metadata_vars ?? ""),
          (t.server_timestamp = e.server_timestamp ?? void 0),
          t
        );
      },
    };
  });
