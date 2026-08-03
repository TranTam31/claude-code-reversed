// Module: bb (lines 242713-242887)
  var bb = S(() => {
    PSu();
    a$e();
    Cos();
    dB();
    pt();
    Wu();
    zt();
    Zr();
    vt();
    np();
    O3r();
    Fwu();
    Ge();
    Ar();
    np();
    fde();
    Qr();
    vc();
    BO();
    Qa();
    IGn();
    Jis();
    hp();
    Ei();
    _Y();
    bHe();
    ky();
    TCe();
    snt();
    Un();
    lss();
    HU();
    nes();
    Bnr();
    RS();
    Rh();
    SHe();
    st();
    Xm();
    eSe();
    mss();
    $Tu();
    wlo();
    ((yp = require("fs")), (yss = require("os")), (Ws = require("path")));
    Bco = class Bco extends Error {
      constructor(e) {
        super(e);
        this.name = "SandboxInitFailedError";
      }
    };
    bss = class bss extends Error {
      constructor(e) {
        super(e);
        this.name = "SandboxBridgeUnavailableError";
      }
    };
    Gco = class Gco extends Error {
      constructor(e) {
        super(e);
        this.name = "SandboxUnavailableForShellError";
      }
    };
    Sss = class Sss extends Error {
      constructor(e) {
        super(e);
        this.name = "SandboxCommandTooLongError";
      }
    };
    Vco = class Vco extends Error {
      constructor(e) {
        super(e);
        this.name = "SandboxPolicyRefusalError";
      }
    };
    dlt = qr(() => ({}));
    jco = new Set();
    ((Gnr = []), (oYr = []), (ult = []), (Wco = new Map()));
    iYr = qr(() => {
      try {
        CE.updateConfig(Vnr(us() ?? {}));
      } catch (n) {
        w(
          `checkDependencies: settings unavailable, re-seeding SRT config from defaults: ${n}`,
        );
        try {
          CE.updateConfig(Vnr({}));
        } catch (o) {
          if (
            (w(
              `checkDependencies: SRT config build failed, skipping seed: ${o}`,
            ),
            Lt() === "windows")
          )
            return { errors: [VTu], warnings: [] };
        }
      }
      let { rgPath: e, rgArgs: t } = Qbe(),
        r = CE.checkDependencies({ command: e, args: t });
      return {
        ...r,
        errors: r.errors.map((n) => Jbe(n)),
        warnings: r.warnings.map((n) => Jbe(n)),
      };
    });
    zTu = qr(() => CE.isSupportedPlatform());
    Oo = {
      initialize: e0u,
      isSandboxingEnabled: zco,
      isSandboxEnabledInSettings: XDt,
      isPlatformInEnabledList: aYr,
      passesCheapSandboxGates: KTu,
      getSandboxUnavailableReason: D8g,
      getMaskCredentialWarning: P8g,
      canMaskCredentialWarningFire: XTu,
      isAutoAllowBashIfSandboxedEnabled: k8g,
      isAutoAllowSupported: qTu,
      areUnsandboxedCommandsAllowed: I8g,
      isSandboxRequired: Tss,
      areSandboxSettingsLockedByPolicy: JTu,
      areUnsandboxedCommandsForbiddenByPolicy: R8g,
      setSandboxSettings: L8g,
      getExcludedCommands: O8g,
      wrapWithSandbox: $8g,
      wrapWithSandboxArgv: F8g,
      invalidateDependencyCache: () => {
        (iYr.cache.clear?.(), (qco = !1), (nYr = void 0));
      },
      refreshConfig: xss,
      addSessionAllowedHost: w8g,
      reset: U8g,
      checkDependencies: wss,
      getConfig: CE.getConfig,
      getFsReadConfig: () => {
        let e = CE.getConfig();
        if (e?.filesystem.disabled)
          return {
            denyOnly: e.filesystem.denyRead.map(Die),
            allowWithinDeny: (e.filesystem.allowRead ?? []).map(Die),
          };
        return CE.getFsReadConfig();
      },
      getFsWriteConfig: () => {
        let e = CE.getConfig();
        if (e?.filesystem.disabled)
          return {
            allowOnly: e.filesystem.allowWrite.map(Die),
            denyWithinAllow: e.filesystem.denyWrite.map(Die),
          };
        return CE.getFsWriteConfig();
      },
      getNetworkRestrictionConfig: () => {
        if (CE.getConfig()?.network?.allowedDomains === void 0) return {};
        return CE.getNetworkRestrictionConfig();
      },
      getIgnoreViolations: CE.getIgnoreViolations,
      getLinuxGlobPatternWarnings: M8g,
      isSupportedPlatform: Css,
      getAllowUnixSockets: CE.getAllowUnixSockets,
      getAllowLocalBinding: CE.getAllowLocalBinding,
      getAllowMachLookup: CE.getAllowMachLookup,
      getEnableWeakerNestedSandbox: CE.getEnableWeakerNestedSandbox,
      getProxyPort: CE.getProxyPort,
      getProxyAuthToken: CE.getProxyAuthToken,
      getSocksProxyPort: CE.getSocksProxyPort,
      getLinuxHttpSocketPath: CE.getLinuxHttpSocketPath,
      getLinuxSocksSocketPath: CE.getLinuxSocksSocketPath,
      waitForNetworkInitialization: CE.waitForNetworkInitialization,
      getSandboxViolationStore: CE.getSandboxViolationStore,
      annotateStderrWithSandboxFailures: CE.annotateStderrWithSandboxFailures,
      cleanupAfterCommand: () => {
        (CE.cleanupAfterCommand(), C8g(), x8g());
      },
    };
  });
