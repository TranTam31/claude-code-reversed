// Module: qIt (lines 181956-181975)
  var qIt = S(() => {
    Zg();
    Wu();
    zt();
    Eo();
    hn();
    Ge();
    st();
    Ir();
    Mg();
    KHg = Se(() =>
      Re.object({
        account: Re.object({
          uuid: Re.string(),
          email: Re.string(),
        }).passthrough(),
        organization: Re.object({ uuid: Re.string() }).passthrough(),
      }).passthrough(),
    );
  });
