// Module: T6r (lines 158660-158754)
  var T6r = S(() => {
    N0();
    /*! @azure/msal-node v3.8.1 2025-10-29 */ VB = {
      invalidLoopbackAddressType: {
        code: "invalid_loopback_server_address_type",
        desc: "Loopback server address is not type string. This is unexpected.",
      },
      unableToLoadRedirectUri: {
        code: "unable_to_load_redirectUrl",
        desc: "Loopback server callback was invoked without a url. This is unexpected.",
      },
      noAuthCodeInResponse: {
        code: "no_auth_code_in_response",
        desc: "No auth code found in the server response. Please check your network trace to determine what happened.",
      },
      noLoopbackServerExists: {
        code: "no_loopback_server_exists",
        desc: "No loopback server exists yet.",
      },
      loopbackServerAlreadyExists: {
        code: "loopback_server_already_exists",
        desc: "Loopback server already exists. Cannot create another.",
      },
      loopbackServerTimeout: {
        code: "loopback_server_timeout",
        desc: "Timed out waiting for auth code listener to be registered.",
      },
      stateNotFoundError: {
        code: "state_not_found",
        desc: "State not found. Please verify that the request originated from msal.",
      },
      thumbprintMissing: {
        code: "thumbprint_missing_from_client_certificate",
        desc: "Client certificate does not contain a SHA-1 or SHA-256 thumbprint.",
      },
      redirectUriNotSupported: {
        code: "redirect_uri_not_supported",
        desc: "RedirectUri is not supported in this scenario. Please remove redirectUri from the request.",
      },
    };
    jM = class jM extends hg {
      constructor(e, t) {
        super(e, t);
        this.name = "NodeAuthError";
      }
      static createInvalidLoopbackAddressTypeError() {
        return new jM(
          VB.invalidLoopbackAddressType.code,
          `${VB.invalidLoopbackAddressType.desc}`,
        );
      }
      static createUnableToLoadRedirectUrlError() {
        return new jM(
          VB.unableToLoadRedirectUri.code,
          `${VB.unableToLoadRedirectUri.desc}`,
        );
      }
      static createNoAuthCodeInResponseError() {
        return new jM(
          VB.noAuthCodeInResponse.code,
          `${VB.noAuthCodeInResponse.desc}`,
        );
      }
      static createNoLoopbackServerExistsError() {
        return new jM(
          VB.noLoopbackServerExists.code,
          `${VB.noLoopbackServerExists.desc}`,
        );
      }
      static createLoopbackServerAlreadyExistsError() {
        return new jM(
          VB.loopbackServerAlreadyExists.code,
          `${VB.loopbackServerAlreadyExists.desc}`,
        );
      }
      static createLoopbackServerTimeoutError() {
        return new jM(
          VB.loopbackServerTimeout.code,
          `${VB.loopbackServerTimeout.desc}`,
        );
      }
      static createStateNotFoundError() {
        return new jM(VB.stateNotFoundError.code, VB.stateNotFoundError.desc);
      }
      static createThumbprintMissingError() {
        return new jM(VB.thumbprintMissing.code, VB.thumbprintMissing.desc);
      }
      static createRedirectUriNotSupportedError() {
        return new jM(
          VB.redirectUriNotSupported.code,
          VB.redirectUriNotSupported.desc,
        );
      }
    };
  });
