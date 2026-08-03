// Module: MC (lines 40894-41482)
  var MC = S(() => {
    Vn();
    ((m3n = [frt, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"]),
      (oj = LTi(
        (e) => e !== null && (typeof e === "object" || typeof e === "function"),
      )),
      ($Ol = Bx([qn(), sv().int()])),
      (FOl = qn()),
      (n4E = pB({ ttl: sv().optional(), pollInterval: sv().optional() })),
      (Hfh = kc({ ttl: sv().optional() })),
      (P2r = kc({ taskId: qn() })),
      (IHi = pB({ progressToken: $Ol.optional(), [Iye]: P2r.optional() })),
      (Wue = kc({ _meta: IHi.optional() })),
      (M2r = Wue.extend({ task: Hfh.optional() })),
      (Sq = kc({ method: qn(), params: Wue.loose().optional() })),
      (Rye = kc({ _meta: IHi.optional() })),
      (Dye = kc({ method: qn(), params: Rye.loose().optional() })),
      (Eq = pB({ _meta: IHi.optional() })),
      (g3n = Bx([qn(), sv().int()])),
      (BOl = kc({ jsonrpc: qd(h3n), id: g3n, ...Sq.shape }).strict()),
      (jOl = kc({ jsonrpc: qd(h3n), ...Dye.shape }).strict()),
      (RHi = kc({ jsonrpc: qd(h3n), id: g3n, result: Eq }).strict()));
    (function (e) {
      ((e[(e.ConnectionClosed = -32000)] = "ConnectionClosed"),
        (e[(e.RequestTimeout = -32001)] = "RequestTimeout"),
        (e[(e.ParseError = -32700)] = "ParseError"),
        (e[(e.InvalidRequest = -32600)] = "InvalidRequest"),
        (e[(e.MethodNotFound = -32601)] = "MethodNotFound"),
        (e[(e.InvalidParams = -32602)] = "InvalidParams"),
        (e[(e.InternalError = -32603)] = "InternalError"),
        (e[(e.UrlElicitationRequired = -32042)] = "UrlElicitationRequired"));
    })(xs || (xs = {}));
    ((DHi = kc({
      jsonrpc: qd(h3n),
      id: g3n.optional(),
      error: kc({ code: sv().int(), message: qn(), data: uD().optional() }),
    }).strict()),
      (aoe = Bx([BOl, jOl, RHi, DHi])),
      (o4E = Bx([RHi, DHi])),
      (T5e = Eq.strict()),
      (kfh = Rye.extend({
        requestId: g3n.optional(),
        reason: qn().optional(),
      })),
      (y3n = Dye.extend({
        method: qd("notifications/cancelled"),
        params: kfh,
      })),
      (Ifh = kc({
        src: qn(),
        mimeType: qn().optional(),
        sizes: sc(qn()).optional(),
        theme: bQ(["light", "dark"]).optional(),
      })),
      (L2r = kc({ icons: sc(Ifh).optional() })),
      (UKt = kc({ name: qn(), title: qn().optional() })),
      (GOl = UKt.extend({
        ...UKt.shape,
        ...L2r.shape,
        version: qn(),
        websiteUrl: qn().optional(),
        description: qn().optional(),
      })),
      (Rfh = IFr(kc({ applyDefaults: RC().optional() }), jx(qn(), uD()))),
      (Dfh = J2n(
        (e) => {
          if (e && typeof e === "object" && !Array.isArray(e)) {
            if (Object.keys(e).length === 0) return { form: {} };
          }
          return e;
        },
        IFr(
          kc({ form: Rfh.optional(), url: oj.optional() }),
          jx(qn(), uD()).optional(),
        ),
      )),
      (Pfh = pB({
        list: oj.optional(),
        cancel: oj.optional(),
        requests: pB({
          sampling: pB({ createMessage: oj.optional() }).optional(),
          elicitation: pB({ create: oj.optional() }).optional(),
        }).optional(),
      })),
      (Mfh = pB({
        list: oj.optional(),
        cancel: oj.optional(),
        requests: pB({
          tools: pB({ call: oj.optional() }).optional(),
        }).optional(),
      })),
      (Lfh = kc({
        experimental: jx(qn(), oj).optional(),
        sampling: kc({
          context: oj.optional(),
          tools: oj.optional(),
        }).optional(),
        elicitation: Dfh.optional(),
        roots: kc({ listChanged: RC().optional() }).optional(),
        tasks: Pfh.optional(),
        extensions: jx(qn(), oj).optional(),
      })),
      (Ofh = Wue.extend({
        protocolVersion: qn(),
        capabilities: Lfh,
        clientInfo: GOl,
      })),
      (PHi = Sq.extend({ method: qd("initialize"), params: Ofh })),
      (Nfh = kc({
        experimental: jx(qn(), oj).optional(),
        logging: oj.optional(),
        completions: oj.optional(),
        prompts: kc({ listChanged: RC().optional() }).optional(),
        resources: kc({
          subscribe: RC().optional(),
          listChanged: RC().optional(),
        }).optional(),
        tools: kc({ listChanged: RC().optional() }).optional(),
        tasks: Mfh.optional(),
        extensions: jx(qn(), oj).optional(),
      })),
      (RCt = Eq.extend({
        protocolVersion: qn(),
        capabilities: Nfh,
        serverInfo: GOl,
        instructions: qn().optional(),
      })),
      (_3n = Dye.extend({
        method: qd("notifications/initialized"),
        params: Rye.optional(),
      })),
      (b3n = Sq.extend({ method: qd("ping"), params: Wue.optional() })),
      ($fh = kc({ progress: sv(), total: xI(sv()), message: xI(qn()) })),
      (Ffh = kc({ ...Rye.shape, ...$fh.shape, progressToken: $Ol })),
      (S3n = Dye.extend({ method: qd("notifications/progress"), params: Ffh })),
      (Ufh = Wue.extend({ cursor: FOl.optional() })),
      (O2r = Sq.extend({ params: Ufh.optional() })),
      (N2r = Eq.extend({ nextCursor: FOl.optional() })),
      (Bfh = bQ([
        "working",
        "input_required",
        "completed",
        "failed",
        "cancelled",
      ])),
      ($2r = kc({
        taskId: qn(),
        status: Bfh,
        ttl: Bx([sv(), V2n()]),
        createdAt: qn(),
        lastUpdatedAt: qn(),
        pollInterval: xI(sv()),
        statusMessage: xI(qn()),
      })),
      (C5e = Eq.extend({ task: $2r })),
      (jfh = Rye.merge($2r)),
      (x5e = Dye.extend({
        method: qd("notifications/tasks/status"),
        params: jfh,
      })),
      (E3n = Sq.extend({
        method: qd("tasks/get"),
        params: Wue.extend({ taskId: qn() }),
      })),
      (v3n = Eq.merge($2r)),
      (A3n = Sq.extend({
        method: qd("tasks/result"),
        params: Wue.extend({ taskId: qn() }),
      })),
      (i4E = Eq.loose()),
      (w3n = O2r.extend({ method: qd("tasks/list") })),
      (T3n = N2r.extend({ tasks: sc($2r) })),
      (C3n = Sq.extend({
        method: qd("tasks/cancel"),
        params: Wue.extend({ taskId: qn() }),
      })),
      (qOl = Eq.merge($2r)),
      (zOl = kc({
        uri: qn(),
        mimeType: xI(qn()),
        _meta: jx(qn(), uD()).optional(),
      })),
      (KOl = zOl.extend({ text: qn() })),
      (MHi = qn().refine(
        (e) => {
          try {
            return (atob(e), !0);
          } catch {
            return !1;
          }
        },
        { message: "Invalid Base64 string" },
      )),
      (YOl = zOl.extend({ blob: MHi })),
      (F2r = bQ(["user", "assistant"])),
      (jKt = kc({
        audience: sc(F2r).optional(),
        priority: sv().min(0).max(1).optional(),
        lastModified: _9t.datetime({ offset: !0 }).optional(),
      })),
      (XOl = kc({
        ...UKt.shape,
        ...L2r.shape,
        uri: qn(),
        description: xI(qn()),
        mimeType: xI(qn()),
        size: xI(sv()),
        annotations: jKt.optional(),
        _meta: xI(pB({})),
      })),
      (Wfh = kc({
        ...UKt.shape,
        ...L2r.shape,
        uriTemplate: qn(),
        description: xI(qn()),
        mimeType: xI(qn()),
        annotations: jKt.optional(),
        _meta: xI(pB({})),
      })),
      (x3n = O2r.extend({ method: qd("resources/list") })),
      (aCe = N2r.extend({ resources: sc(XOl) })),
      (H3n = O2r.extend({ method: qd("resources/templates/list") })),
      (DCt = N2r.extend({ resourceTemplates: sc(Wfh) })),
      (LHi = Wue.extend({ uri: qn() })),
      (Gfh = LHi),
      (k3n = Sq.extend({ method: qd("resources/read"), params: Gfh })),
      (OHi = Eq.extend({ contents: sc(Bx([KOl, YOl])) })),
      (PCt = Dye.extend({
        method: qd("notifications/resources/list_changed"),
        params: Rye.optional(),
      })),
      (Vfh = LHi),
      (qfh = Sq.extend({ method: qd("resources/subscribe"), params: Vfh })),
      (zfh = LHi),
      (Kfh = Sq.extend({ method: qd("resources/unsubscribe"), params: zfh })),
      (Yfh = Rye.extend({ uri: qn() })),
      (Xfh = Dye.extend({
        method: qd("notifications/resources/updated"),
        params: Yfh,
      })),
      (Jfh = kc({ name: qn(), description: xI(qn()), required: xI(RC()) })),
      (Qfh = kc({
        ...UKt.shape,
        ...L2r.shape,
        description: xI(qn()),
        arguments: xI(sc(Jfh)),
        _meta: xI(pB({})),
      })),
      (I3n = O2r.extend({ method: qd("prompts/list") })),
      (MCt = N2r.extend({ prompts: sc(Qfh) })),
      (Zfh = Wue.extend({ name: qn(), arguments: jx(qn(), qn()).optional() })),
      (R3n = Sq.extend({ method: qd("prompts/get"), params: Zfh })),
      (NHi = kc({
        type: qd("text"),
        text: qn(),
        annotations: jKt.optional(),
        _meta: jx(qn(), uD()).optional(),
      })),
      ($Hi = kc({
        type: qd("image"),
        data: MHi,
        mimeType: qn(),
        annotations: jKt.optional(),
        _meta: jx(qn(), uD()).optional(),
      })),
      (FHi = kc({
        type: qd("audio"),
        data: MHi,
        mimeType: qn(),
        annotations: jKt.optional(),
        _meta: jx(qn(), uD()).optional(),
      })),
      (emh = kc({
        type: qd("tool_use"),
        name: qn(),
        id: qn(),
        input: jx(qn(), uD()),
        _meta: jx(qn(), uD()).optional(),
      })),
      (tmh = kc({
        type: qd("resource"),
        resource: Bx([KOl, YOl]),
        annotations: jKt.optional(),
        _meta: jx(qn(), uD()).optional(),
      })),
      (rmh = XOl.extend({ type: qd("resource_link") })),
      (UHi = Bx([NHi, $Hi, FHi, rmh, tmh])),
      (nmh = kc({ role: F2r, content: UHi })),
      (BHi = Eq.extend({ description: qn().optional(), messages: sc(nmh) })),
      (LCt = Dye.extend({
        method: qd("notifications/prompts/list_changed"),
        params: Rye.optional(),
      })),
      (omh = kc({
        title: qn().optional(),
        readOnlyHint: RC().optional(),
        destructiveHint: RC().optional(),
        idempotentHint: RC().optional(),
        openWorldHint: RC().optional(),
      })),
      (imh = kc({
        taskSupport: bQ(["required", "optional", "forbidden"]).optional(),
      })),
      (JOl = kc({
        ...UKt.shape,
        ...L2r.shape,
        description: qn().optional(),
        inputSchema: kc({
          type: qd("object"),
          properties: jx(qn(), oj).optional(),
          required: sc(qn()).optional(),
        }).catchall(uD()),
        outputSchema: kc({
          type: qd("object"),
          properties: jx(qn(), oj).optional(),
          required: sc(qn()).optional(),
        })
          .catchall(uD())
          .optional(),
        annotations: omh.optional(),
        execution: imh.optional(),
        _meta: jx(qn(), uD()).optional(),
      })),
      (Pye = O2r.extend({ method: qd("tools/list") })),
      (OCt = N2r.extend({ tools: sc(JOl) })),
      (zG = Eq.extend({
        content: sc(UHi).default([]),
        structuredContent: jx(qn(), uD()).optional(),
        isError: RC().optional(),
      })),
      (s4E = zG.or(Eq.extend({ toolResult: uD() }))),
      (smh = M2r.extend({ name: qn(), arguments: jx(qn(), uD()).optional() })),
      (Gue = Sq.extend({ method: qd("tools/call"), params: smh })),
      (NCt = Dye.extend({
        method: qd("notifications/tools/list_changed"),
        params: Rye.optional(),
      })),
      (QOl = kc({
        autoRefresh: RC().default(!0),
        debounceMs: sv().int().nonnegative().default(300),
      })),
      (U2r = bQ([
        "debug",
        "info",
        "notice",
        "warning",
        "error",
        "critical",
        "alert",
        "emergency",
      ])),
      (amh = Wue.extend({ level: U2r })),
      (jHi = Sq.extend({ method: qd("logging/setLevel"), params: amh })),
      (lmh = Rye.extend({ level: U2r, logger: qn().optional(), data: uD() })),
      (cmh = Dye.extend({ method: qd("notifications/message"), params: lmh })),
      (umh = kc({ name: qn().optional() })),
      (dmh = kc({
        hints: sc(umh).optional(),
        costPriority: sv().min(0).max(1).optional(),
        speedPriority: sv().min(0).max(1).optional(),
        intelligencePriority: sv().min(0).max(1).optional(),
      })),
      (pmh = kc({ mode: bQ(["auto", "required", "none"]).optional() })),
      (fmh = kc({
        type: qd("tool_result"),
        toolUseId: qn().describe(
          "The unique identifier for the corresponding tool call.",
        ),
        content: sc(UHi).default([]),
        structuredContent: kc({}).loose().optional(),
        isError: RC().optional(),
        _meta: jx(qn(), uD()).optional(),
      })),
      (mmh = Y2n("type", [NHi, $Hi, FHi])),
      (f3n = Y2n("type", [NHi, $Hi, FHi, emh, fmh])),
      (hmh = kc({
        role: F2r,
        content: Bx([f3n, sc(f3n)]),
        _meta: jx(qn(), uD()).optional(),
      })),
      (gmh = M2r.extend({
        messages: sc(hmh),
        modelPreferences: dmh.optional(),
        systemPrompt: qn().optional(),
        includeContext: bQ(["none", "thisServer", "allServers"]).optional(),
        temperature: sv().optional(),
        maxTokens: sv().int(),
        stopSequences: sc(qn()).optional(),
        metadata: oj.optional(),
        tools: sc(JOl).optional(),
        toolChoice: pmh.optional(),
      })),
      (WHi = Sq.extend({ method: qd("sampling/createMessage"), params: gmh })),
      ($Ct = Eq.extend({
        model: qn(),
        stopReason: xI(bQ(["endTurn", "stopSequence", "maxTokens"]).or(qn())),
        role: F2r,
        content: mmh,
      })),
      (B2r = Eq.extend({
        model: qn(),
        stopReason: xI(
          bQ(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(qn()),
        ),
        role: F2r,
        content: Bx([f3n, sc(f3n)]),
      })),
      (ymh = kc({
        type: qd("boolean"),
        title: qn().optional(),
        description: qn().optional(),
        default: RC().optional(),
      })),
      (_mh = kc({
        type: qd("string"),
        title: qn().optional(),
        description: qn().optional(),
        minLength: sv().optional(),
        maxLength: sv().optional(),
        format: bQ(["email", "uri", "date", "date-time"]).optional(),
        default: qn().optional(),
      })),
      (bmh = kc({
        type: bQ(["number", "integer"]),
        title: qn().optional(),
        description: qn().optional(),
        minimum: sv().optional(),
        maximum: sv().optional(),
        default: sv().optional(),
      })),
      (Smh = kc({
        type: qd("string"),
        title: qn().optional(),
        description: qn().optional(),
        enum: sc(qn()),
        default: qn().optional(),
      })),
      (Emh = kc({
        type: qd("string"),
        title: qn().optional(),
        description: qn().optional(),
        oneOf: sc(kc({ const: qn(), title: qn() })),
        default: qn().optional(),
      })),
      (vmh = kc({
        type: qd("string"),
        title: qn().optional(),
        description: qn().optional(),
        enum: sc(qn()),
        enumNames: sc(qn()).optional(),
        default: qn().optional(),
      })),
      (Amh = Bx([Smh, Emh])),
      (wmh = kc({
        type: qd("array"),
        title: qn().optional(),
        description: qn().optional(),
        minItems: sv().optional(),
        maxItems: sv().optional(),
        items: kc({ type: qd("string"), enum: sc(qn()) }),
        default: sc(qn()).optional(),
      })),
      (Tmh = kc({
        type: qd("array"),
        title: qn().optional(),
        description: qn().optional(),
        minItems: sv().optional(),
        maxItems: sv().optional(),
        items: kc({ anyOf: sc(kc({ const: qn(), title: qn() })) }),
        default: sc(qn()).optional(),
      })),
      (Cmh = Bx([wmh, Tmh])),
      (xmh = Bx([vmh, Amh, Cmh])),
      (Hmh = Bx([xmh, ymh, _mh, bmh])),
      (kmh = M2r.extend({
        mode: qd("form").optional(),
        message: qn(),
        requestedSchema: kc({
          type: qd("object"),
          properties: jx(qn(), Hmh),
          required: sc(qn()).optional(),
        }),
      })),
      (j2r = M2r.extend({
        mode: qd("url"),
        message: qn(),
        elicitationId: qn(),
        url: qn().url(),
      })),
      (Imh = Bx([kmh, j2r])),
      (Vue = Sq.extend({ method: qd("elicitation/create"), params: Imh })),
      (Rmh = Rye.extend({ elicitationId: qn() })),
      (H5e = Dye.extend({
        method: qd("notifications/elicitation/complete"),
        params: Rmh,
      })),
      (mrt = Eq.extend({
        action: bQ(["accept", "decline", "cancel"]),
        content: J2n(
          (e) => (e === null ? void 0 : e),
          jx(qn(), Bx([qn(), sv(), RC(), sc(qn())])).optional(),
        ),
      })),
      (Dmh = kc({ type: qd("ref/resource"), uri: qn() })),
      (Pmh = kc({ type: qd("ref/prompt"), name: qn() })),
      (Mmh = Wue.extend({
        ref: Bx([Pmh, Dmh]),
        argument: kc({ name: qn(), value: qn() }),
        context: kc({ arguments: jx(qn(), qn()).optional() }).optional(),
      })),
      (D3n = Sq.extend({ method: qd("completion/complete"), params: Mmh })));
    ((GHi = Eq.extend({
      completion: pB({
        values: sc(qn()).max(100),
        total: xI(sv().int()),
        hasMore: xI(RC()),
      }),
    })),
      (Lmh = kc({
        uri: qn().startsWith("file://"),
        name: qn().optional(),
        _meta: jx(qn(), uD()).optional(),
      })),
      (W2r = Sq.extend({ method: qd("roots/list"), params: Wue.optional() })),
      (VHi = Eq.extend({ roots: sc(Lmh) })),
      (Omh = Dye.extend({
        method: qd("notifications/roots/list_changed"),
        params: Rye.optional(),
      })),
      (a4E = Bx([
        b3n,
        PHi,
        D3n,
        jHi,
        R3n,
        I3n,
        x3n,
        H3n,
        k3n,
        qfh,
        Kfh,
        Gue,
        Pye,
        E3n,
        A3n,
        w3n,
        C3n,
      ])),
      (l4E = Bx([y3n, S3n, _3n, Omh, x5e])),
      (c4E = Bx([T5e, $Ct, B2r, mrt, VHi, v3n, T3n, C5e])),
      (u4E = Bx([b3n, WHi, Vue, W2r, E3n, A3n, w3n, C3n])),
      (d4E = Bx([y3n, S3n, cmh, Xfh, PCt, NCt, LCt, x5e, H5e])),
      (p4E = Bx([
        T5e,
        RCt,
        GHi,
        BHi,
        MCt,
        aCe,
        DCt,
        OHi,
        zG,
        OCt,
        v3n,
        T3n,
        C5e,
      ])));
    ys = class ys extends Error {
      constructor(e, t, r) {
        super(`MCP error ${e}: ${t}`);
        ((this.code = e), (this.data = r), (this.name = "McpError"));
      }
      static fromError(e, t, r) {
        if (e === xs.UrlElicitationRequired && r) {
          let n = r;
          if (n.elicitations) return new t1l(n.elicitations, t);
        }
        return new ys(e, t, r);
      }
    };
    t1l = class t1l extends ys {
      constructor(e, t = `URL elicitation${e.length > 1 ? "s" : ""} required`) {
        super(xs.UrlElicitationRequired, t, { elicitations: e });
      }
      get elicitations() {
        return this.data?.elicitations ?? [];
      }
    };
  });
