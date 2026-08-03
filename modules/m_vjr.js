// Module: vjr (lines 97530-97711)
  var vjr = S(() => {
    j$i();
    B$i();
    ((pXt = x(Qx(), 1)),
      (aqn = [0, "com.amazonaws.sso", "AccessTokenType", 8, 0]),
      (BBh = [0, "com.amazonaws.sso", "SecretAccessKeyType", 8, 0]),
      (jBh = [0, "com.amazonaws.sso", "SessionTokenType", 8, 0]),
      (WBh = [
        3,
        "com.amazonaws.sso",
        "AccountInfo",
        0,
        ["accountId", "accountName", "emailAddress"],
        [0, 0, 0],
      ]),
      (GBh = [
        3,
        "com.amazonaws.sso",
        "GetRoleCredentialsRequest",
        0,
        ["roleName", "accountId", "accessToken"],
        [
          [0, { ["httpQuery"]: "role_name" }],
          [0, { ["httpQuery"]: "account_id" }],
          [() => aqn, { ["httpHeader"]: "x-amz-sso_bearer_token" }],
        ],
      ]),
      (VBh = [
        3,
        "com.amazonaws.sso",
        "GetRoleCredentialsResponse",
        0,
        ["roleCredentials"],
        [[() => ZBh, 0]],
      ]),
      (qBh = [
        -3,
        "com.amazonaws.sso",
        "InvalidRequestException",
        { ["error"]: "client", ["httpError"]: 400 },
        ["message"],
        [0],
      ]));
    pXt.TypeRegistry.for("com.amazonaws.sso").registerError(qBh, nqn);
    ((zBh = [
      3,
      "com.amazonaws.sso",
      "ListAccountRolesRequest",
      0,
      ["nextToken", "maxResults", "accessToken", "accountId"],
      [
        [0, { ["httpQuery"]: "next_token" }],
        [1, { ["httpQuery"]: "max_result" }],
        [() => aqn, { ["httpHeader"]: "x-amz-sso_bearer_token" }],
        [0, { ["httpQuery"]: "account_id" }],
      ],
    ]),
      (KBh = [
        3,
        "com.amazonaws.sso",
        "ListAccountRolesResponse",
        0,
        ["nextToken", "roleList"],
        [0, () => s4h],
      ]),
      (YBh = [
        3,
        "com.amazonaws.sso",
        "ListAccountsRequest",
        0,
        ["nextToken", "maxResults", "accessToken"],
        [
          [0, { ["httpQuery"]: "next_token" }],
          [1, { ["httpQuery"]: "max_result" }],
          [() => aqn, { ["httpHeader"]: "x-amz-sso_bearer_token" }],
        ],
      ]),
      (XBh = [
        3,
        "com.amazonaws.sso",
        "ListAccountsResponse",
        0,
        ["nextToken", "accountList"],
        [0, () => i4h],
      ]),
      (JBh = [
        3,
        "com.amazonaws.sso",
        "LogoutRequest",
        0,
        ["accessToken"],
        [[() => aqn, { ["httpHeader"]: "x-amz-sso_bearer_token" }]],
      ]),
      (QBh = [
        -3,
        "com.amazonaws.sso",
        "ResourceNotFoundException",
        { ["error"]: "client", ["httpError"]: 404 },
        ["message"],
        [0],
      ]));
    pXt.TypeRegistry.for("com.amazonaws.sso").registerError(QBh, oqn);
    ((ZBh = [
      3,
      "com.amazonaws.sso",
      "RoleCredentials",
      0,
      ["accessKeyId", "secretAccessKey", "sessionToken", "expiration"],
      [0, [() => BBh, 0], [() => jBh, 0], 1],
    ]),
      (e4h = [
        3,
        "com.amazonaws.sso",
        "RoleInfo",
        0,
        ["roleName", "accountId"],
        [0, 0],
      ]),
      (t4h = [
        -3,
        "com.amazonaws.sso",
        "TooManyRequestsException",
        { ["error"]: "client", ["httpError"]: 429 },
        ["message"],
        [0],
      ]));
    pXt.TypeRegistry.for("com.amazonaws.sso").registerError(t4h, iqn);
    r4h = [
      -3,
      "com.amazonaws.sso",
      "UnauthorizedException",
      { ["error"]: "client", ["httpError"]: 401 },
      ["message"],
      [0],
    ];
    pXt.TypeRegistry.for("com.amazonaws.sso").registerError(r4h, sqn);
    o4h = [
      -3,
      "smithy.ts.sdk.synthetic.com.amazonaws.sso",
      "SSOServiceException",
      0,
      [],
      [],
    ];
    pXt.TypeRegistry.for(
      "smithy.ts.sdk.synthetic.com.amazonaws.sso",
    ).registerError(o4h, vVe);
    ((i4h = [1, "com.amazonaws.sso", "AccountListType", 0, () => WBh]),
      (s4h = [1, "com.amazonaws.sso", "RoleListType", 0, () => e4h]),
      (_rc = [
        9,
        "com.amazonaws.sso",
        "GetRoleCredentials",
        { ["http"]: ["GET", "/federation/credentials", 200] },
        () => GBh,
        () => VBh,
      ]),
      (brc = [
        9,
        "com.amazonaws.sso",
        "ListAccountRoles",
        { ["http"]: ["GET", "/assignment/roles", 200] },
        () => zBh,
        () => KBh,
      ]),
      (Src = [
        9,
        "com.amazonaws.sso",
        "ListAccounts",
        { ["http"]: ["GET", "/assignment/accounts", 200] },
        () => YBh,
        () => XBh,
      ]),
      (Erc = [
        9,
        "com.amazonaws.sso",
        "Logout",
        { ["http"]: ["POST", "/logout", 200] },
        () => JBh,
        () => n4h,
      ]));
  });
