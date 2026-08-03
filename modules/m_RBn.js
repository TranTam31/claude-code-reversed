// Module: RBn (lines 19987-20003)
  var RBn = S(() => {
    D9t = class D9t extends Error {
      constructor(e) {
        let t =
          typeof e === "string"
            ? e
            : e
                .map((r) => {
                  if (r.type === "text") return r.text;
                  return `[${r.type}]`;
                })
                .join(" ");
        super(t);
        ((this.name = "ToolError"), (this.content = e));
      }
    };
  });
