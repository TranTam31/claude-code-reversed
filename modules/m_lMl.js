// Module: LMl (lines 32908-33013)
  var LMl = S(() => {
    II();
    ((PMl = x(require("stream"))), (jxi = Symbol("internals")));
    MMl = class MMl extends PMl.default.Transform {
      constructor(e) {
        e = Gn.toFlatObject(
          e,
          {
            maxRate: 0,
            chunkSize: 65536,
            minChunkSize: 100,
            timeWindow: 500,
            ticksRate: 2,
            samplesCount: 15,
          },
          null,
          (r, n) => !Gn.isUndefined(n[r]),
        );
        super({ readableHighWaterMark: e.chunkSize });
        let t = (this[jxi] = {
          timeWindow: e.timeWindow,
          chunkSize: e.chunkSize,
          maxRate: e.maxRate,
          minChunkSize: e.minChunkSize,
          bytesSeen: 0,
          isCaptured: !1,
          notifiedBytesLoaded: 0,
          ts: Date.now(),
          bytes: 0,
          onReadCallback: null,
        });
        this.on("newListener", (r) => {
          if (r === "progress") {
            if (!t.isCaptured) t.isCaptured = !0;
          }
        });
      }
      _read(e) {
        let t = this[jxi];
        if (t.onReadCallback) t.onReadCallback();
        return super._read(e);
      }
      _transform(e, t, r) {
        let n = this[jxi],
          o = n.maxRate,
          i = this.readableHighWaterMark,
          s = n.timeWindow,
          a = 1000 / s,
          l = o / a,
          c = n.minChunkSize !== !1 ? Math.max(n.minChunkSize, l * 0.01) : 0,
          u = (p, f) => {
            let m = Buffer.byteLength(p);
            if (
              ((n.bytesSeen += m),
              (n.bytes += m),
              n.isCaptured && this.emit("progress", n.bytesSeen),
              this.push(p))
            )
              process.nextTick(f);
            else
              n.onReadCallback = () => {
                ((n.onReadCallback = null), process.nextTick(f));
              };
          },
          d = (p, f) => {
            let m = Buffer.byteLength(p),
              g = null,
              y = i,
              _,
              E = 0;
            if (o) {
              let A = Date.now();
              if (!n.ts || (E = A - n.ts) >= s)
                ((n.ts = A),
                  (_ = l - n.bytes),
                  (n.bytes = _ < 0 ? -_ : 0),
                  (E = 0));
              _ = l - n.bytes;
            }
            if (o) {
              if (_ <= 0)
                return setTimeout(() => {
                  f(null, p);
                }, s - E);
              if (_ < y) y = _;
            }
            if (y && m > y && m - y > c)
              ((g = p.subarray(y)), (p = p.subarray(0, y)));
            u(
              p,
              g
                ? () => {
                    process.nextTick(f, null, g);
                  }
                : f,
            );
          };
        d(e, function p(f, m) {
          if (f) return r(f);
          if (m) d(m, p);
          else r(null);
        });
      }
    };
    Wxi = MMl;
  });
