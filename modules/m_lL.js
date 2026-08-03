// Module: lL (lines 314350-314541)
  var lL = S(() => {
    zt();
    Zr();
    vt();
    Ge();
    Ar();
    st();
    Ja();
    Ei();
    $Gu();
    XC();
    aU();
    Oqr();
    Oqr();
    ((Kar = require("fs/promises")),
      (Hut = require("os")),
      (Mze = require("path")),
      (bse = `mcp__${tA}__`));
    ((BQr = {
      chrome: {
        name: "Google Chrome",
        macos: {
          appName: "Google Chrome",
          nativeMessagingPath: [
            "Library",
            "Application Support",
            "Google",
            "Chrome",
            "NativeMessagingHosts",
          ],
        },
        linux: {
          binaries: ["google-chrome", "google-chrome-stable"],
          nativeMessagingPath: [
            ".config",
            "google-chrome",
            "NativeMessagingHosts",
          ],
        },
        windows: {
          dataPath: ["Google", "Chrome", "User Data"],
          registryKey: "HKCU\\Software\\Google\\Chrome\\NativeMessagingHosts",
          appPathsExe: "chrome.exe",
        },
      },
      brave: {
        name: "Brave",
        macos: {
          appName: "Brave Browser",
          nativeMessagingPath: [
            "Library",
            "Application Support",
            "BraveSoftware",
            "Brave-Browser",
            "NativeMessagingHosts",
          ],
        },
        linux: {
          binaries: ["brave-browser", "brave"],
          nativeMessagingPath: [
            ".config",
            "BraveSoftware",
            "Brave-Browser",
            "NativeMessagingHosts",
          ],
        },
        windows: {
          dataPath: ["BraveSoftware", "Brave-Browser", "User Data"],
          registryKey:
            "HKCU\\Software\\BraveSoftware\\Brave-Browser\\NativeMessagingHosts",
          appPathsExe: "brave.exe",
        },
      },
      arc: {
        name: "Arc",
        macos: {
          appName: "Arc",
          nativeMessagingPath: [
            "Library",
            "Application Support",
            "Arc",
            "User Data",
            "NativeMessagingHosts",
          ],
        },
        linux: { binaries: [], nativeMessagingPath: [] },
        windows: {
          dataPath: ["Arc", "User Data"],
          registryKey: "HKCU\\Software\\ArcBrowser\\Arc\\NativeMessagingHosts",
        },
      },
      chromium: {
        name: "Chromium",
        macos: {
          appName: "Chromium",
          nativeMessagingPath: [
            "Library",
            "Application Support",
            "Chromium",
            "NativeMessagingHosts",
          ],
        },
        linux: {
          binaries: ["chromium", "chromium-browser"],
          nativeMessagingPath: [".config", "chromium", "NativeMessagingHosts"],
        },
        windows: {
          dataPath: ["Chromium", "User Data"],
          registryKey: "HKCU\\Software\\Chromium\\NativeMessagingHosts",
        },
      },
      edge: {
        name: "Microsoft Edge",
        macos: {
          appName: "Microsoft Edge",
          nativeMessagingPath: [
            "Library",
            "Application Support",
            "Microsoft Edge",
            "NativeMessagingHosts",
          ],
        },
        linux: {
          binaries: ["microsoft-edge", "microsoft-edge-stable"],
          nativeMessagingPath: [
            ".config",
            "microsoft-edge",
            "NativeMessagingHosts",
          ],
        },
        windows: {
          dataPath: ["Microsoft", "Edge", "User Data"],
          registryKey: "HKCU\\Software\\Microsoft\\Edge\\NativeMessagingHosts",
          appPathsExe: "msedge.exe",
        },
      },
      vivaldi: {
        name: "Vivaldi",
        macos: {
          appName: "Vivaldi",
          nativeMessagingPath: [
            "Library",
            "Application Support",
            "Vivaldi",
            "NativeMessagingHosts",
          ],
        },
        linux: {
          binaries: ["vivaldi", "vivaldi-stable"],
          nativeMessagingPath: [".config", "vivaldi", "NativeMessagingHosts"],
        },
        windows: {
          dataPath: ["Vivaldi", "User Data"],
          registryKey: "HKCU\\Software\\Vivaldi\\NativeMessagingHosts",
          appPathsExe: "vivaldi.exe",
        },
      },
      opera: {
        name: "Opera",
        macos: {
          appName: "Opera",
          nativeMessagingPath: [
            "Library",
            "Application Support",
            "com.operasoftware.Opera",
            "NativeMessagingHosts",
          ],
        },
        linux: {
          binaries: ["opera"],
          nativeMessagingPath: [".config", "opera", "NativeMessagingHosts"],
        },
        windows: {
          dataPath: ["Opera Software", "Opera Stable"],
          registryKey:
            "HKCU\\Software\\Opera Software\\Opera Stable\\NativeMessagingHosts",
          useRoaming: !0,
          appPathsExe: "opera.exe",
        },
      },
    }),
      (dyo = [
        "chrome",
        "brave",
        "arc",
        "edge",
        "chromium",
        "vivaldi",
        "opera",
      ]));
    zar = new Set();
  });
