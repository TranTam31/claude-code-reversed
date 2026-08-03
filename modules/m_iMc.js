// Module: iMc (lines 134093-134108)
  var iMc = S(() => {
    rMc();
    ((nMc = x(u1e(), 1)),
      (aQt = x(yCe(), 1)),
      (Msg = new aQt.EndpointCache({
        size: 50,
        params: [
          "Endpoint",
          "Region",
          "UseDualStack",
          "UseFIPS",
          "UseGlobalEndpoint",
        ],
      })));
    aQt.customEndpointFunctions.aws = nMc.awsEndpointFunctions;
  });
