// Module: Nqd (lines 576493-576508)
  var Nqd = S(() => {
    ((Lqd = x(IOo(), 1)), (Oqd = x(fBe(), 1)), (MNo = x(rYe(), 1)));
    Ydn = class Ydn extends Lqd.OTLPMetricExporterBase {
      constructor(e) {
        super(
          MNo.createOtlpHttpExportDelegate(
            MNo.convertLegacyHttpOptions(e ?? {}, "METRICS", "v1/metrics", {
              "Content-Type": "application/x-protobuf",
            }),
            Oqd.ProtobufMetricsSerializer,
          ),
          e,
        );
      }
    };
  });
