// Module: Rrd (lines 375521-375541)
  var Rrd = S(() => {
    Vn();
    f0s();
    vo();
    wvo();
    TRy = Se(() => v.object({ todos: zdt() }));
    ((xRy = /^Task #(\S+) created successfully/),
      (HRy = Se(() =>
        v.object({ subject: v.string(), activeForm: v.string().optional() }),
      )),
      (kRy = Se(() =>
        v.object({
          taskId: v.string(),
          status: v
            .enum(["pending", "in_progress", "completed", "deleted"])
            .optional(),
          subject: v.string().optional(),
          activeForm: v.string().optional(),
        }),
      )));
  });
