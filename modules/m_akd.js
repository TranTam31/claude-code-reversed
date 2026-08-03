// Module: akd (lines 491195-491606)
  var akd = S(() => {
    Vn();
    pt();
    Zr();
    vt();
    Vu();
    Ss();
    fmr();
    EIo();
    np();
    jl();
    st();
    x8e();
    ts();
    hp();
    e1t();
    CPt();
    y7r();
    Xm();
    bh();
    jp();
    Ga();
    Un();
    Pr();
    g7r();
    V8e();
    f4();
    qIo();
    ((zIo = require("fs/promises")),
      (UNs = require("path")),
      (rkd = Se(() =>
        v.strictObject({
          to: v
            .string()
            .describe(
              `Recipient: a peer session name from ${o7}, or an explicit uds:<socket> / bridge:<session id> address`,
            ),
          files: v
            .preprocess(
              (e) => (typeof e === "string" ? [e] : e),
              v.array(v.string()).min(1).max(Spe),
            )
            .describe(
              "File paths (absolute or relative to cwd) to send. Always pass an array, even for a single file.",
            ),
          message: v
            .string()
            .optional()
            .describe("Optional short message delivered alongside the files"),
        }),
      )),
      (nXy = Se(() =>
        v.object({
          success: v.boolean(),
          message: v.string(),
          msg_id: v.string().optional(),
          files: v
            .array(
              v.object({
                path: v.string(),
                size: v.number().optional(),
                sha256: v.string().optional(),
                file_uuid: v.string().optional(),
                error: v.string().optional(),
              }),
            )
            .describe("Per-file transfer outcome"),
        }),
      )),
      (oXy = xU(okd, (e) => e())),
      (iXy = xU(okd, (e) => e())));
    Vmr = new Set();
    ikd = Ui({
      name: PKe,
      searchHint: "send files to another Claude Code session",
      ruleContentField: "files",
      maxResultSizeChars: 1e5,
      shouldDefer: !0,
      userFacingName() {
        return "SendFile";
      },
      get inputSchema() {
        return rkd();
      },
      get outputSchema() {
        return nXy();
      },
      isEnabled() {
        return !1;
      },
      isConcurrencySafe() {
        return !1;
      },
      isReadOnly() {
        return !1;
      },
      toAutoClassifierInput(e) {
        let t = Array.isArray(e.files)
            ? e.files.join(", ")
            : typeof e.files === "string"
              ? e.files
              : "[no files]",
          r =
            typeof e.message === "string" && e.message.length > 0
              ? ` \u2014 message: ${e.message}`
              : "";
        return `to ${e.to}: ${t}${r}`;
      },
      async checkPermissions(e, t) {
        let r = En(t);
        lXy(t.toolUseId);
        let n = YU(r, LIe);
        if (n)
          return {
            behavior: "deny",
            message: "SendFile reads file contents; that action is disabled.",
            decisionReason: { type: "rule", rule: n },
          };
        let o;
        for (let s of e.files) {
          let a = MKe(Li(s), r);
          if (a.behavior === "deny") return a;
          if (a.behavior !== "allow") {
            if (dXy(a.decisionReason)) return a;
            if (o === void 0) o = a;
          }
        }
        let i = OIe(r, LIe);
        if (i)
          return {
            behavior: "ask",
            message: `Send ${e.files.length} ${Et(e.files.length, "file")} to '${e.to}'? SendFile reads file contents.`,
            decisionReason: { type: "rule", rule: i },
          };
        if (O5n())
          return {
            behavior: "ask",
            message: `Send ${e.files.length} ${Et(e.files.length, "file")} to '${e.to}'? If the recipient is a Remote Control or cloud session, the file contents travel via Anthropic's servers to another machine.`,
            decisionReason: {
              type: "safetyCheck",
              reason:
                "isolatePeerMachines is enabled \u2014 file transfer to another session requires explicit approval",
              classifierApprovable: !1,
            },
          };
        if (o !== void 0) return o;
        if (r.mode === "plan")
          return {
            behavior: "ask",
            message: `${PKe} would send file contents to another session \u2014 approve the plan first.`,
            decisionReason: { type: "mode", mode: "plan" },
          };
        if (r.mode === "auto")
          return {
            behavior: "passthrough",
            message: "SendFile requires classifier review.",
          };
        return { behavior: "allow", updatedInput: e };
      },
      async validateInput({ to: e, files: t }, r) {
        let n = qvo(e, o7);
        if (n !== void 0) return { result: !1, message: n, errorCode: 9 };
        for (let o of t) {
          let i = ecs(o);
          if (i !== void 0) return i;
          if ($f(Li(o)))
            return {
              result: !1,
              message: `Attachment "${o}" is a /net autofs -hosts path, which is not supported.`,
              errorCode: 1,
            };
        }
        return { result: !0 };
      },
      async description() {
        return ekd;
      },
      async prompt() {
        return tkd(Spe, bpe / 1048576);
      },
      mapToolResultToToolResultBlockParam(e, t) {
        let r = e.files.filter((o) => o.error !== void 0),
          n = [e.message];
        if (r.length > 0)
          n.push(
            `${r.length} ${Et(r.length, "file")} could NOT be sent:
` +
              r.map((o) => `  ${o.path}: ${o.error}`).join(`
`),
          );
        return {
          tool_use_id: t,
          type: "tool_result",
          content: n.join(`
`),
        };
      },
      renderToolUseMessage(e) {
        if (typeof e.to !== "string") return null;
        return `${Array.isArray(e.files) ? e.files.join(", ") : ""} \u2192 ${e.to}`;
      },
      async call(e, t, r, n) {
        let { to: o, message: i } = e,
          s = e.files,
          a = cXy(t.toolUseId),
          l = t.abortController.signal,
          c = En(t),
          u = await sXy(o, i ?? "", t);
        if (u.kind === "refused")
          return (
            O("tengu_send_file", {
              transport: Ee("refused"),
              file_count: s.length,
              delivered_count: 0,
              success: !1,
            }),
            { data: { success: !1, message: u.message, files: [] } }
          );
        let d = uXy(),
          p = (k) =>
            i?.trim()
              ? i
              : `Sent you ${k.length} ${Et(k.length, "file")}: ${k.join(", ")}`,
          f = (k, D) => {
            O("tengu_send_file", {
              transport: fe(u.kind),
              file_count: s.length,
              delivered_count: D,
              success: k,
            });
          },
          m = (k, D = []) => (
            f(!1, 0),
            { data: { success: !1, message: k, files: D } }
          );
        async function g(k) {
          let D;
          try {
            D = await zIo.realpath(k);
          } catch {
            return !0;
          }
          if (D === k) return !0;
          if (MKe(D, c).behavior === "allow") return !0;
          return `resolves to '${D}', which is not readable under this session's permissions`;
        }
        let y = s.map((k) => Li(k)),
          _ = y.map((k) => UNs.basename(k));
        if (u.kind === "uds") {
          let k = Array(y.length),
            D = await Promise.all(
              y.map((P, B) =>
                oXy(async () => {
                  if (l.aborted) {
                    k[B] = { path: P, error: "aborted" };
                    return;
                  }
                  let G = await g(P);
                  if (G !== !0) {
                    k[B] = { path: P, error: G };
                    return;
                  }
                  try {
                    let V = await zIu(P);
                    return (
                      (k[B] = { path: P, size: V.file_size, sha256: V.sha256 }),
                      V
                    );
                  } catch (V) {
                    k[B] = { path: P, error: le(V) };
                    return;
                  }
                }),
              ),
            );
          KIu();
          let M = D.filter((P) => P !== void 0),
            L = () => {
              for (let P of M) zIo.unlink(P.path).catch(() => {});
            };
          if (l.aborted) throw (L(), new tl());
          if (M.length === 0)
            return m(`No files could be staged for transfer to ${u.label}.`, k);
          let { sendToUdsSocket: N } = ($9e(), en(Rrn));
          try {
            let { msgId: P } = await N(
              u.sock,
              p(M.map((B) => B.file_name)),
              d,
              M,
            );
            return (
              f(!0, M.length),
              {
                data: {
                  success: !0,
                  message: `${M.length} ${Et(M.length, "file")} \u2192 ${u.label}${u.contestedNote ?? ""}`,
                  msg_id: P,
                  files: k,
                },
              }
            );
          } catch (P) {
            let B = Ut(P);
            if (B === "ENOENT" || B === "ECONNREFUSED") L();
            let G =
              B === "ENOENT" || B === "ECONNREFUSED"
                ? ` \u2014 the peer process may have restarted, so this socket path is stale. Call ${o7} to get the current address.`
                : B === "EBUSY"
                  ? " \u2014 the peer is alive but its pipe is momentarily busy. Retry the same address shortly."
                  : "";
            return m(`Failed to send to ${u.label}: ${le(P)}${G}`, k);
          }
        }
        if (kn() !== "firstParty" || ca() || !ns("allow_send_file"))
          return m(
            "Cross-machine file transfer is unavailable: it uploads file contents through Anthropic servers, which this provider/privacy configuration does not allow. Same-machine (uds:) transfers still work.",
          );
        if (O5n() && !a) {
          let k = await r(
            ikd,
            { to: o, files: s, message: i },
            t,
            n,
            t.toolUseId ?? "",
          );
          if (k.behavior !== "allow")
            return m(
              `isolatePeerMachines is enabled: sending files to '${u.label}' needs your approval \u2014 nothing was sent.`,
            );
          if (k.updatedInput !== void 0) {
            let D = rkd().safeParse(k.updatedInput);
            if (!D.success)
              return m(
                "The permission handler narrowed the input to a shape SendFile does not accept \u2014 nothing was sent.",
              );
            ((s = D.data.files),
              (y = s.map((M) => Li(M))),
              (_ = y.map((M) => UNs.basename(M))));
          }
        }
        let { uploadBytesToBridgeStore: E } = await Promise.resolve().then(
            () => (Zls(), Qls),
          ),
          A = Array(y.length),
          b = await Promise.all(
            y.map((k, D) =>
              iXy(async () => {
                if (l.aborted) {
                  A[D] = { path: k, error: "aborted" };
                  return;
                }
                let M = await g(k);
                if (M !== !0) {
                  A[D] = { path: k, error: M };
                  return;
                }
                let L = await ocs(k, bpe);
                if (L === null) {
                  A[D] = { path: k, error: Hdo };
                  return;
                }
                let N = Flt(L),
                  P = await E(L, _[D], "application/octet-stream", l);
                if (typeof P !== "string") {
                  A[D] = { path: k, size: L.length, error: P.error };
                  return;
                }
                return (
                  (A[D] = { path: k, size: L.length, sha256: N, file_uuid: P }),
                  {
                    file_uuid: P,
                    file_name: _[D],
                    is_image: $or.test(k),
                    file_size: L.length,
                    sha256: N,
                    media_type: For(_[D]),
                  }
                );
              }),
            ),
          );
        if (l.aborted) throw new tl();
        let T = b.filter((k) => k !== void 0);
        if (T.length === 0)
          return m(`No files could be uploaded for transfer to ${u.label}.`, A);
        let { postInterClaudeMessage: C, isLikelyStaleBridgeError: I } =
            (NNs(), en(ONs)),
          R = await C(u.sessionId, p(T.map((k) => k.file_name)), d, T);
        if (!R.ok) {
          let k = I(R.error)
            ? ` \u2014 the peer session may have ended or restarted, so this bridge ID is stale. Call ${o7} to get the current address.`
            : "";
          return m(
            `Failed to send to ${u.label}: ${R.error ?? "unknown"}${k}`,
            A,
          );
        }
        return (
          f(!0, T.length),
          {
            data: {
              success: !0,
              message: `${T.length} ${Et(T.length, "file")} \u2192 ${u.label}${u.contestedNote ?? ""}`,
              msg_id: R.msgId,
              files: A,
            },
          }
        );
      },
    });
  });
