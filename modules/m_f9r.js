// Module: f9r (lines 202965-203052)
  var f9r = S(() => {
    Mg();
    ((dts = $ue({
      command: Sa(),
      args: jN(Sa()).optional(),
      env: Y0e(Sa(), Sa()).optional(),
    })),
      (Suu = $ue({
        name: Sa(),
        email: Sa().email().optional(),
        url: Sa().url().optional(),
      })),
      (Euu = $ue({ type: Sa(), url: Sa().url() })),
      (vuu = dts.partial()),
      (Auu = dts.extend({ platform_overrides: Y0e(Sa(), vuu).optional() })),
      (wuu = $ue({
        type: X0e(["python", "node", "binary"]),
        entry_point: Sa(),
        mcp_config: Auu,
      })),
      (Tuu = $ue({
        claude_desktop: Sa().optional(),
        platforms: jN(X0e(["darwin", "win32", "linux"])).optional(),
        runtimes: $ue({
          python: Sa().optional(),
          node: Sa().optional(),
        }).optional(),
      }).passthrough()),
      (Cuu = $ue({ name: Sa(), description: Sa().optional() })),
      (xuu = $ue({
        name: Sa(),
        description: Sa().optional(),
        arguments: jN(Sa()).optional(),
        text: Sa(),
      })),
      (Huu = $ue({
        type: X0e(["string", "number", "boolean", "directory", "file"]),
        title: Sa(),
        description: Sa(),
        required: UG().optional(),
        default: rCt([Sa(), vye(), UG(), jN(Sa())]).optional(),
        multiple: UG().optional(),
        sensitive: UG().optional(),
        min: vye().optional(),
        max: vye().optional(),
      })),
      (E$g = Y0e(Sa(), rCt([Sa(), vye(), UG(), jN(Sa())]))),
      (p9r = $ue({
        $schema: Sa().optional(),
        dxt_version: Sa()
          .optional()
          .describe("@deprecated Use manifest_version instead"),
        manifest_version: Sa().optional(),
        name: Sa(),
        display_name: Sa().optional(),
        version: Sa(),
        description: Sa(),
        long_description: Sa().optional(),
        author: Suu,
        repository: Euu.optional(),
        homepage: Sa().url().optional(),
        documentation: Sa().url().optional(),
        support: Sa().url().optional(),
        icon: Sa().optional(),
        screenshots: jN(Sa()).optional(),
        server: wuu,
        tools: jN(Cuu).optional(),
        tools_generated: UG().optional(),
        prompts: jN(xuu).optional(),
        prompts_generated: UG().optional(),
        keywords: jN(Sa()).optional(),
        license: Sa().optional(),
        privacy_policies: jN(Sa()).optional(),
        compatibility: Tuu.optional(),
        user_config: Y0e(Sa(), Huu).optional(),
      }).refine((e) => !!(e.dxt_version || e.manifest_version), {
        message:
          "Either 'dxt_version' (deprecated) or 'manifest_version' must be provided",
      })),
      (v$g = $ue({
        status: X0e(["signed", "unsigned", "self-signed"]),
        publisher: Sa().optional(),
        issuer: Sa().optional(),
        valid_from: Sa().optional(),
        valid_to: Sa().optional(),
        fingerprint: Sa().optional(),
      })));
  });
