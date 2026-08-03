// Module: cLt (lines 310142-310293)
  var cLt = S(() => {
    Vn();
    ((cz = uTi()
      .superRefine((e, t) => {
        if (!URL.canParse(e))
          return (
            t.addIssue({
              code: OTi.custom,
              message: "URL must be parseable",
              fatal: !0,
            }),
            t9t
          );
      })
      .refine(
        (e) => {
          let t = new URL(e);
          return (
            t.protocol !== "javascript:" &&
            t.protocol !== "data:" &&
            t.protocol !== "vbscript:"
          );
        },
        { message: "URL cannot use javascript:, data:, or vbscript: scheme" },
      )),
      (BWu = pB({
        resource: qn().url(),
        authorization_servers: sc(cz).optional(),
        jwks_uri: qn().url().optional(),
        scopes_supported: sc(qn()).optional(),
        bearer_methods_supported: sc(qn()).optional(),
        resource_signing_alg_values_supported: sc(qn()).optional(),
        resource_name: qn().optional(),
        resource_documentation: qn().optional(),
        resource_policy_uri: qn().url().optional(),
        resource_tos_uri: qn().url().optional(),
        tls_client_certificate_bound_access_tokens: RC().optional(),
        authorization_details_types_supported: sc(qn()).optional(),
        dpop_signing_alg_values_supported: sc(qn()).optional(),
        dpop_bound_access_tokens_required: RC().optional(),
      })),
      (lLt = pB({
        issuer: qn(),
        authorization_endpoint: cz,
        token_endpoint: cz,
        registration_endpoint: cz.optional(),
        scopes_supported: sc(qn()).optional(),
        response_types_supported: sc(qn()),
        response_modes_supported: sc(qn()).optional(),
        grant_types_supported: sc(qn()).optional(),
        token_endpoint_auth_methods_supported: sc(qn()).optional(),
        token_endpoint_auth_signing_alg_values_supported: sc(qn()).optional(),
        service_documentation: cz.optional(),
        revocation_endpoint: cz.optional(),
        revocation_endpoint_auth_methods_supported: sc(qn()).optional(),
        revocation_endpoint_auth_signing_alg_values_supported:
          sc(qn()).optional(),
        introspection_endpoint: qn().optional(),
        introspection_endpoint_auth_methods_supported: sc(qn()).optional(),
        introspection_endpoint_auth_signing_alg_values_supported:
          sc(qn()).optional(),
        code_challenge_methods_supported: sc(qn()).optional(),
        client_id_metadata_document_supported: RC().optional(),
      })),
      (Lfy = pB({
        issuer: qn(),
        authorization_endpoint: cz,
        token_endpoint: cz,
        userinfo_endpoint: cz.optional(),
        jwks_uri: cz,
        registration_endpoint: cz.optional(),
        scopes_supported: sc(qn()).optional(),
        response_types_supported: sc(qn()),
        response_modes_supported: sc(qn()).optional(),
        grant_types_supported: sc(qn()).optional(),
        acr_values_supported: sc(qn()).optional(),
        subject_types_supported: sc(qn()),
        id_token_signing_alg_values_supported: sc(qn()),
        id_token_encryption_alg_values_supported: sc(qn()).optional(),
        id_token_encryption_enc_values_supported: sc(qn()).optional(),
        userinfo_signing_alg_values_supported: sc(qn()).optional(),
        userinfo_encryption_alg_values_supported: sc(qn()).optional(),
        userinfo_encryption_enc_values_supported: sc(qn()).optional(),
        request_object_signing_alg_values_supported: sc(qn()).optional(),
        request_object_encryption_alg_values_supported: sc(qn()).optional(),
        request_object_encryption_enc_values_supported: sc(qn()).optional(),
        token_endpoint_auth_methods_supported: sc(qn()).optional(),
        token_endpoint_auth_signing_alg_values_supported: sc(qn()).optional(),
        display_values_supported: sc(qn()).optional(),
        claim_types_supported: sc(qn()).optional(),
        claims_supported: sc(qn()).optional(),
        service_documentation: qn().optional(),
        claims_locales_supported: sc(qn()).optional(),
        ui_locales_supported: sc(qn()).optional(),
        claims_parameter_supported: RC().optional(),
        request_parameter_supported: RC().optional(),
        request_uri_parameter_supported: RC().optional(),
        require_request_uri_registration: RC().optional(),
        op_policy_uri: cz.optional(),
        op_tos_uri: cz.optional(),
        client_id_metadata_document_supported: RC().optional(),
      })),
      (Rar = kc({
        ...Lfy.shape,
        ...lLt.pick({ code_challenge_methods_supported: !0 }).shape,
      })),
      (Dar = kc({
        access_token: qn(),
        id_token: qn().optional(),
        token_type: qn(),
        expires_in: RFr.number().optional(),
        scope: qn().optional(),
        refresh_token: qn().optional(),
      }).strip()),
      (Par = kc({
        error: qn(),
        error_description: qn().optional(),
        error_uri: qn().optional(),
      })),
      (UWu = cz.optional().or(
        qd("").transform(() => {
          return;
        }),
      )),
      (Ofy = kc({
        redirect_uris: sc(cz),
        token_endpoint_auth_method: qn().optional(),
        grant_types: sc(qn()).optional(),
        response_types: sc(qn()).optional(),
        client_name: qn().optional(),
        client_uri: cz.optional(),
        logo_uri: UWu,
        scope: qn().optional(),
        contacts: sc(qn()).optional(),
        tos_uri: UWu,
        policy_uri: qn().optional(),
        jwks_uri: cz.optional(),
        jwks: xTi().optional(),
        software_id: qn().optional(),
        software_version: qn().optional(),
        software_statement: qn().optional(),
      }).strip()),
      (Nfy = kc({
        client_id: qn(),
        client_secret: qn().optional(),
        client_id_issued_at: sv().optional(),
        client_secret_expires_at: sv().optional(),
      }).strip()),
      (jWu = Ofy.merge(Nfy)),
      (FPw = kc({ error: qn(), error_description: qn().optional() }).strip()),
      (UPw = kc({ token: qn(), token_type_hint: qn().optional() }).strip()));
  });
