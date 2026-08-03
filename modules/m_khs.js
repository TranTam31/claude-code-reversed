// Module: khs (lines 299303-299620)
  var khs = S(() => {
    pt();
    kct();
    jS();
    Ge();
    SFe();
    Ar();
    st();
    RT();
    Ja();
    Vf();
    Ir();
    Ei();
    Lct();
    QB();
    Jfo();
    tFu();
    rL();
    Lmo();
    Ofs();
    xsr();
    TJr();
    f8e();
    ake();
    AFe();
    d7();
    fMt();
    lmo();
    Wps();
    mho();
    tz();
    Gpe();
    xE();
    RMt();
    Qct();
    Jms();
    Z2u();
    LXr();
    qms();
    MMt();
    ((oBu = x(ot(), 1)), (Zct = x(ue(), 1)));
    Hho = class Hho extends oBu.PureComponent {
      static displayName = "InternalApp";
      static getDerivedStateFromError(e) {
        return { error: e };
      }
      state = { error: void 0 };
      rawModeEnabledCount = 0;
      internal_eventEmitter = new uMt();
      keyParseState = AFu;
      incompleteEscapeTimer = null;
      byteRunDeadlineAt = null;
      NORMAL_TIMEOUT = 50;
      PASTE_TIMEOUT = 2000;
      querier =
        this.props.stdout.isTTY && this.props.stdin.isTTY
          ? new Bps(this.props.stdout)
          : null;
      lastClickTime = 0;
      lastClickCol = -1;
      lastClickRow = -1;
      clickCount = 0;
      pendingHyperlinkTimer = null;
      pendingHyperlinkOpensInPanel = !1;
      lastHoverCol = -1;
      lastHoverRow = -1;
      lastStdinTime = performance.now();
      arrowWindow = [];
      arrowWindowDir = "";
      jediTermInput = cFu();
      emitJediTermScrollBug = () =>
        this.internal_eventEmitter.emit("jediterm-scroll-bug");
      isRawModeSupported() {
        return this.props.stdin.isTTY;
      }
      render() {
        return Zct.jsx(use.Provider, {
          value: {
            columns: this.props.terminalColumns,
            rows: this.props.terminalRows,
          },
          children: Zct.jsx(cse.Provider, {
            value: {
              exit: this.handleExit,
              focusManager: this.props.focusManager,
              rootNode: this.props.rootNode,
              dispatchPasteEvent: this.props.dispatchPasteEvent,
            },
            children: Zct.jsx(Z8e.Provider, {
              value: {
                stdin: this.props.stdin,
                setRawMode: this.handleSetRawMode,
                isRawModeSupported: this.isRawModeSupported(),
                internal_eventEmitter: this.internal_eventEmitter,
                internal_querier: this.querier,
              },
              children: Zct.jsx(Gms, {
                children: Zct.jsx(Xms, {
                  children: Zct.jsx(yho.Provider, {
                    value: this.props.onCursorDeclaration ?? Hcy,
                    children: this.state.error
                      ? Zct.jsx(Tho, { error: this.state.error })
                      : this.props.children,
                  }),
                }),
              }),
            }),
          }),
        });
      }
      componentDidMount() {
        let e = this.props.rootNode,
          t = e._pendingRawModeDelta ?? 0;
        e._pendingRawModeDelta = 0;
        for (let r = 0; r < t; r++) this.handleSetRawMode(!0);
        for (let r = 0; r > t; r--) this.handleSetRawMode(!1);
        e.setRawMode = this.handleSetRawMode;
      }
      componentWillUnmount() {
        if (
          ((this.appUnmounted = !0),
          (this.props.rootNode.setRawMode = void 0),
          this.props.stdout.isTTY)
        )
          this.props.stdout.write(nz);
        if (this.incompleteEscapeTimer)
          (clearTimeout(this.incompleteEscapeTimer),
            (this.incompleteEscapeTimer = null));
        if (this.pendingHyperlinkTimer)
          (clearTimeout(this.pendingHyperlinkTimer),
            (this.pendingHyperlinkTimer = null),
            (this.pendingHyperlinkOpensInPanel = !1));
        if (this.isRawModeSupported())
          while (this.rawModeEnabledCount > 0) this.handleSetRawMode(!1);
      }
      componentDidCatch(e, t) {
        (_eu(e, t), this.handleExit(e));
      }
      handleSetRawMode = (e) => {
        let { stdin: t } = this.props;
        if (!this.isRawModeSupported())
          if (t === process.stdin)
            throw Error(`Raw mode is not supported on the current process.stdin, which Ink uses as input stream by default.
Read about how to prevent this error on https://github.com/vadimdemedes/ink/#israwmodesupported`);
          else
            throw Error(`Raw mode is not supported on the stdin provided to Ink.
Read about how to prevent this error on https://github.com/vadimdemedes/ink/#israwmodesupported`);
        if ((t.setEncoding("utf8"), e)) {
          if (this.rawModeEnabledCount === 0) {
            if (
              (bFe(),
              this.props.onRawModeEnter?.(),
              t.ref(),
              jU(t, !0),
              t.addListener("readable", this.handleReadable),
              Lt() === "windows")
            )
              (t.resume(), t.pause());
            if (
              (this.props.stdout.write(uho),
              this.props.stdout.write(kJr),
              this.props.stdout.write(dho),
              this.props.stdout.write(QSe()),
              process.env.CLAUDE_BG_BACKEND !== "daemon")
            )
              setImmediate(() => {
                if (this.querier) tBu(this.querier);
              });
          }
          this.rawModeEnabledCount++;
          return;
        }
        if (this.rawModeEnabledCount <= 0) return;
        if (--this.rawModeEnabledCount === 0) {
          if (
            (this.props.stdout.write(rze),
            this.props.stdout.write(hFe),
            this.props.stdout.write(HMt),
            this.props.stdout.write(Fsr),
            this.props.stdout.write($sr),
            !Hd.get(this.props.stdout)?.isHandoffRawMode)
          )
            jU(t, !1);
          (t.removeListener("readable", this.handleReadable), t.unref());
        }
      };
      flushIncomplete = () => {
        if (
          ((this.incompleteEscapeTimer = null),
          !this.keyParseState.incomplete &&
            this.keyParseState.mode !== "IN_PASTE" &&
            this.keyParseState.pendingByteEvents.length === 0)
        )
          return;
        if (this.props.stdin.readableLength > 0) {
          this.incompleteEscapeTimer = setTimeout(
            this.flushIncomplete,
            this.NORMAL_TIMEOUT,
          );
          return;
        }
        if (this.keyParseState.incomplete) {
          let t =
            (this.keyParseState.mode === "IN_PASTE"
              ? this.PASTE_TIMEOUT
              : this.NORMAL_TIMEOUT) -
            (performance.now() - this.lastStdinTime);
          if (t > 0) {
            this.incompleteEscapeTimer = setTimeout(this.flushIncomplete, t);
            return;
          }
        }
        this.processInput(null);
      };
      processInput = (e) => {
        let t = this.keyParseState,
          [r, n] = wFu(this.keyParseState, e);
        if (((this.keyParseState = n), r.length > 0))
          oke.discreteUpdates(Icy, this, r, void 0, void 0);
        let o = performance.now(),
          i = this.keyParseState.pendingByteEvents;
        if (i.length === 0) this.byteRunDeadlineAt = null;
        else if (t.pendingByteEvents !== i || this.byteRunDeadlineAt === null)
          this.byteRunDeadlineAt = o + this.NORMAL_TIMEOUT;
        if (this.incompleteEscapeTimer)
          (clearTimeout(this.incompleteEscapeTimer),
            (this.incompleteEscapeTimer = null));
        let s =
            this.keyParseState.incomplete ||
            this.keyParseState.mode === "IN_PASTE"
              ? this.keyParseState.mode === "IN_PASTE"
                ? this.PASTE_TIMEOUT
                : this.NORMAL_TIMEOUT
              : null,
          a =
            this.byteRunDeadlineAt === null ||
            this.keyParseState.mode === "IN_PASTE"
              ? null
              : Math.max(0, this.byteRunDeadlineAt - o),
          l = s === null ? a : a === null ? s : Math.min(s, a);
        if (l !== null)
          this.incompleteEscapeTimer = setTimeout(this.flushIncomplete, l);
      };
      handleReadable = () => {
        let e = performance.now();
        if (e - this.lastStdinTime > kcy) this.props.onStdinResume?.();
        this.lastStdinTime = e;
        try {
          let t;
          while ((t = this.props.stdin.read()) !== null) this.processInput(t);
        } catch (t) {
          xe(oi(_n(t), "stdin readable handler threw during input processing"));
          let { stdin: r } = this.props;
          if (
            this.rawModeEnabledCount > 0 &&
            !r.listeners("readable").includes(this.handleReadable)
          )
            (w(
              "handleReadable: re-attaching stdin readable listener after error recovery",
              { level: "warn" },
            ),
              r.addListener("readable", this.handleReadable));
        }
      };
      handleInput = (e) => {
        if (e === "\x03" && this.props.exitOnCtrlC) this.handleExit();
      };
      handleExit = (e) => {
        if (this.isRawModeSupported()) this.handleSetRawMode(!1);
        this.props.onExit(e);
      };
      attachProbeDeferred = !1;
      appUnmounted = !1;
      handleTerminalFocus = (e) => {
        let t = PSe();
        if ((Ops(e), e && t === "blurred"))
          Hd.get(this.props.stdout)?.proactiveAtlasResetOnFocus();
        if (
          e &&
          t !== "focused" &&
          process.env.CLAUDE_BG_BACKEND === "daemon" &&
          this.querier &&
          !this.attachProbeDeferred
        )
          ((this.attachProbeDeferred = !0),
            imo().then(() => {
              if (
                ((this.attachProbeDeferred = !1),
                this.querier && !this.appUnmounted)
              )
                tBu(this.querier);
            }));
      };
      handleSuspend = () => {
        if (!this.isRawModeSupported()) return;
        let e = this.rawModeEnabledCount;
        while (this.rawModeEnabledCount > 0) this.handleSetRawMode(!1);
        if (this.props.stdout.isTTY) {
          let r =
            Hd.get(this.props.stdout)?.altScreenBackgroundColor !== void 0;
          this.props.stdout.write(nz + HMt + Wpe + (r ? IMt() : ""));
        }
        this.internal_eventEmitter.emit("suspend");
        let t = () => {
          for (let r = 0; r < e; r++)
            if (this.isRawModeSupported()) this.handleSetRawMode(!0);
          if (this.props.stdout.isTTY) {
            let r = this.props.isScreenReaderEnabled ?? !1;
            if (!Z.CLAUDE_CODE_ACCESSIBILITY && !r) this.props.stdout.write(g7);
            this.props.stdout.write(kJr);
          }
          (this.internal_eventEmitter.emit("resume"),
            process.removeListener("SIGCONT", t));
        };
        (process.on("SIGCONT", t), process.kill(0, "SIGTSTP"));
      };
    };
  });
