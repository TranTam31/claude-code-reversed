// Module: k4 (lines 384713-384841)
  var k4 = S(() => {
    Vn();
    edr();
    Lm();
    Gb();
    f4();
    Ge();
    Qr();
    st();
    Ir();
    Hrn();
    dv();
    Zt();
    Pr();
    z5();
    F$();
    om();
    _v();
    ((TAo = require("path")),
      (adr = {
        retries: { retries: 10, minTimeout: 5, maxTimeout: 100 },
        onCompromised: (e) => xe(e),
      }),
      (Bid = Se(() =>
        v.looseObject({
          type: v.string().optional(),
          from: v.string(),
          text: v.string(),
          timestamp: v.string(),
          read: v.boolean().optional(),
          color: v.string().optional(),
          summary: v.string().optional(),
        }),
      )));
    idr = new Set();
    wAo = new Map();
    z9e = Se(() =>
      v.object({
        type: v.literal("idle_notification"),
        from: v.string(),
        timestamp: v.string(),
        idleReason: v.enum(["available", "interrupted", "failed"]).optional(),
        summary: v.string().optional(),
        completedTaskId: v.string().optional(),
        completedStatus: v.enum(["resolved", "blocked", "failed"]).optional(),
        failureReason: v.string().optional(),
      }),
    );
    ((_nn = Se(() =>
      v.object({
        type: v.literal("plan_approval_request"),
        from: v.string(),
        timestamp: v.string(),
        planFilePath: v.string(),
        planContent: v.string(),
        requestId: v.string(),
      }),
    )),
      (bnn = Se(() =>
        v.object({
          type: v.literal("plan_approval_response"),
          requestId: v.string(),
          approved: v.boolean(),
          feedback: v.string().optional(),
          timestamp: v.string(),
          permissionMode: o3r().optional(),
        }),
      )),
      (Snn = Se(() =>
        v.object({
          type: v.literal("shutdown_request"),
          requestId: v.string(),
          from: v.string(),
          reason: v.string().optional(),
          timestamp: v.string(),
        }),
      )),
      (NUe = Se(() =>
        v.object({
          type: v.literal("shutdown_approved"),
          requestId: v.string(),
          from: v.string(),
          timestamp: v.string(),
          paneId: v.string().optional(),
          backendType: v.string().optional(),
        }),
      )),
      (kAo = Se(() =>
        v.object({
          type: v.literal("shutdown_rejected"),
          requestId: v.string(),
          from: v.string(),
          reason: v.string(),
          timestamp: v.string(),
        }),
      )));
    KPy = Se(() =>
      v.object({
        type: v.literal("task_assignment"),
        taskId: v.string(),
        subject: v.string(),
        description: v.string(),
        assignedBy: v.string(),
        timestamp: v.string(),
      }),
    );
    ((RAo = Se(() =>
      v.object({
        type: v.literal("task_completed"),
        from: v.string().optional(),
        taskId: v.string(),
        taskSubject: v.string().optional(),
        timestamp: v.string().optional(),
      }),
    )),
      (gpt = Se(() =>
        v.object({
          type: v.literal("teammate_terminated"),
          message: v.string(),
        }),
      )));
    YPy = Se(() =>
      v.object({
        type: v.literal("mode_set_request"),
        mode: o3r(),
        from: v.string(),
      }),
    );
  });
