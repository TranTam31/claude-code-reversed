// Module: jHo (lines 464845-464866)
  var jHo = S(() => {
    ((uan = [
      "SSL_CERT_FILE",
      "NODE_EXTRA_CA_CERTS",
      "REQUESTS_CA_BUNDLE",
      "CURL_CA_BUNDLE",
      "CLOUDSDK_CORE_CUSTOM_CA_CERTS_FILE",
      "HTTPLIB2_CA_CERTS",
    ]),
      (dan = [
        "AWS_CA_BUNDLE",
        "DENO_CERT",
        "CARGO_HTTP_CAINFO",
        "PIP_CERT",
        "GIT_SSL_CAINFO",
        "GRPC_DEFAULT_SSL_ROOTS_FILE_PATH",
        "NIX_SSL_CERT_FILE",
        "HEX_CACERTS_PATH",
      ]),
      (pan = [...uan, ...dan]),
      (n$t = { UV_NATIVE_TLS: "true", DENO_TLS_CA_STORE: "system,mozilla" }));
  });
