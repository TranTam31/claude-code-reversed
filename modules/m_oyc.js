// Module: Oyc (lines 115348-115549)
  var Oyc = S(() => {
    ((Tyc = { ["required"]: !1, type: "string" }),
      (Cyc = { ["required"]: !0, default: !1, type: "boolean" }),
      (xyc = { ["ref"]: "Endpoint" }),
      (Pyc = {
        ["fn"]: "booleanEquals",
        ["argv"]: [{ ["ref"]: "UseFIPS" }, !0],
      }),
      (Myc = {
        ["fn"]: "booleanEquals",
        ["argv"]: [{ ["ref"]: "UseDualStack" }, !0],
      }),
      (E1e = {}),
      (Hyc = {
        ["fn"]: "getAttr",
        ["argv"]: [{ ["ref"]: "PartitionResult" }, "supportsFIPS"],
      }),
      (kyc = {
        ["fn"]: "booleanEquals",
        ["argv"]: [
          !0,
          {
            ["fn"]: "getAttr",
            ["argv"]: [{ ["ref"]: "PartitionResult" }, "supportsDualStack"],
          },
        ],
      }),
      (Iyc = [Pyc]),
      (Ryc = [Myc]),
      (Dyc = [{ ["ref"]: "Region" }]),
      (z7h = {
        version: "1.0",
        parameters: {
          Region: Tyc,
          UseDualStack: Cyc,
          UseFIPS: Cyc,
          Endpoint: Tyc,
        },
        rules: [
          {
            conditions: [{ ["fn"]: "isSet", ["argv"]: [xyc] }],
            rules: [
              {
                conditions: Iyc,
                error:
                  "Invalid Configuration: FIPS and custom endpoint are not supported",
                type: "error",
              },
              {
                rules: [
                  {
                    conditions: Ryc,
                    error:
                      "Invalid Configuration: Dualstack and custom endpoint are not supported",
                    type: "error",
                  },
                  {
                    endpoint: { url: xyc, properties: E1e, headers: E1e },
                    type: "endpoint",
                  },
                ],
                type: "tree",
              },
            ],
            type: "tree",
          },
          {
            rules: [
              {
                conditions: [{ ["fn"]: "isSet", ["argv"]: Dyc }],
                rules: [
                  {
                    conditions: [
                      {
                        ["fn"]: "aws.partition",
                        ["argv"]: Dyc,
                        assign: "PartitionResult",
                      },
                    ],
                    rules: [
                      {
                        conditions: [Pyc, Myc],
                        rules: [
                          {
                            conditions: [
                              { ["fn"]: "booleanEquals", ["argv"]: [!0, Hyc] },
                              kyc,
                            ],
                            rules: [
                              {
                                rules: [
                                  {
                                    endpoint: {
                                      url: "https://bedrock-runtime-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                      properties: E1e,
                                      headers: E1e,
                                    },
                                    type: "endpoint",
                                  },
                                ],
                                type: "tree",
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
                        conditions: Iyc,
                        rules: [
                          {
                            conditions: [
                              { ["fn"]: "booleanEquals", ["argv"]: [Hyc, !0] },
                            ],
                            rules: [
                              {
                                rules: [
                                  {
                                    endpoint: {
                                      url: "https://bedrock-runtime-fips.{Region}.{PartitionResult#dnsSuffix}",
                                      properties: E1e,
                                      headers: E1e,
                                    },
                                    type: "endpoint",
                                  },
                                ],
                                type: "tree",
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
                        conditions: Ryc,
                        rules: [
                          {
                            conditions: [kyc],
                            rules: [
                              {
                                rules: [
                                  {
                                    endpoint: {
                                      url: "https://bedrock-runtime.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                      properties: E1e,
                                      headers: E1e,
                                    },
                                    type: "endpoint",
                                  },
                                ],
                                type: "tree",
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
                        rules: [
                          {
                            endpoint: {
                              url: "https://bedrock-runtime.{Region}.{PartitionResult#dnsSuffix}",
                              properties: E1e,
                              headers: E1e,
                            },
                            type: "endpoint",
                          },
                        ],
                        type: "tree",
                      },
                    ],
                    type: "tree",
                  },
                ],
                type: "tree",
              },
              { error: "Invalid Configuration: Missing Region", type: "error" },
            ],
            type: "tree",
          },
        ],
      }),
      (Lyc = z7h));
  });
