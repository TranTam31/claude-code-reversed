// Module: _Br (lines 50273-50659)
  var _Br = S(() => {
    wki();
    MC();
    mRi();
    FKt();
    LFl();
    R5e = class R5e extends V2r {
      constructor(e, t) {
        super(t);
        if (
          ((this._serverInfo = e),
          (this._loggingLevels = new Map()),
          (this.LOG_LEVEL_SEVERITY = new Map(
            U2r.options.map((r, n) => [r, n]),
          )),
          (this.isMessageIgnored = (r, n) => {
            let o = this._loggingLevels.get(n);
            return o
              ? this.LOG_LEVEL_SEVERITY.get(r) < this.LOG_LEVEL_SEVERITY.get(o)
              : !1;
          }),
          (this._capabilities = t?.capabilities ?? {}),
          (this._instructions = t?.instructions),
          (this._jsonSchemaValidator = t?.jsonSchemaValidator ?? new yBr()),
          this.setRequestHandler(PHi, (r) => this._oninitialize(r)),
          this.setNotificationHandler(_3n, () => this.oninitialized?.()),
          this._capabilities.logging)
        )
          this.setRequestHandler(jHi, async (r, n) => {
            let o =
                n.sessionId ||
                n.requestInfo?.headers["mcp-session-id"] ||
                void 0,
              { level: i } = r.params,
              s = U2r.safeParse(i);
            if (s.success) this._loggingLevels.set(o, s.data);
            return {};
          });
      }
      get experimental() {
        if (!this._experimental) this._experimental = { tasks: new hRi(this) };
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
        if (o === "tools/call") {
          let s = async (a, l) => {
            let c = xQ(Gue, a);
            if (!c.success) {
              let f =
                c.error instanceof Error ? c.error.message : String(c.error);
              throw new ys(
                xs.InvalidParams,
                `Invalid tools/call request: ${f}`,
              );
            }
            let { params: u } = c.data,
              d = await Promise.resolve(t(a, l));
            if (u.task) {
              let f = xQ(C5e, d);
              if (!f.success) {
                let m =
                  f.error instanceof Error ? f.error.message : String(f.error);
                throw new ys(
                  xs.InvalidParams,
                  `Invalid task creation result: ${m}`,
                );
              }
              return f.data;
            }
            let p = xQ(zG, d);
            if (!p.success) {
              let f =
                p.error instanceof Error ? p.error.message : String(p.error);
              throw new ys(xs.InvalidParams, `Invalid tools/call result: ${f}`);
            }
            return p.data;
          };
          return super.setRequestHandler(e, s);
        }
        return super.setRequestHandler(e, t);
      }
      assertCapabilityForMethod(e) {
        switch (e) {
          case "sampling/createMessage":
            if (!this._clientCapabilities?.sampling)
              throw Error(
                `Client does not support sampling (required for ${e})`,
              );
            break;
          case "elicitation/create":
            if (!this._clientCapabilities?.elicitation)
              throw Error(
                `Client does not support elicitation (required for ${e})`,
              );
            break;
          case "roots/list":
            if (!this._clientCapabilities?.roots)
              throw Error(
                `Client does not support listing roots (required for ${e})`,
              );
            break;
          case "ping":
            break;
        }
      }
      assertNotificationCapability(e) {
        switch (e) {
          case "notifications/message":
            if (!this._capabilities.logging)
              throw Error(
                `Server does not support logging (required for ${e})`,
              );
            break;
          case "notifications/resources/updated":
          case "notifications/resources/list_changed":
            if (!this._capabilities.resources)
              throw Error(
                `Server does not support notifying about resources (required for ${e})`,
              );
            break;
          case "notifications/tools/list_changed":
            if (!this._capabilities.tools)
              throw Error(
                `Server does not support notifying of tool list changes (required for ${e})`,
              );
            break;
          case "notifications/prompts/list_changed":
            if (!this._capabilities.prompts)
              throw Error(
                `Server does not support notifying of prompt list changes (required for ${e})`,
              );
            break;
          case "notifications/elicitation/complete":
            if (!this._clientCapabilities?.elicitation?.url)
              throw Error(
                `Client does not support URL elicitation (required for ${e})`,
              );
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
          case "completion/complete":
            if (!this._capabilities.completions)
              throw Error(
                `Server does not support completions (required for ${e})`,
              );
            break;
          case "logging/setLevel":
            if (!this._capabilities.logging)
              throw Error(
                `Server does not support logging (required for ${e})`,
              );
            break;
          case "prompts/get":
          case "prompts/list":
            if (!this._capabilities.prompts)
              throw Error(
                `Server does not support prompts (required for ${e})`,
              );
            break;
          case "resources/list":
          case "resources/templates/list":
          case "resources/read":
            if (!this._capabilities.resources)
              throw Error(
                `Server does not support resources (required for ${e})`,
              );
            break;
          case "tools/call":
          case "tools/list":
            if (!this._capabilities.tools)
              throw Error(`Server does not support tools (required for ${e})`);
            break;
          case "tasks/get":
          case "tasks/list":
          case "tasks/result":
          case "tasks/cancel":
            if (!this._capabilities.tasks)
              throw Error(
                `Server does not support tasks capability (required for ${e})`,
              );
            break;
          case "ping":
          case "initialize":
            break;
        }
      }
      assertTaskCapability(e) {
        xjn(this._clientCapabilities?.tasks?.requests, e, "Client");
      }
      assertTaskHandlerCapability(e) {
        if (!this._capabilities) return;
        Cjn(this._capabilities.tasks?.requests, e, "Server");
      }
      async _oninitialize(e) {
        let t = e.params.protocolVersion;
        return (
          (this._clientCapabilities = e.params.capabilities),
          (this._clientVersion = e.params.clientInfo),
          {
            protocolVersion: m3n.includes(t) ? t : frt,
            capabilities: this.getCapabilities(),
            serverInfo: this._serverInfo,
            ...(this._instructions && { instructions: this._instructions }),
          }
        );
      }
      getClientCapabilities() {
        return this._clientCapabilities;
      }
      getClientVersion() {
        return this._clientVersion;
      }
      getCapabilities() {
        return this._capabilities;
      }
      async ping() {
        return this.request({ method: "ping" }, T5e);
      }
      async createMessage(e, t) {
        if (e.tools || e.toolChoice) {
          if (!this._clientCapabilities?.sampling?.tools)
            throw Error("Client does not support sampling tools capability.");
        }
        if (e.messages.length > 0) {
          let r = e.messages[e.messages.length - 1],
            n = Array.isArray(r.content) ? r.content : [r.content],
            o = n.some((l) => l.type === "tool_result"),
            i =
              e.messages.length > 1
                ? e.messages[e.messages.length - 2]
                : void 0,
            s = i ? (Array.isArray(i.content) ? i.content : [i.content]) : [],
            a = s.some((l) => l.type === "tool_use");
          if (o) {
            if (n.some((l) => l.type !== "tool_result"))
              throw Error(
                "The last message must contain only tool_result content if any is present",
              );
            if (!a)
              throw Error(
                "tool_result blocks are not matching any tool_use from the previous message",
              );
          }
          if (a) {
            let l = new Set(
                s.filter((u) => u.type === "tool_use").map((u) => u.id),
              ),
              c = new Set(
                n
                  .filter((u) => u.type === "tool_result")
                  .map((u) => u.toolUseId),
              );
            if (l.size !== c.size || ![...l].every((u) => c.has(u)))
              throw Error(
                "ids of tool_result blocks and tool_use blocks from previous message do not match",
              );
          }
        }
        if (e.tools)
          return this.request(
            { method: "sampling/createMessage", params: e },
            B2r,
            t,
          );
        return this.request(
          { method: "sampling/createMessage", params: e },
          $Ct,
          t,
        );
      }
      async elicitInput(e, t) {
        switch (e.mode ?? "form") {
          case "url": {
            if (!this._clientCapabilities?.elicitation?.url)
              throw Error("Client does not support url elicitation.");
            let n = e;
            return this.request(
              { method: "elicitation/create", params: n },
              mrt,
              t,
            );
          }
          case "form": {
            if (!this._clientCapabilities?.elicitation?.form)
              throw Error("Client does not support form elicitation.");
            let n = e.mode === "form" ? e : { ...e, mode: "form" },
              o = await this.request(
                { method: "elicitation/create", params: n },
                mrt,
                t,
              );
            if (o.action === "accept" && o.content && n.requestedSchema)
              try {
                let s = this._jsonSchemaValidator.getValidator(
                  n.requestedSchema,
                )(o.content);
                if (!s.valid)
                  throw new ys(
                    xs.InvalidParams,
                    `Elicitation response content does not match requested schema: ${s.errorMessage}`,
                  );
              } catch (i) {
                if (i instanceof ys) throw i;
                throw new ys(
                  xs.InternalError,
                  `Error validating elicitation response: ${i instanceof Error ? i.message : String(i)}`,
                );
              }
            return o;
          }
        }
      }
      createElicitationCompletionNotifier(e, t) {
        if (!this._clientCapabilities?.elicitation?.url)
          throw Error(
            "Client does not support URL elicitation (required for notifications/elicitation/complete)",
          );
        return () =>
          this.notification(
            {
              method: "notifications/elicitation/complete",
              params: { elicitationId: e },
            },
            t,
          );
      }
      async listRoots(e, t) {
        return this.request({ method: "roots/list", params: e }, VHi, t);
      }
      async sendLoggingMessage(e, t) {
        if (this._capabilities.logging) {
          if (!this.isMessageIgnored(e.level, t))
            return this.notification({
              method: "notifications/message",
              params: e,
            });
        }
      }
      async sendResourceUpdated(e) {
        return this.notification({
          method: "notifications/resources/updated",
          params: e,
        });
      }
      async sendResourceListChanged() {
        return this.notification({
          method: "notifications/resources/list_changed",
        });
      }
      async sendToolListChanged() {
        return this.notification({
          method: "notifications/tools/list_changed",
        });
      }
      async sendPromptListChanged() {
        return this.notification({
          method: "notifications/prompts/list_changed",
        });
      }
    };
  });
