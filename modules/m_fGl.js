// Module: fGl (lines 65676-65727)
  var fGl = S(() => {
    ((Que = Array(20)
      .fill(0)
      .map((e, t) => " ".repeat(t))),
      (wMi = {
        " ": {
          "\n": Array(200)
            .fill(0)
            .map(
              (e, t) =>
                `
` + " ".repeat(t),
            ),
          "\r": Array(200)
            .fill(0)
            .map((e, t) => "\r" + " ".repeat(t)),
          "\r\n": Array(200)
            .fill(0)
            .map(
              (e, t) =>
                `\r
` + " ".repeat(t),
            ),
        },
        "\t": {
          "\n": Array(200)
            .fill(0)
            .map(
              (e, t) =>
                `
` + "\t".repeat(t),
            ),
          "\r": Array(200)
            .fill(0)
            .map((e, t) => "\r" + "\t".repeat(t)),
          "\r\n": Array(200)
            .fill(0)
            .map(
              (e, t) =>
                `\r
` + "\t".repeat(t),
            ),
        },
      }),
      (pGl = [
        `
`,
        "\r",
        `\r
`,
      ]));
  });
