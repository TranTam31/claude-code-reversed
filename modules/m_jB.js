// Module: jB (lines 152503-152619)
  var jB = S(() => {
    W_e();
    vU();
    /*! @azure/msal-common v15.13.1 2025-10-29 */ ((gg = {
      [Rit]: "The client info could not be parsed/decoded correctly",
      [Ckt]: "The client info was empty",
      [Dit]: "Token cannot be parsed",
      [xkt]: "The token is null or empty",
      [fZ]: "Endpoints cannot be resolved",
      [Hkt]: "Network request failed",
      [kkt]:
        "Could not retrieve endpoints. Check your authority and verify the .well-known/openid-configuration endpoint returns the required endpoints.",
      [Ikt]: "The hash parameters could not be deserialized",
      [lxe]: "State was not the expected format",
      [Rkt]: "State mismatch error",
      [Pit]: "State not found",
      [Dkt]: "Nonce mismatch error",
      [p6e]:
        "Max Age was requested and the ID token is missing the auth_time variable. auth_time is an optional claim and is not enabled by default - it must be enabled. See https://aka.ms/msaljs/optional-claims for more information.",
      [Pkt]:
        "Max Age is set to 0, or too much time has elapsed since the last end-user authentication.",
      [vVr]:
        "The cache contains multiple tokens satisfying the requirements. Call AcquireToken again providing more requirements such as authority or account.",
      [AVr]:
        "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account",
      [Mkt]:
        "The cache contains multiple appMetadata satisfying the given parameters. Please pass more info to obtain the correct appMetadata",
      [Lkt]:
        "Token request cannot be made without authorization code or refresh token.",
      [Okt]: "Cannot remove null or empty scope from ScopeSet",
      [Nkt]: "Cannot append ScopeSet",
      [Mit]: "Empty input ScopeSet cannot be processed",
      [wVr]:
        "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true.",
      [TVr]: "Device code is expired.",
      [CVr]: "Device code stopped polling for unknown reasons.",
      [f6e]:
        "Please pass an account object, silent flow is not supported without account information",
      [$kt]: "Cache record object was null or undefined.",
      [m6e]: "Invalid environment when attempting to create cache entry",
      [xVr]: "No account found in cache for given key.",
      [Lit]: "No crypto object detected.",
      [HVr]: "Unexpected credential type.",
      [kVr]:
        "Client assertion must meet requirements described in https://tools.ietf.org/html/rfc7515",
      [IVr]:
        "Client credential (secret, certificate, or assertion) must not be empty when creating a confidential client. An application should at most have one credential",
      [h6e]:
        "Cannot return token from cache because it must be refreshed. This may be due to one of the following reasons: forceRefresh parameter is set to true, claims have been requested, there is no cached access token or it is expired.",
      [RVr]: "User defined timeout for device code polling reached",
      [Fkt]: "Cannot generate a POP jwt if the token_claims are not populated",
      [Ukt]:
        "Server response does not contain an authorization code to proceed",
      [DVr]: "Could not remove the credential's binding key from storage.",
      [Bkt]: "The provided authority does not support logout",
      [jkt]:
        "A keyId value is missing from the requested bound token's cache record and is required to match the token to it's stored binding key.",
      [PVr]: "No network connectivity. Check your internet connection.",
      [MVr]: "User cancelled the flow.",
      [LVr]:
        "A tenant id - not common, organizations, or consumers - must be specified when using the client_credentials flow.",
      [l_]: "This method has not been implemented",
      [OVr]: "The nested app auth bridge is disabled",
    }),
      (e8i = {
        clientInfoDecodingError: { code: Rit, desc: gg[Rit] },
        clientInfoEmptyError: { code: Ckt, desc: gg[Ckt] },
        tokenParsingError: { code: Dit, desc: gg[Dit] },
        nullOrEmptyToken: { code: xkt, desc: gg[xkt] },
        endpointResolutionError: { code: fZ, desc: gg[fZ] },
        networkError: { code: Hkt, desc: gg[Hkt] },
        unableToGetOpenidConfigError: { code: kkt, desc: gg[kkt] },
        hashNotDeserialized: { code: Ikt, desc: gg[Ikt] },
        invalidStateError: { code: lxe, desc: gg[lxe] },
        stateMismatchError: { code: Rkt, desc: gg[Rkt] },
        stateNotFoundError: { code: Pit, desc: gg[Pit] },
        nonceMismatchError: { code: Dkt, desc: gg[Dkt] },
        authTimeNotFoundError: { code: p6e, desc: gg[p6e] },
        maxAgeTranspired: { code: Pkt, desc: gg[Pkt] },
        multipleMatchingTokens: { code: vVr, desc: gg[vVr] },
        multipleMatchingAccounts: { code: AVr, desc: gg[AVr] },
        multipleMatchingAppMetadata: { code: Mkt, desc: gg[Mkt] },
        tokenRequestCannotBeMade: { code: Lkt, desc: gg[Lkt] },
        removeEmptyScopeError: { code: Okt, desc: gg[Okt] },
        appendScopeSetError: { code: Nkt, desc: gg[Nkt] },
        emptyInputScopeSetError: { code: Mit, desc: gg[Mit] },
        DeviceCodePollingCancelled: { code: wVr, desc: gg[wVr] },
        DeviceCodeExpired: { code: TVr, desc: gg[TVr] },
        DeviceCodeUnknownError: { code: CVr, desc: gg[CVr] },
        NoAccountInSilentRequest: { code: f6e, desc: gg[f6e] },
        invalidCacheRecord: { code: $kt, desc: gg[$kt] },
        invalidCacheEnvironment: { code: m6e, desc: gg[m6e] },
        noAccountFound: { code: xVr, desc: gg[xVr] },
        noCryptoObj: { code: Lit, desc: gg[Lit] },
        unexpectedCredentialType: { code: HVr, desc: gg[HVr] },
        invalidAssertion: { code: kVr, desc: gg[kVr] },
        invalidClientCredential: { code: IVr, desc: gg[IVr] },
        tokenRefreshRequired: { code: h6e, desc: gg[h6e] },
        userTimeoutReached: { code: RVr, desc: gg[RVr] },
        tokenClaimsRequired: { code: Fkt, desc: gg[Fkt] },
        noAuthorizationCodeFromServer: { code: Ukt, desc: gg[Ukt] },
        bindingKeyNotRemovedError: { code: DVr, desc: gg[DVr] },
        logoutNotSupported: { code: Bkt, desc: gg[Bkt] },
        keyIdMissing: { code: jkt, desc: gg[jkt] },
        noNetworkConnectivity: { code: PVr, desc: gg[PVr] },
        userCanceledError: { code: MVr, desc: gg[MVr] },
        missingTenantIdError: { code: LVr, desc: gg[LVr] },
        nestedAppAuthBridgeDisabled: { code: OVr, desc: gg[OVr] },
      }));
    Oit = class Oit extends hg {
      constructor(e, t) {
        super(e, t ? `${gg[e]}: ${t}` : gg[e]);
        ((this.name = "ClientAuthError"),
          Object.setPrototypeOf(this, Oit.prototype));
      }
    };
  });
