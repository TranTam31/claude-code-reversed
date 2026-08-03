// Module: dxd (lines 481665-481806)
  var dxd = S(() => {
    Vn();
    ((tIo = {
      list_design_systems: { readOnly: !0, destructive: !1 },
      get_claude_design_prompt: { readOnly: !0, destructive: !1 },
      list_projects: { readOnly: !0, destructive: !1 },
      get_project: { readOnly: !0, destructive: !1 },
      list_files: { readOnly: !0, destructive: !1 },
      read_file: { readOnly: !0, destructive: !1 },
      get_conversation: { readOnly: !0, destructive: !1 },
      list_members: { readOnly: !0, destructive: !1 },
      render_preview: { readOnly: !1, destructive: !1 },
      create_project: { readOnly: !1, destructive: !1 },
      put_conversation: { readOnly: !1, destructive: !1 },
      finalize_plan: { readOnly: !1, destructive: !1 },
      write_files: { readOnly: !1, destructive: !1 },
      copy_files: { readOnly: !1, destructive: !1 },
      create_support_js: { readOnly: !1, destructive: !1 },
      add_member: { readOnly: !1, destructive: !1 },
      delete_files: { readOnly: !1, destructive: !0 },
      remove_member: { readOnly: !1, destructive: !0 },
      update_member_role: { readOnly: !1, destructive: !0 },
      update_sharing: { readOnly: !1, destructive: !0 },
    }),
      (rIo = {
        create_project: { top: new Set(["name", "design_system_id"]) },
        put_conversation: {
          top: new Set(["project_id", "title", "messages"]),
          arrays: {
            messages: {
              fields: new Set(["role", "content"]),
              required: new Set(["role", "content"]),
            },
          },
        },
        finalize_plan: {
          top: new Set(["project_id", "writes", "deletes", "scope"]),
          arrays: { writes: "string", deletes: "string" },
          scalarEnums: { scope: new Set(["paths", "project"]) },
        },
        write_files: {
          top: new Set(["project_id", "plan_token", "files"]),
          arrays: {
            files: {
              fields: new Set([
                "path",
                "data",
                "local_path",
                "encoding",
                "if_match",
              ]),
              required: new Set(["path"]),
            },
          },
        },
        delete_files: {
          top: new Set(["project_id", "plan_token", "paths", "files"]),
          arrays: {
            paths: "string",
            files: {
              fields: new Set(["path", "if_match"]),
              required: new Set(["path"]),
            },
          },
        },
        copy_files: {
          top: new Set(["project_id", "plan_token", "files"]),
          arrays: {
            files: {
              fields: new Set(["src", "dest", "src_project_id", "if_match"]),
              required: new Set(["src", "dest"]),
            },
          },
        },
        render_preview: {
          top: new Set(["project_id", "path", "render", "validators"]),
          arrays: { validators: "string" },
        },
        create_support_js: {
          top: new Set(["project_id", "plan_token", "path", "if_match"]),
        },
        add_member: {
          top: new Set(["project_id", "account_uuid", "email", "role"]),
          scalarEnums: {
            role: {
              accepts: new Set(["viewer", "commenter", "editor"]),
              serverNormalizes: !0,
            },
          },
        },
        update_member_role: {
          top: new Set(["project_id", "account_uuid", "role"]),
          scalarEnums: {
            role: {
              accepts: new Set(["viewer", "commenter", "editor"]),
              serverNormalizes: !0,
            },
          },
        },
        remove_member: { top: new Set(["project_id", "account_uuid"]) },
        update_sharing: {
          top: new Set(["project_id", "scope", "link_permission"]),
          scalarEnums: {
            scope: {
              accepts: new Set(["invited", "org"]),
              serverNormalizes: !0,
            },
            link_permission: {
              accepts: new Set(["view", "comment", "edit"]),
              serverNormalizes: !0,
            },
          },
        },
      }),
      (nIo = {
        list: { top: new Set(["full"]) },
        list_design_systems: { top: new Set() },
        get_claude_design_prompt: {
          top: new Set(["design_system_id", "project_id"]),
        },
        list_projects: { top: new Set() },
        get_project: { top: new Set(["project_id"]) },
        list_files: { top: new Set(["project_id", "path"]) },
        read_file: { top: new Set(["project_id", "path"]) },
        get_conversation: { top: new Set(["project_id", "chat_id"]) },
        list_members: { top: new Set(["project_id"]) },
      }));
    ((rYy = Se(() =>
      v.looseObject({
        name: v.string(),
        description: v.string().optional(),
        inputSchema: v.unknown().optional(),
        annotations: v
          .looseObject({
            readOnlyHint: v.boolean().optional(),
            destructiveHint: v.boolean().optional(),
          })
          .optional(),
      }),
    )),
      (oIo = new Map()));
  });
