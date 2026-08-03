// Module: Zyu (lines 224802-224888)
  var Zyu = S(() => {
    Mg();
    ((Jyu = CQ({
      command: Sa(),
      args: jN(Sa()).optional(),
      env: Y0e(Sa(), Sa()).optional(),
    })),
      (OWg = CQ({
        name: Sa(),
        email: Sa().email().optional(),
        url: Sa().url().optional(),
      })),
      (NWg = CQ({ type: Sa(), url: Sa().url() })),
      ($Wg = Jyu.partial()),
      (FWg = Jyu.extend({ platform_overrides: Y0e(Sa(), $Wg).optional() })),
      (UWg = CQ({
        type: X0e(["python", "node", "binary"]),
        entry_point: Sa(),
        mcp_config: FWg,
      })),
      (BWg = CQ({
        claude_desktop: Sa().optional(),
        platforms: jN(X0e(["darwin", "win32", "linux"])).optional(),
        runtimes: CQ({
          python: Sa().optional(),
          node: Sa().optional(),
        }).optional(),
      }).passthrough()),
      (jWg = CQ({ name: Sa(), description: Sa().optional() })),
      (WWg = CQ({
        name: Sa(),
        description: Sa().optional(),
        arguments: jN(Sa()).optional(),
        text: Sa(),
      })),
      (GWg = CQ({
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
      (uVA = Y0e(Sa(), rCt([Sa(), vye(), UG(), jN(Sa())]))),
      (Qyu = CQ({
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
        author: OWg,
        repository: NWg.optional(),
        homepage: Sa().url().optional(),
        documentation: Sa().url().optional(),
        support: Sa().url().optional(),
        icon: Sa().optional(),
        screenshots: jN(Sa()).optional(),
        server: UWg,
        tools: jN(jWg).optional(),
        tools_generated: UG().optional(),
        prompts: jN(WWg).optional(),
        prompts_generated: UG().optional(),
        keywords: jN(Sa()).optional(),
        license: Sa().optional(),
        compatibility: BWg.optional(),
        user_config: Y0e(Sa(), GWg).optional(),
      }).refine((e) => !!(e.dxt_version || e.manifest_version), {
        message:
          "Either 'dxt_version' (deprecated) or 'manifest_version' must be provided",
      })),
      (dVA = CQ({
        status: X0e(["signed", "unsigned", "self-signed"]),
        publisher: Sa().optional(),
        issuer: Sa().optional(),
        valid_from: Sa().optional(),
        valid_to: Sa().optional(),
        fingerprint: Sa().optional(),
      })));
  });
