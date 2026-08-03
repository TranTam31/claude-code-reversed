// Module: Nht (lines 632229-632277)
  var Nht = S(() => {
    st();
    ((N9s = require("fs/promises")),
      (_cp = require("os")),
      (mbr = require("path")));
    ((k3_ = ["chrome", "brave", "arc", "edge", "chromium", "vivaldi", "opera"]),
      (I3_ = {
        chrome: {
          macos: ["Library", "Application Support", "Google", "Chrome"],
          linux: [".config", "google-chrome"],
          windows: { path: ["Google", "Chrome", "User Data"] },
        },
        brave: {
          macos: [
            "Library",
            "Application Support",
            "BraveSoftware",
            "Brave-Browser",
          ],
          linux: [".config", "BraveSoftware", "Brave-Browser"],
          windows: { path: ["BraveSoftware", "Brave-Browser", "User Data"] },
        },
        arc: {
          macos: ["Library", "Application Support", "Arc", "User Data"],
          linux: [],
          windows: { path: ["Arc", "User Data"] },
        },
        chromium: {
          macos: ["Library", "Application Support", "Chromium"],
          linux: [".config", "chromium"],
          windows: { path: ["Chromium", "User Data"] },
        },
        edge: {
          macos: ["Library", "Application Support", "Microsoft Edge"],
          linux: [".config", "microsoft-edge"],
          windows: { path: ["Microsoft", "Edge", "User Data"] },
        },
        vivaldi: {
          macos: ["Library", "Application Support", "Vivaldi"],
          linux: [".config", "vivaldi"],
          windows: { path: ["Vivaldi", "User Data"] },
        },
        opera: {
          macos: ["Library", "Application Support", "com.operasoftware.Opera"],
          linux: [".config", "opera"],
          windows: { path: ["Opera Software", "Opera Stable"], useRoaming: !0 },
        },
      }));
  });
