// Module: kLs (lines 458133-458554)
  var kLs = S(() => {
    tSe();
    X8();
    Wi();
    hp();
    Xm();
    mL();
    THe();
    w$e();
    x2e();
    yHo();
    ((jEd = require("os")), (lae = require("path")));
    ((GVy =
      /^"?\$(?:\{[A-Za-z_][A-Za-z0-9_]*\}|[A-Za-z_][A-Za-z0-9_]*)"?\/(?:\*|\$|\/|["']|$)/),
      (VVy =
        /^(?:[A-Za-z_][A-Za-z0-9_]*\+?=[^\s]*\s+)*\\?(?:[^\s=]*\/)?(rm|rmdir)(?:\s|$)/));
    ((Zfr = {
      cd: (e) => {
        let t = qk(e);
        if (t.length === 0) return e.at(-1) === "-" ? ["-"] : [jEd.homedir()];
        return [t[0]];
      },
      ls: (e) => {
        let t = qk(e);
        return t.length > 0 ? t : ["."];
      },
      find: (e) => {
        let t = [],
          r = new Set([
            "-newer",
            "-anewer",
            "-cnewer",
            "-mnewer",
            "-samefile",
            "-path",
            "-wholename",
            "-ilname",
            "-lname",
            "-ipath",
            "-iwholename",
          ]),
          n = /^-newer[acmBt][acmtB]$/,
          o = !1,
          i = !1;
        for (let s = 0; s < e.length; s++) {
          let a = e[s];
          if (!a) continue;
          if (i) {
            t.push(a);
            continue;
          }
          if (a === "--") {
            i = !0;
            continue;
          }
          if (a.startsWith("-")) {
            if (["-H", "-L", "-P"].includes(a)) continue;
            if (((o = !0), r.has(a) || n.test(a))) {
              let l = e[s + 1];
              if (l) (t.push(l), s++);
            }
            continue;
          }
          if (!o) t.push(a);
        }
        return t.length > 0 ? t : ["."];
      },
      mkdir: qk,
      touch: qk,
      rm: qk,
      rmdir: qk,
      mv: qk,
      cp: qk,
      cat: qk,
      head: qk,
      tail: qk,
      sort: qk,
      uniq: qk,
      wc: qk,
      cut: xLs(
        new Set([
          "-d",
          "--delimiter",
          "-f",
          "--fields",
          "-b",
          "--bytes",
          "-c",
          "--characters",
          "--output-delimiter",
        ]),
      ),
      paste: xLs(new Set(["-d", "--delimiters"])),
      column: xLs(
        new Set([
          "-s",
          "--separator",
          "-o",
          "--output-separator",
          "-c",
          "--output-width",
        ]),
      ),
      file: qk,
      stat: qk,
      diff: qk,
      awk: (e) => {
        let t = new Set([
            "-F",
            "--field-separator",
            "-v",
            "--assign",
            "-e",
            "--source",
          ]),
          r = new Set(["-f", "--file", "-E", "--exec"]),
          n = [],
          o = !1,
          i = !1,
          s = !1;
        for (let a = 0; a < e.length; a++) {
          let l = e[a];
          if (l === void 0 || l === null) continue;
          if (!o && !s && l === "--") {
            o = !0;
            continue;
          }
          if (!o && !s && l !== "-" && l.startsWith("-")) {
            let c = l.indexOf("="),
              u = c >= 0 ? l.slice(0, c) : l;
            if (t.has(u)) {
              if (u === "-e" || u === "--source") i = !0;
              if (c < 0) a++;
              continue;
            }
            if (r.has(u)) {
              if (((i = !0), c >= 0)) n.push(l.slice(c + 1));
              else {
                let d = e[a + 1];
                if (d !== void 0) (n.push(d), a++);
              }
              continue;
            }
            continue;
          }
          if (s && !o) {
            let c = WEd(l, ["-f", "--file", "-E", "--exec"]);
            if (c !== void 0) n.push(c);
          }
          if (((s = !0), !i)) {
            i = !0;
            continue;
          }
          n.push(l);
        }
        return n;
      },
      strings: qk,
      hexdump: qk,
      od: qk,
      base64: qk,
      nl: qk,
      sha256sum: qk,
      sha1sum: qk,
      md5sum: qk,
      tr: (e) => {
        let t = e.some(
          (n) =>
            n === "-d" ||
            n === "--delete" ||
            (n.startsWith("-") && n.includes("d")),
        );
        return qk(e).slice(t ? 1 : 2);
      },
      grep: (e) => {
        let r = BEd(
          e,
          new Set([
            "-e",
            "--regexp",
            "-f",
            "--file",
            "--exclude",
            "--include",
            "--exclude-dir",
            "--include-dir",
            "-m",
            "--max-count",
            "-A",
            "--after-context",
            "-B",
            "--before-context",
            "-C",
            "--context",
          ]),
        );
        if (
          r.length === 0 &&
          e.some((n) => ["-r", "-R", "--recursive"].includes(n))
        )
          return ["."];
        return r;
      },
      rg: (e) =>
        BEd(
          e,
          new Set([
            "-e",
            "--regexp",
            "-f",
            "--file",
            "-t",
            "--type",
            "-T",
            "--type-not",
            "-g",
            "--glob",
            "-m",
            "--max-count",
            "--max-depth",
            "-r",
            "--replace",
            "-A",
            "--after-context",
            "-B",
            "--before-context",
            "-C",
            "--context",
          ]),
          ["."],
        ),
      sed: (e) => {
        let t = [],
          r = !1,
          n = !1,
          o = !1,
          i = !1;
        for (let s = 0; s < e.length; s++) {
          if (r) {
            r = !1;
            continue;
          }
          let a = e[s];
          if (!a) continue;
          if (!o && !i && a === "--") {
            o = !0;
            continue;
          }
          if (!o && !i && a !== "-" && a.startsWith("-")) {
            if (["-f", "--file"].includes(a)) {
              let l = e[s + 1];
              if (l) (t.push(l), (r = !0));
              n = !0;
            } else if (["-e", "--expression"].includes(a)) ((r = !0), (n = !0));
            else if (a.includes("e") || a.includes("f")) n = !0;
            continue;
          }
          if (((i = !0), !n)) {
            n = !0;
            continue;
          }
          t.push(a);
        }
        return t;
      },
      jq: (e) => {
        let t = [],
          r = new Set([
            "-e",
            "--expression",
            "--arg",
            "--argjson",
            "--args",
            "--jsonargs",
            "-L",
            "--library-path",
            "--indent",
            "--tab",
          ]),
          n = !1,
          o = !1;
        for (let i = 0; i < e.length; i++) {
          let s = e[i];
          if (s === void 0 || s === null) continue;
          if (!o && s === "--") {
            o = !0;
            continue;
          }
          if (!o && s.startsWith("-")) {
            let a = s.indexOf("="),
              l = a >= 0 ? s.slice(0, a) : s;
            if (["-e", "--expression"].includes(l)) n = !0;
            if (["-f", "--from-file"].includes(l)) {
              if (((n = !0), a >= 0)) t.push(s.slice(a + 1));
              else {
                let c = e[i + 1];
                if (c !== void 0) (t.push(c), i++);
              }
              continue;
            }
            if (["--slurpfile", "--rawfile"].includes(l)) {
              let c = e[i + 2];
              if (c !== void 0) t.push(c);
              i += 2;
              continue;
            }
            if (r.has(l) && a < 0) i++;
            continue;
          }
          if (!n) {
            n = !0;
            continue;
          }
          t.push(s);
        }
        return t;
      },
      git: (e) => {
        if (e.length >= 1 && e[0] === "diff") {
          if (e.includes("--no-index")) return qk(e.slice(1));
        }
        return [];
      },
    }),
      (GEd = Object.keys(Zfr)),
      (qVy = {
        cd: "change directories to",
        ls: "list files in",
        find: "search files in",
        mkdir: "create directories in",
        touch: "create or modify files in",
        rm: "remove files from",
        rmdir: "remove directories from",
        mv: "move files to/from",
        cp: "copy files to/from",
        cat: "concatenate files from",
        head: "read the beginning of files from",
        tail: "read the end of files from",
        sort: "sort contents of files from",
        uniq: "filter duplicate lines from files in",
        wc: "count lines/words/bytes in files from",
        cut: "extract columns from files in",
        paste: "merge files from",
        column: "format files from",
        tr: "transform text from files in",
        file: "examine file types in",
        stat: "read file stats from",
        diff: "compare files from",
        awk: "process text from files in",
        strings: "extract strings from files in",
        hexdump: "display hex dump of files from",
        od: "display octal dump of files from",
        base64: "encode/decode files from",
        nl: "number lines in files from",
        grep: "search for patterns in files from",
        rg: "search for patterns in files from",
        sed: "edit files in",
        git: "access files with git from",
        jq: "process JSON from files in",
        sha256sum: "compute SHA-256 checksums for files in",
        sha1sum: "compute SHA-1 checksums for files in",
        md5sum: "compute MD5 checksums for files in",
      }),
      (QNt = {
        cd: "read",
        ls: "read",
        find: "read",
        mkdir: "create",
        touch: "create",
        rm: "write",
        rmdir: "write",
        mv: "write",
        cp: "write",
        cat: "read",
        head: "read",
        tail: "read",
        sort: "read",
        uniq: "read",
        wc: "read",
        cut: "read",
        paste: "read",
        column: "read",
        tr: "read",
        file: "read",
        stat: "read",
        diff: "read",
        awk: "read",
        strings: "read",
        hexdump: "read",
        od: "read",
        base64: "read",
        nl: "read",
        grep: "read",
        rg: "read",
        sed: "write",
        git: "read",
        jq: "read",
        sha256sum: "read",
        sha1sum: "read",
        md5sum: "read",
      }),
      (zVy = {
        mv: (e) => !e.some((t) => t?.startsWith("-")),
        cp: (e) => !e.some((t) => t?.startsWith("-")),
        cd: (e) => {
          let t = !1,
            r = 0;
          for (let n of e) {
            if (!t) {
              if (n === "--") {
                t = !0;
                continue;
              }
              if (n.startsWith("-") && n !== "-") continue;
              t = !0;
            }
            r++;
          }
          return r <= 1;
        },
      }));
  });
