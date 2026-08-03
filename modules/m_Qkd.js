// Module: qKd (lines 582267-582281)
  var qKd = S(() => {
    ((GKd = x(lBe(), 1)), (VKd = x(fBe(), 1)), (vFo = x(rYe(), 1)));
    Spn = class Spn extends GKd.OTLPExporterBase {
      constructor(e = {}) {
        super(
          vFo.createOtlpHttpExportDelegate(
            vFo.convertLegacyHttpOptions(e, "TRACES", "v1/traces", {
              "Content-Type": "application/x-protobuf",
            }),
            VKd.ProtobufTraceSerializer,
          ),
        );
      }
    };
  });
