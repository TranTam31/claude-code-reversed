// Module: uso (lines 200384-200406)
  var uso = S(() => {
    Wes = class Wes extends Error {
      name = "AbortPromptError";
      message = "Prompt was aborted";
      constructor(e) {
        super();
        this.cause = e?.cause;
      }
    };
    Ges = class Ges extends Error {
      name = "CancelPromptError";
      message = "Prompt was canceled";
    };
    Ves = class Ves extends Error {
      name = "ExitPromptError";
    };
    qes = class qes extends Error {
      name = "HookError";
    };
    i9r = class i9r extends Error {
      name = "ValidationError";
    };
  });
