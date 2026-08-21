(function () {
  try {
    var e =
      typeof window < `u`
        ? window
        : typeof global < `u`
          ? global
          : typeof globalThis < `u`
            ? globalThis
            : typeof self < `u`
              ? self
              : {};
    e.SENTRY_RELEASE = { id: `6e13464cbd9c3dc0501fe5ecb0568e3d3e9ea77a` };
  } catch {}
})();
try {
  (function () {
    var e =
        typeof window < `u`
          ? window
          : typeof global < `u`
            ? global
            : typeof globalThis < `u`
              ? globalThis
              : typeof self < `u`
                ? self
                : {},
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = `e8c4e2bf-5446-44e3-9119-cca45cb82335`),
      (e._sentryDebugIdIdentifier = `sentry-dbid-e8c4e2bf-5446-44e3-9119-cca45cb82335`));
  })();
} catch {}
const e = require("./index.chunk-DYqUPnPe.js"),
  t = require("./index.chunk-BuzHHbBR.js"),
  n = require("./index.chunk-Be9slxhH.js");
let r = require("electron");
var i = e.r({
  _test: () => _,
  disposeOutboundOnlyCCRClient: () => h,
  initOutboundOnlyCCRClient: () => m,
  preallocateOutboundCCRRemoteId: () => g,
});
function a(e) {
  return typeof e == `object` && !!e && e.terminal === !0;
}
var o = `[outbound-ccr]`,
  s = 15e3,
  c = 5e3,
  l = 3e4,
  u = 6e4,
  d = 5 * 6e4,
  f = class {
    constructor(e) {
      ((this.sessions = new Map()),
        (this.initInFlight = new Map()),
        (this.pending = new Map()),
        (this.initFailedUntil = new Map()),
        (this.tornDownDuringInit = new Map()),
        (this.idleTeardownTimers = new Map()),
        (this.remoteIdByLocalId = new Map()),
        (this.eventCleanup = null),
        (this.disposed = !1),
        (this.sessionManager = e.sessionManager),
        (this.getOAuthToken = e.getOAuthToken),
        (this.apiHost = e.apiHost),
        (this.getTrustedDeviceToken = e.getTrustedDeviceToken),
        (this.enrollTrustedDevice = e.enrollTrustedDevice),
        (this.onOAuthRejected = e.onOAuthRejected));
    }
    start() {
      if (this.disposed || this.eventCleanup) return;
      let e = (e) => {
        if (e.type === `archived`) {
          this.teardownSession(e.sessionId);
          return;
        }
        if (e.type === `deleted`) {
          (this.initInFlight.has(e.sessionId) &&
            (this.tornDownDuringInit.set(e.sessionId, `deleted`),
            this.pending.delete(e.sessionId)),
            this.deleteRemoteSession(
              e.sessionId,
              e.outboundCCRRemoteId,
            ).finally(
              () => (
                this.remoteIdByLocalId.delete(e.sessionId),
                this.teardownSession(e.sessionId, `deleted`)
              ),
            ));
          return;
        }
        if (e.type === `session_updated`) {
          this.syncTitle(e.sessionId);
          return;
        }
        if (e.type === `close`) {
          (this.reportState(e.sessionId, `idle`),
            this.scheduleIdleTeardown(e.sessionId));
          return;
        }
        this.handleSessionEvent(e);
      };
      this.sessionManager.on(`event`, e);
      let n = (e) => {
        (this.reportState(e, `idle`), this.scheduleIdleTeardown(e));
      };
      this.sessionManager.on(`queryCompleted`, n);
      let i = null;
      (r.app.whenReady().then(() => {
        this.disposed ||
          ((i = () => {
            let e = Date.now();
            for (let [t, n] of this.sessions)
              e >= n.refreshAt &&
                (n.refreshTimer && clearTimeout(n.refreshTimer),
                this.refreshCredentials(t));
          }),
          r.powerMonitor.on(`resume`, i));
      }),
        (this.eventCleanup = () => {
          (this.sessionManager.off(`event`, e),
            this.sessionManager.off(`queryCompleted`, n),
            i && r.powerMonitor.off(`resume`, i));
        }),
        t.Jb.info(`${o} started`));
    }
    dispose() {
      if (!this.disposed) {
        ((this.disposed = !0),
          this.eventCleanup?.(),
          (this.eventCleanup = null));
        for (let e of Array.from(this.sessions.keys())) this.teardownSession(e);
        for (let e of this.idleTeardownTimers.values()) clearTimeout(e);
        (this.idleTeardownTimers.clear(),
          this.remoteIdByLocalId.clear(),
          this.pending.clear(),
          this.initFailedUntil.clear(),
          this.tornDownDuringInit.clear(),
          t.Jb.info(`${o} disposed`));
      }
    }
    async handleSessionEvent(e) {
      if (
        this.disposed ||
        !t.T() ||
        e.type !== `message` ||
        !e.message ||
        (this.clearIdleTeardownTimer(e.sessionId),
        this.reportState(e.sessionId, `running`),
        !(await this.sessionManager.isOutboundCCREligibleSession(
          e.sessionId,
        ))) ||
        this.disposed
      )
        return;
      let n = e.message;
      if (
        n.type === `result` ||
        n.type === `stream_event` ||
        n.isSynthetic === !0 ||
        n.parent_tool_use_id != null ||
        (n.type === `system` && n.subtype !== `status`)
      )
        return;
      let r = this.stripRunSummaryForScheduledRun(e.sessionId, e.message);
      if (r === null) return;
      let i = this.sessions.get(e.sessionId);
      if (i) {
        this.safeWrite(i.handle, r);
        return;
      }
      let a = this.initFailedUntil.get(e.sessionId);
      if (a !== void 0) {
        if (Date.now() < a) return;
        this.initFailedUntil.delete(e.sessionId);
      }
      let o = this.pending.get(e.sessionId);
      (o || ((o = []), this.pending.set(e.sessionId, o)),
        o.push(r),
        this.kickInit(e.sessionId));
    }
    kickInit(e) {
      let t = this.initInFlight.get(e);
      return (
        t ||
          ((t = this.initSession(e).finally(() => {
            (this.initInFlight.delete(e), this.tornDownDuringInit.delete(e));
          })),
          this.initInFlight.set(e, t)),
        t
      );
    }
    async preallocateRemoteId(e, r) {
      if (this.disposed || !t.T()) return;
      let i = await this.getOAuthToken();
      if (this.disposed) return;
      let o = await n.n(this.apiHost, i, e, s, t.hm(r));
      if (a(o))
        throw Error(
          `createCodeSession rejected (status ${o.status}): ${o.detail ?? `no detail`}`,
        );
      if (!o) throw Error(`createCodeSession returned null`);
      if (typeof o != `string`)
        throw (
          await this.onOAuthRejected(),
          Error(`createCodeSession: OAuth bearer rejected (${o.reason})`)
        );
      return o;
    }
    async syncTitle(e) {
      if (this.disposed || !t.T()) return;
      let n = this.sessions.get(e);
      if (n) {
        if (n.titleSyncInFlight) {
          n.titleSyncPending = !0;
          return;
        }
        n.titleSyncInFlight = !0;
        try {
          let r = this.sessionManager.getSession(e)?.title;
          if (!r || r === n.lastSyncedTitle) return;
          let i;
          try {
            i = await this.getOAuthToken();
          } catch (n) {
            t.Jb.warn(
              `${o} title sync skipped for ${e}: getOAuthToken: ${n instanceof Error ? n.message : String(n)}`,
            );
            return;
          }
          let a = new AbortController(),
            c = setTimeout(() => a.abort(), s);
          try {
            let s = await t.rr(
              `${this.apiHost}/v1/code/sessions/${encodeURIComponent(n.remoteId)}`,
              {
                method: `PUT`,
                token: i,
                deviceToken: this.getTrustedDeviceToken(),
                headers: {
                  "Content-Type": `application/json`,
                  "anthropic-version": `2023-06-01`,
                },
                body: JSON.stringify({ title: r.slice(0, 500) }),
                signal: a.signal,
              },
            );
            s.ok
              ? (n.lastSyncedTitle = r)
              : t.Jb.warn(`${o} title sync for ${e} returned ${s.status}`);
          } catch (n) {
            t.Jb.warn(
              `${o} title sync failed for ${e}: ${n instanceof Error ? n.message : String(n)}`,
            );
          } finally {
            clearTimeout(c);
          }
        } finally {
          ((n.titleSyncInFlight = !1),
            n.titleSyncPending &&
              ((n.titleSyncPending = !1), this.syncTitle(e)));
        }
      }
    }
    async probeRemoteSession(e, n, r = this.getTrustedDeviceToken()) {
      let i = new AbortController(),
        a = setTimeout(() => i.abort(), s);
      try {
        let a = await t.rr(
          `${this.apiHost}/v1/code/sessions/${encodeURIComponent(e)}`,
          {
            method: `GET`,
            token: n,
            deviceToken: r,
            headers: { "anthropic-version": `2023-06-01` },
            signal: i.signal,
          },
        );
        return a.ok
          ? `exists`
          : a.status === 404
            ? `gone`
            : a.status === 401
              ? `rejected`
              : a.status === 403 &&
                  t.Qu(await a.json().catch(() => void 0)) ===
                    `untrusted_device`
                ? `untrusted_device`
                : `transient`;
      } catch {
        return `transient`;
      } finally {
        clearTimeout(a);
      }
    }
    reportState(e, t) {
      this.sessions.get(e)?.handle.reportState?.(t);
    }
    stripRunSummaryForScheduledRun(e, n) {
      let r = n;
      if (
        r?.type !== `assistant` ||
        this.sessionManager.getScheduledTaskIdForSession(e) == null
      )
        return n;
      let i = r.message,
        a = i?.content;
      if (!Array.isArray(a) || a.length === 0) return n;
      let o = !1,
        s = a.flatMap((e) => {
          let n = e;
          if (n?.type !== `text` || typeof n.text != `string`) return [e];
          let { body: r } = t.ar(n.text, { allowTrailingText: !0 });
          return r === n.text
            ? [e]
            : ((o = !0), r === `` ? [] : [{ ...n, text: r }]);
        });
      return o
        ? s.length === 0
          ? null
          : { ...r, message: { ...i, content: s } }
        : n;
    }
    safeWrite(e, n) {
      try {
        e.write(n);
      } catch (e) {
        t.Jb.warn(
          `${o} write failed: ${e instanceof Error ? e.message : String(e)}`,
        );
      }
    }
    async initSession(e) {
      let r = this.sessionManager.getSession(e);
      if (
        !r ||
        r.isArchived ||
        !(await this.sessionManager.isOutboundCCREligibleSession(e))
      ) {
        this.pending.delete(e);
        return;
      }
      let i = r.title ?? `Cowork session`;
      t.Jb.info(`${o} attaching outbound-only CCR for ${e}`);
      let c = (n) => {
          (t.Jb.warn(`${o} init failed for ${e}: ${n}`),
            this.pending.delete(e),
            this.initFailedUntil.set(e, Date.now() + l));
        },
        u = () => this.disposed || this.tornDownDuringInit.has(e),
        d = (t) => {
          this.tornDownDuringInit.get(e) === `deleted` &&
            this.deleteRemoteSessionById(t);
        },
        f;
      try {
        f = await this.getOAuthToken();
      } catch (e) {
        return c(
          `getOAuthToken: ${e instanceof Error ? e.message : String(e)}`,
        );
      }
      if (u()) return;
      let p = null,
        m = !1,
        h = this.sessionManager.getOutboundCCRRemoteId(e);
      if (h) {
        let n = await this.probeRemoteSession(h, f);
        if (u()) {
          n !== `gone` && d(h);
          return;
        }
        if (n === `exists`)
          ((p = h),
            this.remoteIdByLocalId.set(e, p),
            (m = !0),
            t.Jb.info(`${o} ${e} reattaching to persisted remote ${p}`));
        else if (n === `gone`)
          (t.Jb.info(
            `${o} persisted remote ${h} for ${e} is gone; creating a new one`,
          ),
            this.sessionManager.setOutboundCCRRemoteId(e, void 0),
            this.remoteIdByLocalId.delete(e));
        else if (n === `rejected`)
          return (
            await this.onOAuthRejected(),
            d(h),
            c(`probe of persisted remote ${h} failed (OAuth bearer rejected)`)
          );
        else if (n === `untrusted_device`) {
          let t = await this.enrollTrustedDevice();
          if (u()) {
            d(h);
            return;
          }
          let n = t ? await this.probeRemoteSession(h, f, t) : `transient`;
          if (u()) {
            d(h);
            return;
          }
          if (n === `exists`)
            ((p = h), this.remoteIdByLocalId.set(e, p), (m = !0));
          else if (n === `gone`)
            (this.sessionManager.setOutboundCCRRemoteId(e, void 0),
              this.remoteIdByLocalId.delete(e));
          else
            return (
              d(h),
              c(
                `probe of persisted remote ${h} failed (untrusted_device, post-enroll ${n})`,
              )
            );
        } else
          return (d(h), c(`probe of persisted remote ${h} failed (transient)`));
      }
      if (p === null) {
        let o;
        try {
          o = await n.n(this.apiHost, f, i, s, t.hm(r.sessionType));
        } catch (e) {
          return c(
            `createCodeSession: ${e instanceof Error ? e.message : String(e)}`,
          );
        }
        if (a(o))
          return c(
            `createCodeSession rejected (status ${o.status}): ${o.detail ?? `no detail`}`,
          );
        if (!o) return c(`createCodeSession returned null`);
        if (typeof o != `string`)
          return (
            await this.onOAuthRejected(),
            c(`createCodeSession: OAuth bearer rejected (${o.reason})`)
          );
        if (
          ((p = o),
          this.sessionManager.setOutboundCCRRemoteId(e, p),
          this.remoteIdByLocalId.set(e, p),
          u())
        ) {
          d(p);
          return;
        }
      }
      let g;
      try {
        g = await n.r(p, this.apiHost, f, s, this.getTrustedDeviceToken());
      } catch (e) {
        return (
          d(p),
          c(
            `fetchRemoteCredentials: ${e instanceof Error ? e.message : String(e)}`,
          )
        );
      }
      if (u()) {
        d(p);
        return;
      }
      if (!g) return (d(p), c(`fetchRemoteCredentials returned null`));
      if (`terminal` in g && !g.terminal)
        return (
          await this.onOAuthRejected(),
          d(p),
          c(`fetchRemoteCredentials: OAuth bearer rejected (${g.reason})`)
        );
      if (n.i(g)) {
        if (g.reason !== `untrusted_device`)
          return (
            d(p),
            c(
              `fetchRemoteCredentials: transient elevated-auth denial (${g.reason})`,
            )
          );
        let e = await this.enrollTrustedDevice();
        if (u()) {
          d(p);
          return;
        }
        if (e) {
          try {
            g = await n.r(p, this.apiHost, f, s, e);
          } catch (e) {
            return (
              d(p),
              c(
                `fetchRemoteCredentials: ${e instanceof Error ? e.message : String(e)}`,
              )
            );
          }
          if (u()) {
            d(p);
            return;
          }
        }
        if (g && `terminal` in g && !g.terminal)
          return (
            await this.onOAuthRejected(),
            d(p),
            c(`fetchRemoteCredentials: OAuth bearer rejected (${g.reason})`)
          );
        if (!g || `terminal` in g)
          return (
            d(p),
            c(
              `fetchRemoteCredentials: terminal ${g?.reason ?? `untrusted_device`} ΓÇö device needs re-enrollment`,
            )
          );
      }
      let _;
      try {
        _ = await n.t({
          sessionId: p,
          ingressToken: g.worker_jwt,
          apiBaseUrl: g.api_base_url,
          epoch: g.worker_epoch,
          outboundOnly: !0,
          onClose: (n) => {
            (t.Jb.info(`${o} transport closed for ${e} code=${n}`),
              _ &&
                this.sessions.get(e)?.handle === _ &&
                this.teardownSession(e));
          },
        });
      } catch (e) {
        return (
          d(p),
          c(
            `attachBridgeSession: ${e instanceof Error ? e.message : String(e)}`,
          )
        );
      }
      if (u()) {
        (_.close(), d(p));
        return;
      }
      let v = {
        remoteId: p,
        handle: _,
        credentials: g,
        refreshTimer: null,
        refreshAt: 0,
        lastSyncedTitle: m ? void 0 : i,
        titleSyncInFlight: !1,
        titleSyncPending: !1,
      };
      (this.sessions.set(e, v),
        this.scheduleRefresh(e, v, !1),
        this.reportState(
          e,
          this.idleTeardownTimers.has(e) ? `idle` : `running`,
        ),
        this.syncTitle(e));
      let y = this.pending.get(e) ?? [];
      (this.pending.delete(e),
        t.Jb.info(
          `${o} ${e} ΓåÆ ${p} attached, draining ${y.length} queued event(s)`,
        ));
      for (let e of y) this.safeWrite(_, e);
    }
    scheduleRefresh(e, t, n) {
      t.refreshTimer && clearTimeout(t.refreshTimer);
      let r = n ? u : Math.max(3e4, t.credentials.expires_in * 800);
      ((t.refreshAt = Date.now() + r),
        (t.refreshTimer = setTimeout(() => {
          this.refreshCredentials(e);
        }, r)));
    }
    async refreshCredentials(e) {
      let r = this.sessions.get(e);
      if (!r || this.disposed) return;
      let i = (n) => {
          (t.Jb.warn(
            `${o} JWT refresh failed for ${e}: ${n}; retrying in ${u / 1e3}s`,
          ),
            !this.disposed &&
              this.sessions.has(e) &&
              this.scheduleRefresh(e, r, !0));
        },
        a;
      try {
        a = await this.getOAuthToken();
      } catch (e) {
        return i(
          `getOAuthToken: ${e instanceof Error ? e.message : String(e)}`,
        );
      }
      let c;
      try {
        c = await n.r(
          r.remoteId,
          this.apiHost,
          a,
          s,
          this.getTrustedDeviceToken(),
        );
      } catch (e) {
        return i(
          `fetchRemoteCredentials: ${e instanceof Error ? e.message : String(e)}`,
        );
      }
      if (!(this.disposed || !this.sessions.has(e))) {
        if (!c) return i(`fetchRemoteCredentials returned null`);
        if (`terminal` in c && !c.terminal)
          return (
            await this.onOAuthRejected(),
            i(`fetchRemoteCredentials: OAuth bearer rejected (${c.reason})`)
          );
        if (n.i(c)) {
          if (c.reason !== `untrusted_device`)
            return i(
              `fetchRemoteCredentials: transient elevated-auth denial (${c.reason})`,
            );
          let l = await this.enrollTrustedDevice();
          if (this.disposed || !this.sessions.has(e)) return;
          if (l) {
            try {
              c = await n.r(r.remoteId, this.apiHost, a, s, l);
            } catch (e) {
              return i(
                `fetchRemoteCredentials: ${e instanceof Error ? e.message : String(e)}`,
              );
            }
            if (this.disposed || !this.sessions.has(e)) return;
          }
          if (c && `terminal` in c && !c.terminal)
            return (
              await this.onOAuthRejected(),
              i(`fetchRemoteCredentials: OAuth bearer rejected (${c.reason})`)
            );
          if (!c || `terminal` in c) {
            (t.Jb.warn(
              `${o} JWT refresh hit terminal ${c?.reason ?? `untrusted_device`} for ${e} ΓÇö tearing down`,
            ),
              this.teardownSession(e));
            return;
          }
        }
        r.credentials = c;
        try {
          await r.handle.reconnectTransport({
            ingressToken: c.worker_jwt,
            apiBaseUrl: c.api_base_url,
            epoch: c.worker_epoch,
          });
        } catch (e) {
          return i(
            `reconnectTransport: ${e instanceof Error ? e.message : String(e)}`,
          );
        }
        !this.disposed &&
          this.sessions.has(e) &&
          this.scheduleRefresh(e, r, !1);
      }
    }
    scheduleIdleTeardown(e) {
      if (
        this.disposed ||
        (!this.sessions.has(e) &&
          !this.initInFlight.has(e) &&
          !this.pending.has(e))
      )
        return;
      this.clearIdleTeardownTimer(e);
      let t = setTimeout(() => {
        if ((this.idleTeardownTimers.delete(e), this.disposed)) return;
        let t = this.initInFlight.get(e);
        t
          ? t.finally(() => {
              this.disposed || this.teardownSession(e);
            })
          : this.teardownSession(e);
      }, d);
      this.idleTeardownTimers.set(e, t);
    }
    clearIdleTeardownTimer(e) {
      let t = this.idleTeardownTimers.get(e);
      t && (clearTimeout(t), this.idleTeardownTimers.delete(e));
    }
    async deleteRemoteSession(e, t) {
      let n =
        this.sessions.get(e)?.remoteId ?? this.remoteIdByLocalId.get(e) ?? t;
      n && (await this.deleteRemoteSessionById(n));
    }
    async deleteRemoteSessionById(e) {
      let n;
      try {
        n = await this.getOAuthToken();
      } catch (n) {
        t.Jb.warn(
          `${o} delete skipped for ${e}: getOAuthToken: ${n instanceof Error ? n.message : String(n)}`,
        );
        return;
      }
      await t.tr({
        apiHost: this.apiHost,
        token: n,
        remoteId: e,
        logPrefix: o,
        trustedDeviceToken: this.getTrustedDeviceToken(),
      });
    }
    async teardownSession(e, n = `archived`) {
      (this.clearIdleTeardownTimer(e),
        this.initInFlight.has(e) &&
          (this.tornDownDuringInit.set(e, n), this.pending.delete(e)));
      let r = this.sessions.get(e);
      if (r) {
        (this.sessions.delete(e),
          this.initFailedUntil.delete(e),
          r.refreshTimer && clearTimeout(r.refreshTimer));
        try {
          await Promise.race([
            r.handle.flush(),
            new Promise((e) => setTimeout(e, c)),
          ]);
        } catch (n) {
          t.Jb.warn(
            `${o} flush failed during teardown of ${e}: ${n instanceof Error ? n.message : String(n)}`,
          );
        }
        (r.handle.close(), t.Jb.info(`${o} torn down ${e} ΓåÆ ${r.remoteId}`));
      }
    }
  },
  p = null;
function m(e) {
  p || ((p = new f(e)), p.start());
}
function h() {
  (p?.dispose(), (p = null));
}
function g(e, t) {
  return p?.preallocateRemoteId(e, t) ?? Promise.resolve(void 0);
}
var _ = { OutboundOnlyCCRClient: f };
(Object.defineProperty(exports, "n", {
  enumerable: !0,
  get: function () {
    return g;
  },
}),
  Object.defineProperty(exports, "t", {
    enumerable: !0,
    get: function () {
      return i;
    },
  }));
//# sourceMappingURL=index.chunk-B4rbrzOr.js.map
