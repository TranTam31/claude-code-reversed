// Module: Zm (lines 614815-615049)
  var Zm = S(() => {
    gd();
    bl();
    UYt();
    pt();
    aZi();
    Lue();
    vt();
    xf();
    DZi();
    Tf();
    ku();
    Ge();
    qm();
    Ar();
    Qr();
    st();
    RT();
    Vf();
    nau();
    sU();
    Gx();
    Pio();
    Dzr();
    Ga();
    nj();
    W5e();
    ((tBo = require("util")), (J_r = require("fs")));
    s8s = qr(() => {
      vCe(() => {});
      let e = process.ppid;
      (process.on("SIGINT", () => {
        if (eBo) return;
        (Sr("info", "shutdown_signal", { signal: "SIGINT" }), SOe(), Is(0));
      }),
        process.on("SIGTERM", () => {
          let r = {
            uptime_s: Math.round(process.uptime()),
            ppid_changed: process.ppid !== e,
            stdin_at_eof: process.stdin.readableEnded,
            stdin_destroyed: process.stdin.destroyed,
            is_tty: process.stdin.isTTY ?? !1,
          };
          if (
            (Sr("info", "shutdown_signal", { signal: "SIGTERM", ...r }),
            O("tengu_shutdown_signal", { signal: Ee("SIGTERM"), ...r }),
            SOe(),
            eBo)
          )
            return;
          Is(143);
        }),
        process.on("SIGBREAK", () => {
          (Sr("info", "shutdown_signal", { signal: "SIGBREAK" }), SOe(), Is(0));
        }),
        process.on("SIGHUP", () => {
          (Sr("info", "shutdown_signal", { signal: "SIGHUP" }), SOe(), Is(129));
        }),
        fCi((r, n) => {
          if (!LN()) return;
          (Sr("info", "shutdown_signal", { signal: `${r}_${n}` }),
            SOe(),
            Is(0));
        }));
      let t = (r) => {
        let n = Nip(r);
        if (!(!n && r instanceof Error)) {
          if (typeof r === "string")
            return {
              error_name: "string",
              error_message: mu(r).slice(0, 2000),
              isHostError: !1,
            };
          let c = n ? Q2o(r, "name") : $ip(r, "name"),
            u = Q2o(r, "message"),
            d = [];
          if (c !== void 0) d.push(c);
          if (u !== void 0) d.push(u);
          let p = d.length > 0 ? mu(d.join(": ")).slice(0, 2000) : void 0,
            f = Q2o(r, "stack");
          return {
            error_name: "non-error",
            error_message: p,
            error_stack: f !== void 0 ? mu(f).slice(0, 4000) : void 0,
            isHostError: !1,
          };
        }
        let i = r,
          s,
          a,
          l;
        try {
          s = i.name;
        } catch {}
        try {
          a = i.message;
        } catch {}
        try {
          l = i.stack;
        } catch {}
        return {
          error_name: typeof s === "string" ? s : "Error",
          error_message: typeof a === "string" ? mu(a).slice(0, 2000) : void 0,
          error_stack: typeof l === "string" ? mu(l).slice(0, 4000) : void 0,
          isHostError: !0,
        };
      };
      (process.on("uncaughtException", (r) => {
        if (c2t) return;
        let n = t(r),
          o = n.isHostError && rau(r) && Dip(Date.now());
        Sr("error", "uncaught_exception", { ...n, recovered: o });
        let i = n.isHostError ? wk(r) : xip(n);
        if (
          (O("tengu_uncaught_exception", {
            error_name: n.error_name,
            ...i,
            ...(o && { recovered: o }),
          }),
          n.isHostError)
        ) {
          if (!o) qtr(r, "uncaught_exception");
          else if (t8s < Rip) (t8s++, qtr(r, "uncaught_exception_recovered"));
        }
        if (o) {
          (w(
            `Recovered HTTP/2 stream-teardown uncaught exception (${n.error_name}) \u2014 transport throttle, keeping the process alive`,
            { level: "error" },
          ),
            Jqs(n.error_message ?? n.error_name));
          return;
        }
        if (BTi()) {
          if (
            ((c2t = !0),
            w(
              `Uncaught exception under CLAUDE_CODE_SUPERVISED \u2014 exiting ${mzr}: ${n.error_name}`,
              { level: "error" },
            ),
            rs() && !ME())
          )
            w0("uncaught:" + n.error_name);
          Is(mzr);
          return;
        }
        let s = Hip(Date.now());
        if (Dfn.length < jF_ || s)
          Dfn.push({
            name: n.error_name,
            message: (n.error_message ?? "").slice(0, 200),
            topFrame: i.error_top_frame,
          });
        if (s) {
          (O("tengu_uncaught_exception_loop", {
            count: X_r,
            window_ms: Qqs,
            error_name: n.error_name,
            error_message_hash: i.error_message_hash,
          }),
            kYe());
          try {
            for (let a of Dfn)
              J_r.writeSync(
                2,
                `Uncaught exception (loop): ${a.name}: ${a.message}${a.topFrame ? ` at ${a.topFrame}` : ""}
`,
              );
            J_r.writeSync(
              2,
              `Uncaught exception loop detected (${X_r} in ${Qqs}ms) \u2014 forcing shutdown
`,
            );
          } catch {}
          Is(1);
          return;
        }
        if (rs() && !ME()) {
          (w0("uncaught:" + n.error_name), Is(1));
          return;
        }
        Jqs(n.error_message ?? n.error_name);
      }),
        process.on("unhandledRejection", (r) => {
          if (c2t) return;
          let n = t(r);
          if (Hht && n.isHostError && WF_(r)) {
            w(`Swallowed MCP ConnectionClosed during shutdown: ${le(r)}`);
            return;
          }
          (Sr("error", "unhandled_rejection", n),
            O("tengu_unhandled_rejection", {
              error_name: n.error_name,
              ...(n.isHostError ? wk(r) : xip(n)),
            }));
          let o = n.isHostError && Zkl(r);
          if (n.isHostError && !o) qtr(r, "unhandled_rejection");
          if (n.isHostError && kp(r)) {
            w(
              "Swallowed unhandled AbortError rejection (not exiting bg/supervised worker)",
            );
            return;
          }
          if (o) {
            w(
              "Swallowed unhandled http.Server ECONNRESET rejection (not exiting bg/supervised worker)",
            );
            return;
          }
          if (BTi()) {
            if (
              ((c2t = !0),
              w(
                `Unhandled rejection under CLAUDE_CODE_SUPERVISED \u2014 exiting ${mzr}: ${n.error_name}`,
                { level: "error" },
              ),
              rs() && !ME())
            )
              w0("unhandled:" + n.error_name);
            Is(mzr);
            return;
          }
          if (rs() && !ME()) {
            (w0("unhandled:" + n.error_name), Is(1));
            return;
          }
          Jqs(n.error_message ?? n.error_name);
        }));
    });
    Dfn = [];
    Uip = class Uip extends Error {
      constructor() {
        super("Cleanup timeout");
      }
    };
  });
