// Module: wvo (lines 375427-375438)
  var wvo = S(() => {
    Vn();
    ((ARy = Se(() => v.enum(["pending", "in_progress", "completed"]))),
      (wRy = Se(() =>
        v.object({
          content: v.string().min(1, "Content cannot be empty"),
          status: ARy(),
          activeForm: v.string().min(1, "Active form cannot be empty"),
        }),
      )),
      (zdt = Se(() => v.array(wRy()))));
  });
