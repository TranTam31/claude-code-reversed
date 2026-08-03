// Module: DDo (lines 515197-515217)
  var DDo = S(() => {
    _pe();
    st();
    Ja();
    Ni();
    Wi();
    Pr();
    p8e();
    ((wLd = require("crypto")),
      (tUs = require("fs")),
      (gmt = require("fs/promises")),
      (rUs = require("path")));
    gn_ = [
      [/^Internal Error(?: \(\d+\))?: /, "internal_error"],
      [/^Command Line Error(?: \(\d+\))?: /, "command_line_error"],
      [/^Config Error(?: \(\d+\))?: /, "config_error"],
      [/^Unimplemented Feature(?: \(\d+\))?: /, "unimplemented_feature"],
      [/^I\/O Error(?: \(\d+\))?: /, "io_output"],
      [/^Syntax (?:Error|Warning)(?: \(\d+\))?: /, "syntax_diagnostics"],
    ];
  });
