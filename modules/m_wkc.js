// Module: wkc (lines 126229-126664)
  var wkc = S(() => {
    U3i();
    j3i();
    kYn = {
      fromJSON(e) {
        return {
          actor_id: lu(e.actor_id) ? globalThis.String(e.actor_id) : "",
          repository_id: lu(e.repository_id)
            ? globalThis.String(e.repository_id)
            : "",
          repository_owner_id: lu(e.repository_owner_id)
            ? globalThis.String(e.repository_owner_id)
            : "",
        };
      },
      toJSON(e) {
        let t = {};
        if (e.actor_id !== void 0) t.actor_id = e.actor_id;
        if (e.repository_id !== void 0) t.repository_id = e.repository_id;
        if (e.repository_owner_id !== void 0)
          t.repository_owner_id = e.repository_owner_id;
        return t;
      },
      create(e) {
        return kYn.fromPartial(e ?? {});
      },
      fromPartial(e) {
        let t = Aog();
        return (
          (t.actor_id = e.actor_id ?? ""),
          (t.repository_id = e.repository_id ?? ""),
          (t.repository_owner_id = e.repository_owner_id ?? ""),
          t
        );
      },
    };
    IYn = {
      fromJSON(e) {
        return {
          platform: lu(e.platform) ? globalThis.String(e.platform) : "",
          node_version: lu(e.node_version)
            ? globalThis.String(e.node_version)
            : "",
          terminal: lu(e.terminal) ? globalThis.String(e.terminal) : "",
          package_managers: lu(e.package_managers)
            ? globalThis.String(e.package_managers)
            : "",
          runtimes: lu(e.runtimes) ? globalThis.String(e.runtimes) : "",
          is_running_with_bun: lu(e.is_running_with_bun)
            ? globalThis.Boolean(e.is_running_with_bun)
            : !1,
          is_ci: lu(e.is_ci) ? globalThis.Boolean(e.is_ci) : !1,
          is_claubbit: lu(e.is_claubbit)
            ? globalThis.Boolean(e.is_claubbit)
            : !1,
          is_github_action: lu(e.is_github_action)
            ? globalThis.Boolean(e.is_github_action)
            : !1,
          is_claude_code_action: lu(e.is_claude_code_action)
            ? globalThis.Boolean(e.is_claude_code_action)
            : !1,
          is_claude_ai_auth: lu(e.is_claude_ai_auth)
            ? globalThis.Boolean(e.is_claude_ai_auth)
            : !1,
          version: lu(e.version) ? globalThis.String(e.version) : "",
          github_event_name: lu(e.github_event_name)
            ? globalThis.String(e.github_event_name)
            : "",
          github_actions_runner_environment: lu(
            e.github_actions_runner_environment,
          )
            ? globalThis.String(e.github_actions_runner_environment)
            : "",
          github_actions_runner_os: lu(e.github_actions_runner_os)
            ? globalThis.String(e.github_actions_runner_os)
            : "",
          github_action_ref: lu(e.github_action_ref)
            ? globalThis.String(e.github_action_ref)
            : "",
          wsl_version: lu(e.wsl_version)
            ? globalThis.String(e.wsl_version)
            : "",
          github_actions_metadata: lu(e.github_actions_metadata)
            ? kYn.fromJSON(e.github_actions_metadata)
            : void 0,
          arch: lu(e.arch) ? globalThis.String(e.arch) : "",
          is_claude_code_remote: lu(e.is_claude_code_remote)
            ? globalThis.Boolean(e.is_claude_code_remote)
            : !1,
          remote_environment_type: lu(e.remote_environment_type)
            ? globalThis.String(e.remote_environment_type)
            : "",
          claude_code_container_id: lu(e.claude_code_container_id)
            ? globalThis.String(e.claude_code_container_id)
            : "",
          claude_code_remote_session_id: lu(e.claude_code_remote_session_id)
            ? globalThis.String(e.claude_code_remote_session_id)
            : "",
          tags: globalThis.Array.isArray(e?.tags)
            ? e.tags.map((t) => globalThis.String(t))
            : [],
          deployment_environment: lu(e.deployment_environment)
            ? globalThis.String(e.deployment_environment)
            : "",
          is_conductor: lu(e.is_conductor)
            ? globalThis.Boolean(e.is_conductor)
            : !1,
          version_base: lu(e.version_base)
            ? globalThis.String(e.version_base)
            : "",
          coworker_type: lu(e.coworker_type)
            ? globalThis.String(e.coworker_type)
            : "",
          build_time: lu(e.build_time) ? globalThis.String(e.build_time) : "",
          is_local_agent_mode: lu(e.is_local_agent_mode)
            ? globalThis.Boolean(e.is_local_agent_mode)
            : !1,
          linux_distro_id: lu(e.linux_distro_id)
            ? globalThis.String(e.linux_distro_id)
            : "",
          linux_distro_version: lu(e.linux_distro_version)
            ? globalThis.String(e.linux_distro_version)
            : "",
          linux_kernel: lu(e.linux_kernel)
            ? globalThis.String(e.linux_kernel)
            : "",
          vcs: lu(e.vcs) ? globalThis.String(e.vcs) : "",
          platform_raw: lu(e.platform_raw)
            ? globalThis.String(e.platform_raw)
            : "",
          shell: lu(e.shell) ? globalThis.String(e.shell) : "",
        };
      },
      toJSON(e) {
        let t = {};
        if (e.platform !== void 0) t.platform = e.platform;
        if (e.node_version !== void 0) t.node_version = e.node_version;
        if (e.terminal !== void 0) t.terminal = e.terminal;
        if (e.package_managers !== void 0)
          t.package_managers = e.package_managers;
        if (e.runtimes !== void 0) t.runtimes = e.runtimes;
        if (e.is_running_with_bun !== void 0)
          t.is_running_with_bun = e.is_running_with_bun;
        if (e.is_ci !== void 0) t.is_ci = e.is_ci;
        if (e.is_claubbit !== void 0) t.is_claubbit = e.is_claubbit;
        if (e.is_github_action !== void 0)
          t.is_github_action = e.is_github_action;
        if (e.is_claude_code_action !== void 0)
          t.is_claude_code_action = e.is_claude_code_action;
        if (e.is_claude_ai_auth !== void 0)
          t.is_claude_ai_auth = e.is_claude_ai_auth;
        if (e.version !== void 0) t.version = e.version;
        if (e.github_event_name !== void 0)
          t.github_event_name = e.github_event_name;
        if (e.github_actions_runner_environment !== void 0)
          t.github_actions_runner_environment =
            e.github_actions_runner_environment;
        if (e.github_actions_runner_os !== void 0)
          t.github_actions_runner_os = e.github_actions_runner_os;
        if (e.github_action_ref !== void 0)
          t.github_action_ref = e.github_action_ref;
        if (e.wsl_version !== void 0) t.wsl_version = e.wsl_version;
        if (e.github_actions_metadata !== void 0)
          t.github_actions_metadata = kYn.toJSON(e.github_actions_metadata);
        if (e.arch !== void 0) t.arch = e.arch;
        if (e.is_claude_code_remote !== void 0)
          t.is_claude_code_remote = e.is_claude_code_remote;
        if (e.remote_environment_type !== void 0)
          t.remote_environment_type = e.remote_environment_type;
        if (e.claude_code_container_id !== void 0)
          t.claude_code_container_id = e.claude_code_container_id;
        if (e.claude_code_remote_session_id !== void 0)
          t.claude_code_remote_session_id = e.claude_code_remote_session_id;
        if (e.tags?.length) t.tags = e.tags;
        if (e.deployment_environment !== void 0)
          t.deployment_environment = e.deployment_environment;
        if (e.is_conductor !== void 0) t.is_conductor = e.is_conductor;
        if (e.version_base !== void 0) t.version_base = e.version_base;
        if (e.coworker_type !== void 0) t.coworker_type = e.coworker_type;
        if (e.build_time !== void 0) t.build_time = e.build_time;
        if (e.is_local_agent_mode !== void 0)
          t.is_local_agent_mode = e.is_local_agent_mode;
        if (e.linux_distro_id !== void 0) t.linux_distro_id = e.linux_distro_id;
        if (e.linux_distro_version !== void 0)
          t.linux_distro_version = e.linux_distro_version;
        if (e.linux_kernel !== void 0) t.linux_kernel = e.linux_kernel;
        if (e.vcs !== void 0) t.vcs = e.vcs;
        if (e.platform_raw !== void 0) t.platform_raw = e.platform_raw;
        if (e.shell !== void 0) t.shell = e.shell;
        return t;
      },
      create(e) {
        return IYn.fromPartial(e ?? {});
      },
      fromPartial(e) {
        let t = wog();
        return (
          (t.platform = e.platform ?? ""),
          (t.node_version = e.node_version ?? ""),
          (t.terminal = e.terminal ?? ""),
          (t.package_managers = e.package_managers ?? ""),
          (t.runtimes = e.runtimes ?? ""),
          (t.is_running_with_bun = e.is_running_with_bun ?? !1),
          (t.is_ci = e.is_ci ?? !1),
          (t.is_claubbit = e.is_claubbit ?? !1),
          (t.is_github_action = e.is_github_action ?? !1),
          (t.is_claude_code_action = e.is_claude_code_action ?? !1),
          (t.is_claude_ai_auth = e.is_claude_ai_auth ?? !1),
          (t.version = e.version ?? ""),
          (t.github_event_name = e.github_event_name ?? ""),
          (t.github_actions_runner_environment =
            e.github_actions_runner_environment ?? ""),
          (t.github_actions_runner_os = e.github_actions_runner_os ?? ""),
          (t.github_action_ref = e.github_action_ref ?? ""),
          (t.wsl_version = e.wsl_version ?? ""),
          (t.github_actions_metadata =
            e.github_actions_metadata !== void 0 &&
            e.github_actions_metadata !== null
              ? kYn.fromPartial(e.github_actions_metadata)
              : void 0),
          (t.arch = e.arch ?? ""),
          (t.is_claude_code_remote = e.is_claude_code_remote ?? !1),
          (t.remote_environment_type = e.remote_environment_type ?? ""),
          (t.claude_code_container_id = e.claude_code_container_id ?? ""),
          (t.claude_code_remote_session_id =
            e.claude_code_remote_session_id ?? ""),
          (t.tags = e.tags?.map((r) => r) || []),
          (t.deployment_environment = e.deployment_environment ?? ""),
          (t.is_conductor = e.is_conductor ?? !1),
          (t.version_base = e.version_base ?? ""),
          (t.coworker_type = e.coworker_type ?? ""),
          (t.build_time = e.build_time ?? ""),
          (t.is_local_agent_mode = e.is_local_agent_mode ?? !1),
          (t.linux_distro_id = e.linux_distro_id ?? ""),
          (t.linux_distro_version = e.linux_distro_version ?? ""),
          (t.linux_kernel = e.linux_kernel ?? ""),
          (t.vcs = e.vcs ?? ""),
          (t.platform_raw = e.platform_raw ?? ""),
          (t.shell = e.shell ?? ""),
          t
        );
      },
    };
    RYn = {
      fromJSON(e) {
        return {
          slack_team_id: lu(e.slack_team_id)
            ? globalThis.String(e.slack_team_id)
            : "",
          is_enterprise_install: lu(e.is_enterprise_install)
            ? globalThis.Boolean(e.is_enterprise_install)
            : !1,
          trigger: lu(e.trigger) ? globalThis.String(e.trigger) : "",
          creation_method: lu(e.creation_method)
            ? globalThis.String(e.creation_method)
            : "",
        };
      },
      toJSON(e) {
        let t = {};
        if (e.slack_team_id !== void 0) t.slack_team_id = e.slack_team_id;
        if (e.is_enterprise_install !== void 0)
          t.is_enterprise_install = e.is_enterprise_install;
        if (e.trigger !== void 0) t.trigger = e.trigger;
        if (e.creation_method !== void 0) t.creation_method = e.creation_method;
        return t;
      },
      create(e) {
        return RYn.fromPartial(e ?? {});
      },
      fromPartial(e) {
        let t = Tog();
        return (
          (t.slack_team_id = e.slack_team_id ?? ""),
          (t.is_enterprise_install = e.is_enterprise_install ?? !1),
          (t.trigger = e.trigger ?? ""),
          (t.creation_method = e.creation_method ?? ""),
          t
        );
      },
    };
    DYn = {
      fromJSON(e) {
        return {
          event_name: lu(e.event_name) ? globalThis.String(e.event_name) : "",
          client_timestamp: lu(e.client_timestamp)
            ? Akc(e.client_timestamp)
            : void 0,
          model: lu(e.model) ? globalThis.String(e.model) : "",
          session_id: lu(e.session_id) ? globalThis.String(e.session_id) : "",
          user_type: lu(e.user_type) ? globalThis.String(e.user_type) : "",
          betas: lu(e.betas) ? globalThis.String(e.betas) : "",
          env: lu(e.env) ? IYn.fromJSON(e.env) : void 0,
          entrypoint: lu(e.entrypoint) ? globalThis.String(e.entrypoint) : "",
          agent_sdk_version: lu(e.agent_sdk_version)
            ? globalThis.String(e.agent_sdk_version)
            : "",
          is_interactive: lu(e.is_interactive)
            ? globalThis.Boolean(e.is_interactive)
            : !1,
          client_type: lu(e.client_type)
            ? globalThis.String(e.client_type)
            : "",
          process: lu(e.process) ? globalThis.String(e.process) : "",
          additional_metadata: lu(e.additional_metadata)
            ? globalThis.String(e.additional_metadata)
            : "",
          auth: lu(e.auth) ? RVe.fromJSON(e.auth) : void 0,
          server_timestamp: lu(e.server_timestamp)
            ? Akc(e.server_timestamp)
            : void 0,
          event_id: lu(e.event_id) ? globalThis.String(e.event_id) : "",
          device_id: lu(e.device_id) ? globalThis.String(e.device_id) : "",
          swe_bench_run_id: lu(e.swe_bench_run_id)
            ? globalThis.String(e.swe_bench_run_id)
            : "",
          swe_bench_instance_id: lu(e.swe_bench_instance_id)
            ? globalThis.String(e.swe_bench_instance_id)
            : "",
          swe_bench_task_id: lu(e.swe_bench_task_id)
            ? globalThis.String(e.swe_bench_task_id)
            : "",
          email: lu(e.email) ? globalThis.String(e.email) : "",
          agent_id: lu(e.agent_id) ? globalThis.String(e.agent_id) : "",
          parent_session_id: lu(e.parent_session_id)
            ? globalThis.String(e.parent_session_id)
            : "",
          agent_type: lu(e.agent_type) ? globalThis.String(e.agent_type) : "",
          slack: lu(e.slack) ? RYn.fromJSON(e.slack) : void 0,
          team_name: lu(e.team_name) ? globalThis.String(e.team_name) : "",
          skill_name: lu(e.skill_name) ? globalThis.String(e.skill_name) : "",
          plugin_name: lu(e.plugin_name)
            ? globalThis.String(e.plugin_name)
            : "",
          marketplace_name: lu(e.marketplace_name)
            ? globalThis.String(e.marketplace_name)
            : "",
          repl_code: lu(e.repl_code) ? globalThis.String(e.repl_code) : "",
          head_sha: lu(e.head_sha) ? globalThis.String(e.head_sha) : "",
        };
      },
      toJSON(e) {
        let t = {};
        if (e.event_name !== void 0) t.event_name = e.event_name;
        if (e.client_timestamp !== void 0)
          t.client_timestamp = e.client_timestamp.toISOString();
        if (e.model !== void 0) t.model = e.model;
        if (e.session_id !== void 0) t.session_id = e.session_id;
        if (e.user_type !== void 0) t.user_type = e.user_type;
        if (e.betas !== void 0) t.betas = e.betas;
        if (e.env !== void 0) t.env = IYn.toJSON(e.env);
        if (e.entrypoint !== void 0) t.entrypoint = e.entrypoint;
        if (e.agent_sdk_version !== void 0)
          t.agent_sdk_version = e.agent_sdk_version;
        if (e.is_interactive !== void 0) t.is_interactive = e.is_interactive;
        if (e.client_type !== void 0) t.client_type = e.client_type;
        if (e.process !== void 0) t.process = e.process;
        if (e.additional_metadata !== void 0)
          t.additional_metadata = e.additional_metadata;
        if (e.auth !== void 0) t.auth = RVe.toJSON(e.auth);
        if (e.server_timestamp !== void 0)
          t.server_timestamp = e.server_timestamp.toISOString();
        if (e.event_id !== void 0) t.event_id = e.event_id;
        if (e.device_id !== void 0) t.device_id = e.device_id;
        if (e.swe_bench_run_id !== void 0)
          t.swe_bench_run_id = e.swe_bench_run_id;
        if (e.swe_bench_instance_id !== void 0)
          t.swe_bench_instance_id = e.swe_bench_instance_id;
        if (e.swe_bench_task_id !== void 0)
          t.swe_bench_task_id = e.swe_bench_task_id;
        if (e.email !== void 0) t.email = e.email;
        if (e.agent_id !== void 0) t.agent_id = e.agent_id;
        if (e.parent_session_id !== void 0)
          t.parent_session_id = e.parent_session_id;
        if (e.agent_type !== void 0) t.agent_type = e.agent_type;
        if (e.slack !== void 0) t.slack = RYn.toJSON(e.slack);
        if (e.team_name !== void 0) t.team_name = e.team_name;
        if (e.skill_name !== void 0) t.skill_name = e.skill_name;
        if (e.plugin_name !== void 0) t.plugin_name = e.plugin_name;
        if (e.marketplace_name !== void 0)
          t.marketplace_name = e.marketplace_name;
        if (e.repl_code !== void 0) t.repl_code = e.repl_code;
        if (e.head_sha !== void 0) t.head_sha = e.head_sha;
        return t;
      },
      create(e) {
        return DYn.fromPartial(e ?? {});
      },
      fromPartial(e) {
        let t = Cog();
        return (
          (t.event_name = e.event_name ?? ""),
          (t.client_timestamp = e.client_timestamp ?? void 0),
          (t.model = e.model ?? ""),
          (t.session_id = e.session_id ?? ""),
          (t.user_type = e.user_type ?? ""),
          (t.betas = e.betas ?? ""),
          (t.env =
            e.env !== void 0 && e.env !== null
              ? IYn.fromPartial(e.env)
              : void 0),
          (t.entrypoint = e.entrypoint ?? ""),
          (t.agent_sdk_version = e.agent_sdk_version ?? ""),
          (t.is_interactive = e.is_interactive ?? !1),
          (t.client_type = e.client_type ?? ""),
          (t.process = e.process ?? ""),
          (t.additional_metadata = e.additional_metadata ?? ""),
          (t.auth =
            e.auth !== void 0 && e.auth !== null
              ? RVe.fromPartial(e.auth)
              : void 0),
          (t.server_timestamp = e.server_timestamp ?? void 0),
          (t.event_id = e.event_id ?? ""),
          (t.device_id = e.device_id ?? ""),
          (t.swe_bench_run_id = e.swe_bench_run_id ?? ""),
          (t.swe_bench_instance_id = e.swe_bench_instance_id ?? ""),
          (t.swe_bench_task_id = e.swe_bench_task_id ?? ""),
          (t.email = e.email ?? ""),
          (t.agent_id = e.agent_id ?? ""),
          (t.parent_session_id = e.parent_session_id ?? ""),
          (t.agent_type = e.agent_type ?? ""),
          (t.slack =
            e.slack !== void 0 && e.slack !== null
              ? RYn.fromPartial(e.slack)
              : void 0),
          (t.team_name = e.team_name ?? ""),
          (t.skill_name = e.skill_name ?? ""),
          (t.plugin_name = e.plugin_name ?? ""),
          (t.marketplace_name = e.marketplace_name ?? ""),
          (t.repl_code = e.repl_code ?? ""),
          (t.head_sha = e.head_sha ?? ""),
          t
        );
      },
    };
  });
