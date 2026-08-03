// Module: OQu (lines 363815-363884)
  var OQu = S(() => {
    nxy = new RegExp(`[${uEo}]+|\\s+|[^${uEo}]`, "ug");
    PQu = class PQu extends S9e {
      equals(e, t, r) {
        if (r.ignoreCase) ((e = e.toLowerCase()), (t = t.toLowerCase()));
        return e.trim() === t.trim();
      }
      tokenize(e, t = {}) {
        let r;
        if (t.intlSegmenter) {
          let i = t.intlSegmenter;
          if (i.resolvedOptions().granularity != "word")
            throw Error(
              'The segmenter passed must have a granularity of "word"',
            );
          r = Cws(e, i);
        } else r = e.match(nxy) || [];
        let n = [],
          o = null;
        return (
          r.forEach((i) => {
            if (/\s/.test(i))
              if (o == null) n.push(i);
              else n.push(n.pop() + i);
            else if (o != null && /\s/.test(o))
              if (n[n.length - 1] == o) n.push(n.pop() + i);
              else n.push(o + i);
            else n.push(i);
            o = i;
          }),
          n
        );
      }
      join(e) {
        return e
          .map((t, r) => {
            if (r == 0) return t;
            else return t.replace(/^\s+/, "");
          })
          .join("");
      }
      postProcess(e, t) {
        if (!e || t.oneChangePerToken) return e;
        let r = null,
          n = null,
          o = null;
        if (
          (e.forEach((i) => {
            if (i.added) n = i;
            else if (i.removed) o = i;
            else {
              if (n || o) DQu(r, o, n, i, t.intlSegmenter);
              ((r = i), (n = null), (o = null));
            }
          }),
          n || o)
        )
          DQu(r, o, n, null, t.intlSegmenter);
        return e;
      }
    };
    oxy = new PQu();
    MQu = class MQu extends S9e {
      tokenize(e) {
        let t = new RegExp(`(\\r?\\n)|[${uEo}]+|[^\\S\\n\\r]+|[^${uEo}]`, "ug");
        return e.match(t) || [];
      }
    };
    LQu = new MQu();
  });
