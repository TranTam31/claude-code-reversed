// Module: W1c (lines 136800-136809)
  var W1c = S(() => {
    U1c();
    ((B1c = x(u1e(), 1)),
      (fQt = x(yCe(), 1)),
      (Vag = new fQt.EndpointCache({
        size: 50,
        params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"],
      })));
    fQt.customEndpointFunctions.aws = B1c.awsEndpointFunctions;
  });
