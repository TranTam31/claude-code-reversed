// Module: ebu (lines 227503-227524)
  var ebu = S(() => {
    ((X_u = x(require("net"))),
      (Q_u = x(require("net"))),
      (J_u = ((e) => (
        (e[(e.connect = 1)] = "connect"),
        (e[(e.bind = 2)] = "bind"),
        (e[(e.udp = 3)] = "udp"),
        e
      ))(J_u || {})),
      (nos = ((e) => (
        (e[(e.REQUEST_GRANTED = 0)] = "REQUEST_GRANTED"),
        (e[(e.GENERAL_FAILURE = 1)] = "GENERAL_FAILURE"),
        (e[(e.CONNECTION_NOT_ALLOWED = 2)] = "CONNECTION_NOT_ALLOWED"),
        (e[(e.NETWORK_UNREACHABLE = 3)] = "NETWORK_UNREACHABLE"),
        (e[(e.HOST_UNREACHABLE = 4)] = "HOST_UNREACHABLE"),
        (e[(e.CONNECTION_REFUSED = 5)] = "CONNECTION_REFUSED"),
        (e[(e.TTL_EXPIRED = 6)] = "TTL_EXPIRED"),
        (e[(e.COMMAND_NOT_SUPPORTED = 7)] = "COMMAND_NOT_SUPPORTED"),
        (e[(e.ADDRESS_TYPE_NOT_SUPPORTED = 8)] = "ADDRESS_TYPE_NOT_SUPPORTED"),
        e
      ))(nos || {})));
  });
