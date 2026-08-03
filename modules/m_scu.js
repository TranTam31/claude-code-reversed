// Module: scu (lines 200890-200923)
  var scu = S(() => {
    hso();
    ((xbe = x(mso(), 1)),
      (icu = {
        prefix: {
          idle: xbe.default.blue("?"),
          done: xbe.default.green(_rr.tick),
        },
        spinner: {
          interval: 80,
          frames: [
            "\u280B",
            "\u2819",
            "\u2839",
            "\u2838",
            "\u283C",
            "\u2834",
            "\u2826",
            "\u2827",
            "\u2807",
            "\u280F",
          ].map((e) => xbe.default.yellow(e)),
        },
        style: {
          answer: xbe.default.cyan,
          message: xbe.default.bold,
          error: (e) => xbe.default.red(`> ${e}`),
          defaultAnswer: (e) => xbe.default.dim(`(${e})`),
          help: xbe.default.dim,
          highlight: xbe.default.cyan,
          key: (e) => xbe.default.cyan(xbe.default.bold(`<${e}>`)),
        },
      }));
  });
