// Module: XSm (lines 972415-972508)
  var XSm = S(() => {
    zt();
    xS();
    Tf();
    Ge();
    Ar();
    Qr();
    st();
    Ja();
    H0();
    Cqe();
    zB();
    jHo();
    ISm();
    $Sm();
    ((BSm = require("child_process")),
      (ghi = require("fs")),
      (mO = require("fs/promises")),
      (POr = require("os")),
      (K6 = require("path")),
      (WSm = [
        "/etc/ssl/certs/ca-certificates.crt",
        "/etc/pki/tls/certs/ca-bundle.crt",
        "/etc/ssl/cert.pem",
      ]),
      (Yhl = [
        "localhost",
        "127.0.0.1",
        "::1",
        "127.0.0.0/8",
        "0.0.0.0/8",
        "::",
        "169.254.0.0/16",
        "anthropic.com",
        ".anthropic.com",
        "*.anthropic.com",
        "registry.npmjs.org",
        "jsr.io",
        "npm.jsr.io",
        "pypi.org",
        "files.pythonhosted.org",
        "index.crates.io",
        "proxy.golang.org",
        "host.docker.internal",
      ]),
      (Xhl = [
        ...Yhl,
        "10.0.0.0/8",
        "172.16.0.0/12",
        "192.168.0.0/16",
        "100.64.0.0/10",
        ".svc.cluster.local",
        "*.svc.cluster.local",
      ].join(",")),
      (liE = Yhl.join(",")),
      (GSm = [
        "127.0.0.1",
        "localhost",
        "::1",
        "127.0.0.0/8",
        "0.0.0.0/8",
        "169.254.0.0/16",
        "host.docker.internal",
        "10.0.0.0/8",
        "172.16.0.0/12",
        "192.168.0.0/16",
        "100.64.0.0/10",
        ".svc.cluster.local",
        "*.svc.cluster.local",
      ].join(",")),
      (hS = { enabled: !1, noProxy: Xhl }));
    VSm = [`git@${Hy}:`, `ssh://git@${Hy}/`];
    fiE = [
      ["git_http_proxy_configured", /^http\.(.+\.)?proxy$/m],
      ["git_ssl_cainfo_configured", /^http\.(.+\.)?sslcainfo$/m],
      [
        "git_https_to_ssh_insteadof_configured",
        /^url\.(git@|ssh:\/\/).*\.insteadof$/m,
      ],
    ];
    SiE = /-----BEGIN CERTIFICATE-----[\s\S]*?-----END CERTIFICATE-----/g;
    viE = [
      {
        dir: "/usr/local/share/ca-certificates",
        name: "ccr-agent-proxy.crt",
        refresh: ["update-ca-certificates"],
      },
      {
        dir: "/etc/pki/ca-trust/source/anchors",
        name: "ccr-agent-proxy.crt",
        refresh: ["update-ca-trust", "extract"],
      },
    ];
  });
