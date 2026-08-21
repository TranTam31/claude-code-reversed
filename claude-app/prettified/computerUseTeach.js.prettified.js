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
      (e._sentryDebugIds[t] = `318b4262-f5af-44e3-a5e5-8362ace159ad`),
      (e._sentryDebugIdIdentifier = `sentry-dbid-318b4262-f5af-44e3-a5e5-8362ace159ad`));
  })();
} catch {}
let e = require("electron"),
  t = require("electron/renderer");
function n() {
  return `frameToken` in t.webFrame &&
    t.webFrame.top &&
    `frameToken` in t.webFrame.top
    ? t.webFrame.top.frameToken === t.webFrame.frameToken
    : t.webFrame.top?.routingId === t.webFrame.routingId;
}
var r = {
    next() {
      return e.ipcRenderer.invoke(
        `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuTeach_$_next`,
      );
    },
    exit() {
      return e.ipcRenderer.invoke(
        `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuTeach_$_exit`,
      );
    },
    mouseEnter() {
      return e.ipcRenderer.invoke(
        `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuTeach_$_mouseEnter`,
      );
    },
    mouseLeave() {
      return e.ipcRenderer.invoke(
        `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuTeach_$_mouseLeave`,
      );
    },
    onShow(t) {
      let n = (e, n) => t(n);
      return (
        e.ipcRenderer.on(
          `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuTeach_$_show`,
          n,
        ),
        () => {
          e.ipcRenderer.removeListener(
            `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuTeach_$_show`,
            n,
          );
        }
      );
    },
    onWorking(t) {
      let n = (e) => t();
      return (
        e.ipcRenderer.on(
          `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuTeach_$_working`,
          n,
        ),
        () => {
          e.ipcRenderer.removeListener(
            `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuTeach_$_working`,
            n,
          );
        }
      );
    },
    onHide(t) {
      let n = (e) => t();
      return (
        e.ipcRenderer.on(
          `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuTeach_$_hide`,
          n,
        ),
        () => {
          e.ipcRenderer.removeListener(
            `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuTeach_$_hide`,
            n,
          );
        }
      );
    },
    onReassertHover(t) {
      let n = (e) => t();
      return (
        e.ipcRenderer.on(
          `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuTeach_$_reassertHover`,
          n,
        ),
        () => {
          e.ipcRenderer.removeListener(
            `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuTeach_$_reassertHover`,
            n,
          );
        }
      );
    },
  },
  i = (e) => {
    n() &&
      ((e[`claude.internal.computerUse`] =
        e[`claude.internal.computerUse`] || {}),
      (e[`claude.internal.computerUse`].CuTeach = r));
  },
  a = {
    done() {
      return e.ipcRenderer.invoke(
        `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuWatchRecordPill_$_done`,
      );
    },
    discard() {
      return e.ipcRenderer.invoke(
        `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuWatchRecordPill_$_discard`,
      );
    },
    toggleMic() {
      return e.ipcRenderer.invoke(
        `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuWatchRecordPill_$_toggleMic`,
      );
    },
    reportProcessingWidth(t) {
      return e.ipcRenderer.invoke(
        `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuWatchRecordPill_$_reportProcessingWidth`,
        t,
      );
    },
    onStepCount(t) {
      let n = (e, n) => t(n);
      return (
        e.ipcRenderer.on(
          `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuWatchRecordPill_$_stepCount`,
          n,
        ),
        () => {
          e.ipcRenderer.removeListener(
            `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuWatchRecordPill_$_stepCount`,
            n,
          );
        }
      );
    },
    onMicState(t) {
      let n = (e, n, r) => t(n, r);
      return (
        e.ipcRenderer.on(
          `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuWatchRecordPill_$_micState`,
          n,
        ),
        () => {
          e.ipcRenderer.removeListener(
            `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuWatchRecordPill_$_micState`,
            n,
          );
        }
      );
    },
    onProcessing(t) {
      let n = (e) => t();
      return (
        e.ipcRenderer.on(
          `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuWatchRecordPill_$_processing`,
          n,
        ),
        () => {
          e.ipcRenderer.removeListener(
            `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuWatchRecordPill_$_processing`,
            n,
          );
        }
      );
    },
    onTimeWarning(t) {
      let n = (e, n) => t(n);
      return (
        e.ipcRenderer.on(
          `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuWatchRecordPill_$_timeWarning`,
          n,
        ),
        () => {
          e.ipcRenderer.removeListener(
            `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuWatchRecordPill_$_timeWarning`,
            n,
          );
        }
      );
    },
    onMicError(t) {
      let n = (e) => t();
      return (
        e.ipcRenderer.on(
          `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuWatchRecordPill_$_micError`,
          n,
        ),
        () => {
          e.ipcRenderer.removeListener(
            `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuWatchRecordPill_$_micError`,
            n,
          );
        }
      );
    },
  },
  o = (e) => {
    n() &&
      ((e[`claude.internal.computerUse`] =
        e[`claude.internal.computerUse`] || {}),
      (e[`claude.internal.computerUse`].CuWatchRecordPill = a));
  },
  s = {
    choose(t) {
      return e.ipcRenderer.invoke(
        `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuWatchRecordChooser_$_choose`,
        t,
      );
    },
    setMicPreview(t) {
      return e.ipcRenderer.invoke(
        `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuWatchRecordChooser_$_setMicPreview`,
        t,
      );
    },
    stopMicPreview() {
      return e.ipcRenderer.invoke(
        `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuWatchRecordChooser_$_stopMicPreview`,
      );
    },
    onMicState(t) {
      let n = (e, n, r) => t(n, r);
      return (
        e.ipcRenderer.on(
          `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuWatchRecordChooser_$_micState`,
          n,
        ),
        () => {
          e.ipcRenderer.removeListener(
            `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuWatchRecordChooser_$_micState`,
            n,
          );
        }
      );
    },
    onInputDevices(t) {
      let n = (e, n) => t(n);
      return (
        e.ipcRenderer.on(
          `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuWatchRecordChooser_$_inputDevices`,
          n,
        ),
        () => {
          e.ipcRenderer.removeListener(
            `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.internal.computerUse_$_CuWatchRecordChooser_$_inputDevices`,
            n,
          );
        }
      );
    },
  },
  c = (e) => {
    n() &&
      ((e[`claude.internal.computerUse`] =
        e[`claude.internal.computerUse`] || {}),
      (e[`claude.internal.computerUse`].CuWatchRecordChooser = s));
  },
  l = {};
(i(l), o(l), c(l));
for (let [t, n] of Object.entries(l)) e.contextBridge.exposeInMainWorld(t, n);
//# sourceMappingURL=computerUseTeach.js.map
