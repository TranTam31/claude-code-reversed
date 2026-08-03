// Module: Vys (lines 309138-309609)
  var Vys = S(() => {
    wki();
    MC();
    mRi();
    FKt();
    DWu();
    sLt = class sLt extends V2r {
      constructor(e, t) {
        super(t);
        if (
          ((this._clientInfo = e),
          (this._cachedToolOutputValidators = new Map()),
          (this._cachedKnownTaskTools = new Set()),
          (this._cachedRequiredTaskTools = new Set()),
          (this._listChangedDebounceTimers = new Map()),
          (this._capabilities = t?.capabilities ?? {}),
          (this._jsonSchemaValidator = t?.jsonSchemaValidator ?? new yBr()),
          t?.listChanged)
        )
          this._pendingListChangedConfig = t.listChanged;
      }
      _setupListChangedHandlers(e) {
        if (e.tools && this._serverCapabilities?.tools?.listChanged)
          this._setupListChangedHandler(
            "tools",
            NCt,
            e.tools,
            async () => (await this.listTools()).tools,
          );
        if (e.prompts && this._serverCapabilities?.prompts?.listChanged)
          this._setupListChangedHandler(
            "prompts",
            LCt,
            e.prompts,
            async () => (await this.listPrompts()).prompts,
          );
        if (e.resources && this._serverCapabilities?.resources?.listChanged)
          this._setupListChangedHandler(
            "resources",
            PCt,
            e.resources,
            async () => (await this.listResources()).resources,
          );
      }
      get experimental() {
        if (!this._experimental) this._experimental = { tasks: new Gys(this) };
        return this._experimental;
      }
      registerCapabilities(e) {
        if (this.transport)
          throw Error(
            "Cannot register capabilities after connecting to transport",
          );
        this._capabilities = j3n(this._capabilities, e);
      }
      setRequestHandler(e, t) {
        let n = POe(e)?.method;
        if (!n) throw Error("Schema is missing a method literal");
        let o;
        if (soe(n)) {
          let s = n;
          o = s._zod?.def?.value ?? s.value;
        } else {
          let s = n;
          o = s._def?.value ?? s.value;
        }
        if (typeof o !== "string")
          throw Error("Schema method literal must be a string");
        let i = o;
        if (i === "elicitation/create") {
          let s = async (a, l) => {
            let c = xQ(Vue, a);
            if (!c.success) {
              let _ =
                c.error instanceof Error ? c.error.message : String(c.error);
              throw new ys(
                xs.InvalidParams,
                `Invalid elicitation request: ${_}`,
              );
            }
            let { params: u } = c.data;
            u.mode = u.mode ?? "form";
            let { supportsFormMode: d, supportsUrlMode: p } = xfy(
              this._capabilities.elicitation,
            );
            if (u.mode === "form" && !d)
              throw new ys(
                xs.InvalidParams,
                "Client does not support form-mode elicitation requests",
              );
            if (u.mode === "url" && !p)
              throw new ys(
                xs.InvalidParams,
                "Client does not support URL-mode elicitation requests",
              );
            let f = await Promise.resolve(t(a, l));
            if (u.task) {
              let _ = xQ(C5e, f);
              if (!_.success) {
                let E =
                  _.error instanceof Error ? _.error.message : String(_.error);
                throw new ys(
                  xs.InvalidParams,
                  `Invalid task creation result: ${E}`,
                );
              }
              return _.data;
            }
            let m = xQ(mrt, f);
            if (!m.success) {
              let _ =
                m.error instanceof Error ? m.error.message : String(m.error);
              throw new ys(
                xs.InvalidParams,
                `Invalid elicitation result: ${_}`,
              );
            }
            let g = m.data,
              y = u.mode === "form" ? u.requestedSchema : void 0;
            if (u.mode === "form" && g.action === "accept" && g.content && y) {
              if (this._capabilities.elicitation?.form?.applyDefaults)
                try {
                  Mgo(y, g.content);
                } catch {}
            }
            return g;
          };
          return super.setRequestHandler(e, s);
        }
        if (i === "sampling/createMessage") {
          let s = async (a, l) => {
            let c = xQ(WHi, a);
            if (!c.success) {
              let g =
                c.error instanceof Error ? c.error.message : String(c.error);
              throw new ys(xs.InvalidParams, `Invalid sampling request: ${g}`);
            }
            let { params: u } = c.data,
              d = await Promise.resolve(t(a, l));
            if (u.task) {
              let g = xQ(C5e, d);
              if (!g.success) {
                let y =
                  g.error instanceof Error ? g.error.message : String(g.error);
                throw new ys(
                  xs.InvalidParams,
                  `Invalid task creation result: ${y}`,
                );
              }
              return g.data;
            }
            let f = u.tools || u.toolChoice ? B2r : $Ct,
              m = xQ(f, d);
            if (!m.success) {
              let g =
                m.error instanceof Error ? m.error.message : String(m.error);
              throw new ys(xs.InvalidParams, `Invalid sampling result: ${g}`);
            }
            return m.data;
          };
          return super.setRequestHandler(e, s);
        }
        return super.setRequestHandler(e, t);
      }
      assertCapability(e, t) {
        if (!this._serverCapabilities?.[e])
          throw Error(`Server does not support ${e} (required for ${t})`);
      }
      async connect(e, t) {
        if ((await super.connect(e), e.sessionId !== void 0)) return;
        try {
          let r = await this.request(
            {
              method: "initialize",
              params: {
                protocolVersion: frt,
                capabilities: this._capabilities,
                clientInfo: this._clientInfo,
              },
            },
            RCt,
            t,
          );
          if (r === void 0)
            throw Error(`Server sent invalid initialize result: ${r}`);
          if (!m3n.includes(r.protocolVersion))
            throw Error(
              `Server's protocol version is not supported: ${r.protocolVersion}`,
            );
          if (
            ((this._serverCapabilities = r.capabilities),
            (this._serverVersion = r.serverInfo),
            e.setProtocolVersion)
          )
            e.setProtocolVersion(r.protocolVersion);
          if (
            ((this._instructions = r.instructions),
            await this.notification({ method: "notifications/initialized" }),
            this._pendingListChangedConfig)
          )
            (this._setupListChangedHandlers(this._pendingListChangedConfig),
              (this._pendingListChangedConfig = void 0));
        } catch (r) {
          throw (this.close(), r);
        }
      }
      getServerCapabilities() {
        return this._serverCapabilities;
      }
      getServerVersion() {
        return this._serverVersion;
      }
      getInstructions() {
        return this._instructions;
      }
      assertCapabilityForMethod(e) {
        switch (e) {
          case "logging/setLevel":
            if (!this._serverCapabilities?.logging)
              throw Error(
                `Server does not support logging (required for ${e})`,
              );
            break;
          case "prompts/get":
          case "prompts/list":
            if (!this._serverCapabilities?.prompts)
              throw Error(
                `Server does not support prompts (required for ${e})`,
              );
            break;
          case "resources/list":
          case "resources/templates/list":
          case "resources/read":
          case "resources/subscribe":
          case "resources/unsubscribe":
            if (!this._serverCapabilities?.resources)
              throw Error(
                `Server does not support resources (required for ${e})`,
              );
            if (
              e === "resources/subscribe" &&
              !this._serverCapabilities.resources.subscribe
            )
              throw Error(
                `Server does not support resource subscriptions (required for ${e})`,
              );
            break;
          case "tools/call":
          case "tools/list":
            if (!this._serverCapabilities?.tools)
              throw Error(`Server does not support tools (required for ${e})`);
            break;
          case "completion/complete":
            if (!this._serverCapabilities?.completions)
              throw Error(
                `Server does not support completions (required for ${e})`,
              );
            break;
          case "initialize":
            break;
          case "ping":
            break;
        }
      }
      assertNotificationCapability(e) {
        switch (e) {
          case "notifications/roots/list_changed":
            if (!this._capabilities.roots?.listChanged)
              throw Error(
                `Client does not support roots list changed notifications (required for ${e})`,
              );
            break;
          case "notifications/initialized":
            break;
          case "notifications/cancelled":
            break;
          case "notifications/progress":
            break;
        }
      }
      assertRequestHandlerCapability(e) {
        if (!this._capabilities) return;
        switch (e) {
          case "sampling/createMessage":
            if (!this._capabilities.sampling)
              throw Error(
                `Client does not support sampling capability (required for ${e})`,
              );
            break;
          case "elicitation/create":
            if (!this._capabilities.elicitation)
              throw Error(
                `Client does not support elicitation capability (required for ${e})`,
              );
            break;
          case "roots/list":
            if (!this._capabilities.roots)
              throw Error(
                `Client does not support roots capability (required for ${e})`,
              );
            break;
          case "tasks/get":
          case "tasks/list":
          case "tasks/result":
          case "tasks/cancel":
            if (!this._capabilities.tasks)
              throw Error(
                `Client does not support tasks capability (required for ${e})`,
              );
            break;
          case "ping":
            break;
        }
      }
      assertTaskCapability(e) {
        Cjn(this._serverCapabilities?.tasks?.requests, e, "Server");
      }
      assertTaskHandlerCapability(e) {
        if (!this._capabilities) return;
        xjn(this._capabilities.tasks?.requests, e, "Client");
      }
      async ping(e) {
        return this.request({ method: "ping" }, T5e, e);
      }
      async complete(e, t) {
        return this.request(
          { method: "completion/complete", params: e },
          GHi,
          t,
        );
      }
      async setLoggingLevel(e, t) {
        return this.request(
          { method: "logging/setLevel", params: { level: e } },
          T5e,
          t,
        );
      }
      async getPrompt(e, t) {
        return this.request({ method: "prompts/get", params: e }, BHi, t);
      }
      async listPrompts(e, t) {
        return this.request({ method: "prompts/list", params: e }, MCt, t);
      }
      async listResources(e, t) {
        return this.request({ method: "resources/list", params: e }, aCe, t);
      }
      async listResourceTemplates(e, t) {
        return this.request(
          { method: "resources/templates/list", params: e },
          DCt,
          t,
        );
      }
      async readResource(e, t) {
        return this.request({ method: "resources/read", params: e }, OHi, t);
      }
      async subscribeResource(e, t) {
        return this.request(
          { method: "resources/subscribe", params: e },
          T5e,
          t,
        );
      }
      async unsubscribeResource(e, t) {
        return this.request(
          { method: "resources/unsubscribe", params: e },
          T5e,
          t,
        );
      }
      async callTool(e, t = zG, r) {
        if (this.isToolTaskRequired(e.name))
          throw new ys(
            xs.InvalidRequest,
            `Tool "${e.name}" requires task-based execution. Use client.experimental.tasks.callToolStream() instead.`,
          );
        let n = await this.request({ method: "tools/call", params: e }, t, r),
          o = this.getToolOutputValidator(e.name);
        if (o) {
          if (!n.structuredContent && !n.isError)
            throw new ys(
              xs.InvalidRequest,
              `Tool ${e.name} has an output schema but did not return structured content`,
            );
          if (n.structuredContent)
            try {
              let i = o(n.structuredContent);
              if (!i.valid)
                throw new ys(
                  xs.InvalidParams,
                  `Structured content does not match the tool's output schema: ${i.errorMessage}`,
                );
            } catch (i) {
              if (i instanceof ys) throw i;
              throw new ys(
                xs.InvalidParams,
                `Failed to validate structured content: ${i instanceof Error ? i.message : String(i)}`,
              );
            }
        }
        return n;
      }
      isToolTask(e) {
        if (!this._serverCapabilities?.tasks?.requests?.tools?.call) return !1;
        return this._cachedKnownTaskTools.has(e);
      }
      isToolTaskRequired(e) {
        return this._cachedRequiredTaskTools.has(e);
      }
      cacheToolMetadata(e) {
        (this._cachedToolOutputValidators.clear(),
          this._cachedKnownTaskTools.clear(),
          this._cachedRequiredTaskTools.clear());
        for (let t of e) {
          if (t.outputSchema) {
            let n = this._jsonSchemaValidator.getValidator(t.outputSchema);
            this._cachedToolOutputValidators.set(t.name, n);
          }
          let r = t.execution?.taskSupport;
          if (r === "required" || r === "optional")
            this._cachedKnownTaskTools.add(t.name);
          if (r === "required") this._cachedRequiredTaskTools.add(t.name);
        }
      }
      getToolOutputValidator(e) {
        return this._cachedToolOutputValidators.get(e);
      }
      async listTools(e, t) {
        let r = await this.request({ method: "tools/list", params: e }, OCt, t);
        return (this.cacheToolMetadata(r.tools), r);
      }
      _setupListChangedHandler(e, t, r, n) {
        let o = QOl.safeParse(r);
        if (!o.success)
          throw Error(`Invalid ${e} listChanged options: ${o.error.message}`);
        if (typeof r.onChanged !== "function")
          throw Error(
            `Invalid ${e} listChanged options: onChanged must be a function`,
          );
        let { autoRefresh: i, debounceMs: s } = o.data,
          { onChanged: a } = r,
          l = async () => {
            if (!i) {
              a(null, null);
              return;
            }
            try {
              let u = await n();
              a(null, u);
            } catch (u) {
              let d = u instanceof Error ? u : Error(String(u));
              a(d, null);
            }
          },
          c = () => {
            if (s) {
              let u = this._listChangedDebounceTimers.get(e);
              if (u) clearTimeout(u);
              let d = setTimeout(l, s);
              this._listChangedDebounceTimers.set(e, d);
            } else l();
          };
        this.setNotificationHandler(t, c);
      }
      async sendRootsListChanged() {
        return this.notification({
          method: "notifications/roots/list_changed",
        });
      }
    };
  });
