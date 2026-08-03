// Module: X8 (lines 603222-603277)
  var X8 = S(() => {
    orp();
    tSe();
    S$e();
    l8e();
    ((F6s = new Set(["program", "list", "pipeline"])),
      (irp = new Set([
        "&&",
        "||",
        "|",
        ";",
        "&",
        "|&",
        `
`,
      ])));
    $6s = new Set([
      "command_substitution",
      "process_substitution",
      "expansion",
      "simple_expansion",
      "arithmetic_expansion",
    ]);
    T1_ = new Set(["ansi_c_string", "translated_string"]);
    srp = new Set([
      "<",
      ">",
      ">>",
      "<<",
      "<<-",
      "<<<",
      "<&",
      ">&",
      "&>",
      "&>>",
      ">|",
      ">&-",
      "<&-",
      "file_descriptor",
      "heredoc_start",
      "heredoc_body",
      "heredoc_content",
      "heredoc_end",
    ]);
    ((C1_ = new Set(["word", "string", "raw_string", "number"])),
      (x1_ = /(?:^|[^\\])(?:\\\\)*[;|&<>]/),
      (H1_ = /(?:^|[^\\])(?:\\\\)*\\$/));
    ((lrp = rrp({
      toolName: "Bash",
      policySpec: I1_,
      eventName: "tengu_bash_prefix",
      querySource: "bash_extract_prefix",
      preCheck: (e) => (k1_(e) ? { commandPrefix: e } : null),
    })),
      (Jsn = nrp(lrp, LE)));
  });
