// Module: eal (lines 907397-907407)
  var eal = S(() => {
    Vn();
    EMn = a_({
      kind: "chrome_install_upsell",
      payload: Se(() => v.object({})),
      result: Se(() =>
        v.enum(["install", "not_now", "dont_ask_again", "cancelled"]),
      ),
      default: "cancelled",
    });
  });
