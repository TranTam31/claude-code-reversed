// Module: wlc (lines 102444-102453)
  var wlc = S(() => {
    Elc();
    ((vlc = x(u1e(), 1)),
      (DXt = x(yCe(), 1)),
      (iGh = new DXt.EndpointCache({
        size: 50,
        params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"],
      })));
    DXt.customEndpointFunctions.aws = vlc.awsEndpointFunctions;
  });
