// Module: _Cs (lines 380432-380440)
  var _Cs = S(() => {
    Vn();
    eAo = a_({
      kind: "it2_setup",
      payload: Se(() => v.object({ tmuxAvailable: v.boolean() })),
      result: Se(() => v.enum(["installed", "use-tmux", "cancelled"])),
      default: "cancelled",
    });
  });
