// Module: ryc (lines 115043-115089)
  var ryc = S(() => {
    tyc = require("stream");
    PBi = class PBi extends tyc.Transform {
      priorSignature;
      messageSigner;
      eventStreamCodec;
      systemClockOffsetProvider;
      constructor(e) {
        super({
          autoDestroy: !0,
          readableObjectMode: !0,
          writableObjectMode: !0,
          ...e,
        });
        ((this.priorSignature = e.priorSignature),
          (this.eventStreamCodec = e.eventStreamCodec),
          (this.messageSigner = e.messageSigner),
          (this.systemClockOffsetProvider = e.systemClockOffsetProvider));
      }
      async _transform(e, t, r) {
        try {
          let n = new Date(
              Date.now() + (await this.systemClockOffsetProvider()),
            ),
            o = { ":date": { type: "timestamp", value: n } },
            i = await this.messageSigner.sign(
              {
                message: { body: e, headers: o },
                priorSignature: this.priorSignature,
              },
              { signingDate: n },
            );
          this.priorSignature = i.signature;
          let s = this.eventStreamCodec.encode({
            headers: {
              ...o,
              ":chunk-signature": { type: "binary", value: V7h(i.signature) },
            },
            body: e,
          });
          return (this.push(s), r());
        } catch (n) {
          r(n);
        }
      }
    };
  });
