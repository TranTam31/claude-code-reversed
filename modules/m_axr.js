// Module: axr (lines 801192-801243)
  var axr = S(() => {
    $0();
    Mcf();
    iIa();
    ZDe();
    pWt();
    j$();
    sW();
    nSr();
    YUe();
    THs();
    zJr();
    ake();
    tz();
    zt();
    vt();
    xf();
    np();
    ei();
    Qa();
    Wi();
    E7r();
    Ge();
    st();
    Ir();
    Gx();
    Lct();
    Pr();
    $9e();
    I$();
    lIe();
    BTn();
    Qh();
    (($cf = require("crypto")),
      (Dre = require("fs/promises")),
      (TJe = require("path")));
    pWb = {
      dirty: "has uncommitted changes",
      unpushed: "has commits that are not pushed anywhere",
      in_use: "is claimed by another running job",
      live_lock:
        "is locked \u2014 in use by another live session, or locked by hand",
      remove_failed: "could not be removed",
      unverified: `${I7r} \u2014 remove the directory manually, or delete from the agents view to discard it`,
      shared_record:
        "is also recorded by another finished session \u2014 its files may be that session's work",
      identity_changed:
        "could not be verified \u2014 its resolution changed while being checked; retry the delete (a settled path re-verifies cleanly)",
      records_unreadable:
        "could not be verified against other sessions' records \u2014 a sibling record was unreadable; retry, or inspect ~/.claude/jobs",
    };
  });
