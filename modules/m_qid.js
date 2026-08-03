// Module: qid (lines 384843-384850)
  var qid = S(() => {
    Sxs = class Sxs extends Error {
      constructor(e) {
        super(e);
        this.name = "PlanPreconditionError";
      }
    };
  });
