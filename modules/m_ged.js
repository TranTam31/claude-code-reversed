// Module: ged (lines 369206-369243)
  var ged = S(() => {
    tSe();
    np();
    hp();
    Pr();
    mTs();
    ((ded = require("os")), (R7 = require("path")));
    ((hTs = new Set([
      "GIT_DIR",
      "GIT_WORK_TREE",
      "GIT_COMMON_DIR",
      "GIT_OBJECT_DIRECTORY",
      "GIT_INDEX_FILE",
      "GIT_SHALLOW_FILE",
    ])),
      (IHy = new Set(["--namespace", "--attr-source", "--shallow-file"])),
      (RHy = ["--git-dir", "--work-tree"]),
      (DHy = /(^|[\\/])proc[\\/](self|thread-self|\d+)([\\/]|$)/i),
      (PHy = /(^|[\\/])dev[\\/](fd|stdin|stdout|stderr)([\\/]|$)/i));
    ((MHy = new Set(["cd", "pushd", "popd", "chdir"])),
      (LHy = new Set(["command", "builtin", "time", "noglob", "nocorrect"])),
      (OHy = new Set([
        "export",
        "declare",
        "typeset",
        "local",
        "readonly",
        "env",
        "make",
      ])),
      (NHy = new Set(["export", "declare", "typeset", "local", "readonly"])),
      ($Hy = /^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/s));
    ((UHy = new Set(["xargs", "parallel"])),
      (BHy = new Set(["exec", "nocorrect"])),
      (fed = new Set([...Xnr].filter((e) => !BHy.has(e)))),
      (jHy = new Set(["-execdir", "-okdir"])));
    gTs = /^git(?:\.exe|\.real|-[a-z][\w-]*)?$/i;
  });
