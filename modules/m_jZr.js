// Module: jZr (lines 335031-335081)
  var jZr = S(() => {
    Zt();
    XLt();
    b_y =
      /[\x00-\x1f\x7f-\x9f#?,:[\]\u00AD\u061C\u200B-\u200F\u2026\u2028\u2029\u202A-\u202E\u2066-\u2069\uFEFF\uFF0C\uFF1A\uFF3B\uFF3D]/;
    Flr = new Map();
    idt = new Set(["update_sharing", "add_member", "update_member_role"]);
    UZr = new Set();
    Pqu = new Set();
    Lqu = new Set();
    Fqu = {
      write_files: (e) => {
        let t = e.files;
        if (!Array.isArray(t)) return null;
        let r = [];
        for (let n of t) {
          let o = n?.path;
          if (typeof o !== "string") return null;
          r.push(o);
        }
        return { targets: r, set: "writes" };
      },
      delete_files: (e) => {
        if (e.paths !== void 0 && e.files !== void 0) return null;
        let t = [];
        if (Array.isArray(e.paths)) {
          for (let r of e.paths) {
            if (typeof r !== "string") return null;
            t.push(r);
          }
          return { targets: t, set: "deletes" };
        }
        if (Array.isArray(e.files)) {
          for (let r of e.files) {
            let n = r?.path;
            if (typeof n !== "string") return null;
            t.push(n);
          }
          return { targets: t, set: "deletes" };
        }
        return null;
      },
      create_support_js: (e) => {
        let t = e.path;
        if (t === void 0 || t === "")
          return { targets: ["support.js"], set: "writes" };
        if (typeof t !== "string") return null;
        return { targets: [t], set: "writes" };
      },
    };
  });
