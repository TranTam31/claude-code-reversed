// Module: Fit (lines 152856-152931)
  var Fit = S(() => {
    W_e();
    _6e();
    /*! @azure/msal-common v15.13.1 2025-10-29 */ ((BM = {
      [Wkt]: "A redirect URI is required for all calls, and none has been set.",
      [NVr]: "Could not parse the given claims request object.",
      [Gkt]:
        "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options",
      [mNe]: "URL could not be parsed into appropriate segments.",
      [Vkt]: "URL was empty or null.",
      [qkt]:
        "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token.",
      [Nit]: "Given claims parameter must be a stringified JSON object.",
      [zkt]: "Token request was empty and not found in cache.",
      [Kkt]: "The logout request was null or undefined.",
      [$Vr]:
        'code_challenge_method passed is invalid. Valid values are "plain" and "S256".',
      [Ykt]:
        "Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request",
      [$it]:
        "Invalid cloudDiscoveryMetadata provided. Must be a stringified JSON object containing tenant_discovery_endpoint and metadata fields",
      [Xkt]:
        "Invalid authorityMetadata provided. Must by a stringified JSON object containing authorization_endpoint, token_endpoint, issuer fields.",
      [Jkt]:
        "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter.",
      [y6e]:
        "Missing sshJwk in SSH certificate request. A stringified JSON Web Key is required when using the SSH authentication scheme.",
      [FVr]:
        "Missing sshKid in SSH certificate request. A string that uniquely identifies the public SSH key is required when using the SSH authentication scheme.",
      [UVr]:
        "Unable to find an authentication header containing server nonce. Either the Authentication-Info or WWW-Authenticate headers must be present in order to obtain a server nonce.",
      [BVr]: "Invalid authentication header provided",
      [jVr]:
        "Cannot set OIDCOptions parameter. Please change the protocol mode to OIDC or use a non-Microsoft authority.",
      [WVr]:
        "Cannot set allowPlatformBroker parameter to true when not in AAD protocol mode.",
      [GVr]:
        "Authority mismatch error. Authority provided in login request or PublicClientApplication config does not match the environment of the provided account. Please use a matching account or make an interactive request to login to this authority.",
      [qVr]:
        "Invalid authorize post body parameters provided. If you are using authorizePostBodyParameters, the request method must be POST. Please check the request method and parameters.",
      [VVr]:
        "Invalid request method for EAR protocol mode. The request method cannot be GET when using EAR protocol mode. Please change the request method to POST.",
    }),
      (r8i = {
        redirectUriNotSet: { code: Wkt, desc: BM[Wkt] },
        claimsRequestParsingError: { code: NVr, desc: BM[NVr] },
        authorityUriInsecure: { code: Gkt, desc: BM[Gkt] },
        urlParseError: { code: mNe, desc: BM[mNe] },
        urlEmptyError: { code: Vkt, desc: BM[Vkt] },
        emptyScopesError: { code: qkt, desc: BM[qkt] },
        invalidClaimsRequest: { code: Nit, desc: BM[Nit] },
        tokenRequestEmptyError: { code: zkt, desc: BM[zkt] },
        logoutRequestEmptyError: { code: Kkt, desc: BM[Kkt] },
        invalidCodeChallengeMethod: { code: $Vr, desc: BM[$Vr] },
        invalidCodeChallengeParams: { code: Ykt, desc: BM[Ykt] },
        invalidCloudDiscoveryMetadata: { code: $it, desc: BM[$it] },
        invalidAuthorityMetadata: { code: Xkt, desc: BM[Xkt] },
        untrustedAuthority: { code: Jkt, desc: BM[Jkt] },
        missingSshJwk: { code: y6e, desc: BM[y6e] },
        missingSshKid: { code: FVr, desc: BM[FVr] },
        missingNonceAuthenticationHeader: { code: UVr, desc: BM[UVr] },
        invalidAuthenticationHeader: { code: BVr, desc: BM[BVr] },
        cannotSetOIDCOptions: { code: jVr, desc: BM[jVr] },
        cannotAllowPlatformBroker: { code: WVr, desc: BM[WVr] },
        authorityMismatch: { code: GVr, desc: BM[GVr] },
        invalidAuthorizePostBodyParameters: { code: qVr, desc: BM[qVr] },
        invalidRequestMethodForEAR: { code: VVr, desc: BM[VVr] },
      }));
    EZt = class EZt extends hg {
      constructor(e) {
        super(e, BM[e]);
        ((this.name = "ClientConfigurationError"),
          Object.setPrototypeOf(this, EZt.prototype));
      }
    };
  });
