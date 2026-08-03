// Module: UDd (lines 504181-504241)
  var UDd = S(() => {
    q$s();
    Cbe();
    MDd();
    F$t();
    LDd = new Set(["pwsh", "pwsh.exe", "powershell", "powershell.exe"]);
    sZy = new Set(["/", "\u2013", "\u2014", "\u2015"]);
    dZy = new Set([
      "invoke-webrequest",
      "iwr",
      "invoke-restmethod",
      "irm",
      "new-object",
      "start-bitstransfer",
    ]);
    $Dd = new Set([
      "where-object",
      "sort-object",
      "select-object",
      "group-object",
      "format-table",
      "format-list",
      "format-wide",
      "format-custom",
    ]);
    xZy = new Set([
      "register-scheduledtask",
      "new-scheduledtask",
      "new-scheduledtaskaction",
      "set-scheduledtask",
    ]);
    kZy = new Set([
      "set-item",
      "si",
      "new-item",
      "ni",
      "remove-item",
      "ri",
      "del",
      "rm",
      "rd",
      "rmdir",
      "erase",
      "clear-item",
      "cli",
      "set-content",
      "add-content",
      "ac",
    ]);
    DZy = new Set([
      "set-alias",
      "sal",
      "new-alias",
      "nal",
      "set-variable",
      "sv",
      "new-variable",
      "nv",
    ]);
    MZy = new Set(["invoke-wmimethod", "iwmi", "invoke-cimmethod", "icim"]);
  });
