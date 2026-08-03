// Module: EOd (lines 519891-519926)
  var EOd = S(() => {
    ei();
    DI();
    Ja();
    Qa();
    H0();
    vus();
    Pr();
    ((sPo = require("path")),
      (Mo_ = [
        "-c",
        "core.hooksPath=/dev/null",
        "-c",
        "core.fsmonitor=false",
        "-c",
        "safe.bareRepository=explicit",
        "-c",
        "protocol.file.allow=never",
      ]),
      (Lo_ = String.raw`([^&|;\n]*)`),
      (Oo_ = new RegExp(
        String.raw`\bgh\s+(pr\s+create|pr\s+merge|pr\s+comment|issue\s+create|issue\s+comment|release\s+create|release\s+upload|repo\s+fork)\b${Lo_}`,
        "g",
      )),
      (No_ = new Set(["-c", "-C", "--git-dir"])));
    Bo_ = new Set([
      "-o",
      "--push-option",
      "--receive-pack",
      "--exec",
      "--repo",
    ]);
    Wo_ = new Set(["-t", "-m"]);
    ((zo_ = new Set(["--org", "--fork-name", "--remote-name"])),
      (Ko_ = /^[A-Za-z0-9._-]+$/));
  });
