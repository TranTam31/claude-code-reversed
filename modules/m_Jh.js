// Module: Jh (lines 255851-255893)
  var Jh = S(() => {
    pt();
    pt();
    Ge();
    Nj();
    vo();
    XYr();
    Ga();
    qh();
    ((Xuo = { now: 0, next: 1, later: 2 }),
      (uKg = new Set(["task-notification"])));
    ((Ny = fKg()),
      (als = Ny.markCancelPending),
      (JYr = Ny.consumeCancelPending),
      (wxu = Ny.consumeCancelPendingAcked),
      (Txu = Ny.hasCancelPendingAcked),
      (lls = Ny.isFoldInFlight),
      (Cxu = Ny.suspendMidTurnFold),
      (g8e = Ny.subscribe),
      (y8e = Ny.getCommandQueueSnapshot),
      (Gie = Ny.getCommandQueue),
      (cls = Ny.getCommandQueueLength),
      (fPt = Ny.getMainThreadQueueLength),
      (_8e = Ny.hasCommandsInQueue));
    ((uls = Ny.recheckCommandQueue),
      (HE = Ny.enqueue),
      (cp = Ny.enqueuePendingNotification),
      (Rlt = Ny.dequeue),
      (Irw = Ny.dequeueAll),
      (uee = Ny.peek),
      (b8e = Ny.dequeueAllMatching),
      (dls = Ny.remove),
      (Zuo = Ny.removeByFilter),
      (kxu = Ny.clearCommandQueue),
      (Rrw = Ny.resetCommandQueue),
      (QYr = Ny.popAllEditable),
      (Ixu = Ny.popEditableAt),
      (Rxu = Ny.getCommandsByMaxPriority),
      (pls = Ny.setInFlightDrainBatch),
      (fls = Ny.clearInFlightDrainBatch),
      (mls = Ny.someInFlightDrainCommand));
    Sxu((e) => HE({ agentId: Si(), mode: "prompt", value: `/${e}` }));
  });
