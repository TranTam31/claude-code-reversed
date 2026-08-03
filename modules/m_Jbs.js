// Module: Jbs (lines 328077-328104)
  var Jbs = S(() => {
    Ge();
    st();
    Ja();
    ((i6u = require("fs/promises")),
      (iyy = [
        {
          lockfile: "bun.lock",
          command: "bun",
          args: ["install", "--frozen-lockfile", "--ignore-scripts"],
        },
        {
          lockfile: "bun.lockb",
          command: "bun",
          args: ["install", "--frozen-lockfile", "--ignore-scripts"],
        },
        {
          lockfile: "npm-shrinkwrap.json",
          command: "npm",
          args: ["ci", "--ignore-scripts"],
        },
        {
          lockfile: "package-lock.json",
          command: "npm",
          args: ["ci", "--ignore-scripts"],
        },
      ]));
  });
