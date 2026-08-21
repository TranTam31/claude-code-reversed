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
      (e._sentryDebugIds[t] = `6f316c3e-065a-441a-a1ec-b20e983b9115`),
      (e._sentryDebugIdIdentifier = `sentry-dbid-6f316c3e-065a-441a-a1ec-b20e983b9115`));
  })();
} catch {}
let e = require("electron");
require("electron/renderer");
var t = (function (e) {
    return ((e.Back = `back`), (e.Forward = `forward`), e);
  })({}),
  n = {
    callMcpTool(t, n) {
      return e.ipcRenderer.invoke(
        `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.coworkArtifact_$_CoworkArtifactBridge_$_callMcpTool`,
        t,
        n,
      );
    },
    askClaude(t, n) {
      return e.ipcRenderer.invoke(
        `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.coworkArtifact_$_CoworkArtifactBridge_$_askClaude`,
        t,
        n,
      );
    },
    runScheduledTask(t, n) {
      return e.ipcRenderer.invoke(
        `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.coworkArtifact_$_CoworkArtifactBridge_$_runScheduledTask`,
        t,
        n,
      );
    },
    navigateHost(t) {
      return e.ipcRenderer.invoke(
        `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.coworkArtifact_$_CoworkArtifactBridge_$_navigateHost`,
        t,
      );
    },
    openExternalUrl(t) {
      return e.ipcRenderer.invoke(
        `$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_claude.coworkArtifact_$_CoworkArtifactBridge_$_openExternalUrl`,
        t,
      );
    },
  };
e.contextBridge.exposeInMainWorld(`cowork`, {
  callMcpTool: (e, t) => n.callMcpTool?.(e, t),
  askClaude: n.askClaude,
  runScheduledTask: (e) =>
    n.runScheduledTask?.(e, {
      hasUserActivation: navigator.userActivation.isActive,
    }),
});
function r(e) {
  if (!e.isTrusted) return;
  let t = e.target?.closest?.(`a[href]`);
  t instanceof HTMLAnchorElement &&
    (!t.protocol ||
      t.protocol === `cowork-artifact:` ||
      (e.preventDefault(), n.openExternalUrl?.(t.href)));
}
(window.addEventListener(
  `click`,
  (e) => {
    e.button === 0 && r(e);
  },
  !0,
),
  window.addEventListener(
    `auxclick`,
    (e) => {
      e.button === 1 && r(e);
    },
    !0,
  ),
  process.platform === `darwin` &&
    window.addEventListener(
      `mouseup`,
      (e) => {
        e.isTrusted &&
          (e.button === 3
            ? (e.preventDefault(), n.navigateHost?.(t.Back))
            : e.button === 4 &&
              (e.preventDefault(), n.navigateHost?.(t.Forward)));
      },
      !0,
    ));
//# sourceMappingURL=coworkArtifact.js.map
