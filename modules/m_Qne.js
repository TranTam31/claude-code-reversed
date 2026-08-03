// Module: Qne (lines 22531-22589)
  var Qne = S(() => {
    s5e();
    $tt();
    rBn();
    zTi();
    $N();
    F0e();
    lBn();
    fBn();
    FN();
    c0i();
    $9t();
    hBn();
    j0i();
    Z0i();
    B0i();
    Q0i();
    rBn();
    pD();
    GFr();
    $tt();
    ((tCi = $b),
      ($Bn = new WeakMap()),
      (eCi = new WeakSet()),
      (Wkl = function () {
        return this.baseURL !== "https://api.anthropic.com";
      }));
    $b.Anthropic = tCi;
    $b.HUMAN_PROMPT = Gkl;
    $b.AI_PROMPT = Vkl;
    $b.DEFAULT_TIMEOUT = 600000;
    $b.AnthropicError = js;
    $b.APIError = hi;
    $b.APIConnectionError = MO;
    $b.APIConnectionTimeoutError = hye;
    $b.APIUserAbortError = Ty;
    $b.NotFoundError = I0t;
    $b.ConflictError = NFr;
    $b.RateLimitError = FFr;
    $b.BadRequestError = LFr;
    $b.AuthenticationError = k0t;
    $b.InternalServerError = UFr;
    $b.PermissionDeniedError = OFr;
    $b.UnprocessableEntityError = $Fr;
    $b.toFile = _Bn;
    mq = class mq extends $b {
      constructor() {
        super(...arguments);
        ((this.completions = new Gtt(this)),
          (this.messages = new vQ(this)),
          (this.models = new N9t(this)),
          (this.beta = new _M(this)));
      }
    };
    mq.Completions = Gtt;
    mq.Messages = vQ;
    mq.Models = N9t;
    mq.Beta = _M;
  });
