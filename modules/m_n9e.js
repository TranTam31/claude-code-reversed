// Module: n9e (lines 340105-340114)
  var n9e = S(() => {
    r9e = class r9e extends Error {
      consent;
      constructor(e) {
        super("first-party design MCP server requires consent");
        this.consent = e;
        this.name = "FirstPartyDesignNeedsConsentError";
      }
    };
  });
