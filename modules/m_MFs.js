// Module: MFs (lines 511145-511214)
  var MFs = S(() => {
    Vn();
    hct();
    kj();
    xS();
    Ge();
    em();
    Ar();
    st();
    Gx();
    Zt();
    zt();
    Zr();
    LY();
    oqe();
    vt();
    Hoo();
    ltr();
    hMd();
    ((_Do = require("crypto")),
      (Cb = require("fs/promises")),
      (sw = require("path")),
      (EFs = Y$t * 6 + 16384));
    ((Tt_ = [".md", ".txt", ".json", ".jsonl"]),
      (z$t = D8r),
      (Ct_ = Se(() => vMd(EMd))));
    ((TFs = `${z$t}-basis`),
      (gMd = vtr * 512),
      (Ht_ = Se(() =>
        vMd(AMd).extend({
          entries: v.array(v.tuple([v.string(), v.string(), v.string()])),
          deletes: v.array(v.tuple([v.string(), v.number(), v.number()])),
        }),
      )));
    Pt_ = new Set([
      "mount_dir_foreign_partition",
      "mount_dir_unmanifested_nonempty",
    ]);
    jKe = new Map();
    DFs = {
      store_full:
        "The shared memory store is full \u2014 the server is rejecting new memory files (updates to already-synced files still work). " +
        "Consolidate or delete memory files to free space; sync then resumes automatically.",
      content_too_large:
        "The server rejected a memory file over its per-file size limit. Split the file's content into smaller files.",
      content_secret:
        "The server rejected a memory file that appears to contain a credential or API key. Remove the credential from the file (and rotate it if it is real).",
      invalid_path:
        "The server rejected a memory file's path (too long, too deep, or containing invalid characters). Rename the offending file.",
      store_archived:
        "The memory store has been archived server-side and no longer accepts writes.",
      mount_dir_unreadable:
        "A directory inside this memory store's local folder is unreadable (permission denied), so sync cannot verify or persist local files. Fix its permissions; sync then resumes automatically.",
    };
    q$t = {
      success: !0,
      filesWritten: 0,
      filesDeleted: 0,
      conflicts: 0,
      secretsSkipped: 0,
    };
    ((Xln = {
      success: !0,
      skipped: !0,
      entriesListed: 0,
      filesWritten: 0,
      filesDeleted: 0,
    }),
      (SFs = Xln));
  });
