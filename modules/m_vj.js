// Module: vj (lines 148152-148219)
  var vj = S(() => {
    Iu = class Iu extends Error {
      constructor(e, t) {
        super(e, t);
        this.name = K6i;
      }
    };
    oxe = class oxe extends Error {
      constructor(e, t, r) {
        let n = {
          error: "unknown",
          errorDescription:
            "An unknown error occurred and no additional details are available.",
        };
        if (efg(t)) n = qGc(t);
        else if (typeof t === "string")
          try {
            let o = JSON.parse(t);
            n = qGc(o);
          } catch (o) {
            if (e === 400)
              n = {
                error: "invalid_request",
                errorDescription: `The service indicated that the request was invalid.

${t}`,
              };
            else
              n = {
                error: "unknown_error",
                errorDescription: `An unknown error has occurred. Response body:

${t}`,
              };
          }
        else
          n = {
            error: "unknown_error",
            errorDescription:
              "An unknown error occurred and no additional details are available.",
          };
        super(
          `${n.error} Status code: ${e}
More details:
${n.errorDescription},`,
          r,
        );
        ((this.statusCode = e), (this.errorResponse = n), (this.name = X5r));
      }
    };
    J5r = class J5r extends Error {
      constructor(e, t) {
        let r = e.join(`
`);
        super(`${t}
${r}`);
        ((this.errors = e), (this.name = Y6i));
      }
    };
    ixe = class ixe extends Error {
      constructor(e) {
        super(e.message, e.cause ? { cause: e.cause } : void 0);
        ((this.scopes = e.scopes),
          (this.getTokenOptions = e.getTokenOptions),
          (this.name = "AuthenticationRequiredError"));
      }
    };
  });
