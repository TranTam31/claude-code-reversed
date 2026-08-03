// Module: U1c (lines 136546-136792)
  var U1c = S(() => {
    ((H1c = { ["required"]: !1, type: "string" }),
      (k1c = { ["required"]: !0, default: !1, type: "boolean" }),
      (I1c = { ["ref"]: "Endpoint" }),
      (O1c = {
        ["fn"]: "booleanEquals",
        ["argv"]: [{ ["ref"]: "UseFIPS" }, !0],
      }),
      (N1c = {
        ["fn"]: "booleanEquals",
        ["argv"]: [{ ["ref"]: "UseDualStack" }, !0],
      }),
      ($B = {}),
      (a5r = { ["ref"]: "Region" }),
      (R1c = {
        ["fn"]: "getAttr",
        ["argv"]: [{ ["ref"]: "PartitionResult" }, "supportsFIPS"],
      }),
      ($1c = { ["ref"]: "PartitionResult" }),
      (D1c = {
        ["fn"]: "booleanEquals",
        ["argv"]: [
          !0,
          { ["fn"]: "getAttr", ["argv"]: [$1c, "supportsDualStack"] },
        ],
      }),
      (P1c = [O1c]),
      (M1c = [N1c]),
      (L1c = [a5r]),
      (Gag = {
        version: "1.0",
        parameters: {
          Region: H1c,
          UseDualStack: k1c,
          UseFIPS: k1c,
          Endpoint: H1c,
        },
        rules: [
          {
            conditions: [{ ["fn"]: "isSet", ["argv"]: [I1c] }],
            rules: [
              {
                conditions: P1c,
                error:
                  "Invalid Configuration: FIPS and custom endpoint are not supported",
                type: "error",
              },
              {
                conditions: M1c,
                error:
                  "Invalid Configuration: Dualstack and custom endpoint are not supported",
                type: "error",
              },
              {
                endpoint: { url: I1c, properties: $B, headers: $B },
                type: "endpoint",
              },
            ],
            type: "tree",
          },
          {
            conditions: [{ ["fn"]: "isSet", ["argv"]: L1c }],
            rules: [
              {
                conditions: [
                  {
                    ["fn"]: "aws.partition",
                    ["argv"]: L1c,
                    assign: "PartitionResult",
                  },
                ],
                rules: [
                  {
                    conditions: [O1c, N1c],
                    rules: [
                      {
                        conditions: [
                          { ["fn"]: "booleanEquals", ["argv"]: [!0, R1c] },
                          D1c,
                        ],
                        rules: [
                          {
                            conditions: [
                              {
                                ["fn"]: "stringEquals",
                                ["argv"]: [a5r, "us-east-1"],
                              },
                            ],
                            endpoint: {
                              url: "https://cognito-identity-fips.us-east-1.amazonaws.com",
                              properties: $B,
                              headers: $B,
                            },
                            type: "endpoint",
                          },
                          {
                            conditions: [
                              {
                                ["fn"]: "stringEquals",
                                ["argv"]: [a5r, "us-east-2"],
                              },
                            ],
                            endpoint: {
                              url: "https://cognito-identity-fips.us-east-2.amazonaws.com",
                              properties: $B,
                              headers: $B,
                            },
                            type: "endpoint",
                          },
                          {
                            conditions: [
                              {
                                ["fn"]: "stringEquals",
                                ["argv"]: [a5r, "us-west-1"],
                              },
                            ],
                            endpoint: {
                              url: "https://cognito-identity-fips.us-west-1.amazonaws.com",
                              properties: $B,
                              headers: $B,
                            },
                            type: "endpoint",
                          },
                          {
                            conditions: [
                              {
                                ["fn"]: "stringEquals",
                                ["argv"]: [a5r, "us-west-2"],
                              },
                            ],
                            endpoint: {
                              url: "https://cognito-identity-fips.us-west-2.amazonaws.com",
                              properties: $B,
                              headers: $B,
                            },
                            type: "endpoint",
                          },
                          {
                            endpoint: {
                              url: "https://cognito-identity-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                              properties: $B,
                              headers: $B,
                            },
                            type: "endpoint",
                          },
                        ],
                        type: "tree",
                      },
                      {
                        error:
                          "FIPS and DualStack are enabled, but this partition does not support one or both",
                        type: "error",
                      },
                    ],
                    type: "tree",
                  },
                  {
                    conditions: P1c,
                    rules: [
                      {
                        conditions: [
                          { ["fn"]: "booleanEquals", ["argv"]: [R1c, !0] },
                        ],
                        rules: [
                          {
                            endpoint: {
                              url: "https://cognito-identity-fips.{Region}.{PartitionResult#dnsSuffix}",
                              properties: $B,
                              headers: $B,
                            },
                            type: "endpoint",
                          },
                        ],
                        type: "tree",
                      },
                      {
                        error:
                          "FIPS is enabled but this partition does not support FIPS",
                        type: "error",
                      },
                    ],
                    type: "tree",
                  },
                  {
                    conditions: M1c,
                    rules: [
                      {
                        conditions: [D1c],
                        rules: [
                          {
                            conditions: [
                              {
                                ["fn"]: "stringEquals",
                                ["argv"]: [
                                  "aws",
                                  {
                                    ["fn"]: "getAttr",
                                    ["argv"]: [$1c, "name"],
                                  },
                                ],
                              },
                            ],
                            endpoint: {
                              url: "https://cognito-identity.{Region}.amazonaws.com",
                              properties: $B,
                              headers: $B,
                            },
                            type: "endpoint",
                          },
                          {
                            endpoint: {
                              url: "https://cognito-identity.{Region}.{PartitionResult#dualStackDnsSuffix}",
                              properties: $B,
                              headers: $B,
                            },
                            type: "endpoint",
                          },
                        ],
                        type: "tree",
                      },
                      {
                        error:
                          "DualStack is enabled but this partition does not support DualStack",
                        type: "error",
                      },
                    ],
                    type: "tree",
                  },
                  {
                    endpoint: {
                      url: "https://cognito-identity.{Region}.{PartitionResult#dnsSuffix}",
                      properties: $B,
                      headers: $B,
                    },
                    type: "endpoint",
                  },
                ],
                type: "tree",
              },
            ],
            type: "tree",
          },
          { error: "Invalid Configuration: Missing Region", type: "error" },
        ],
      }),
      (F1c = Gag));
  });
