// Module: LKd (lines 582209-582223)
  var LKd = S(() => {
    ((PKd = x(lBe(), 1)), (MKd = x(fBe(), 1)), (bFo = x(rYe(), 1)));
    bpn = class bpn extends PKd.OTLPExporterBase {
      constructor(e = {}) {
        super(
          bFo.createOtlpHttpExportDelegate(
            bFo.convertLegacyHttpOptions(e, "LOGS", "v1/logs", {
              "Content-Type": "application/x-protobuf",
            }),
            MKd.ProtobufLogsSerializer,
          ),
        );
      }
    };
  });
