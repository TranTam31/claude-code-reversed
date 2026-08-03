// Module: Elc (lines 102235-102436)
  var Elc = S(() => {
    ((ulc = { ["required"]: !1, type: "string" }),
      (dlc = { ["required"]: !0, default: !1, type: "boolean" }),
      (plc = { ["ref"]: "Endpoint" }),
      (_lc = {
        ["fn"]: "booleanEquals",
        ["argv"]: [{ ["ref"]: "UseFIPS" }, !0],
      }),
      (blc = {
        ["fn"]: "booleanEquals",
        ["argv"]: [{ ["ref"]: "UseDualStack" }, !0],
      }),
      (_1e = {}),
      (flc = {
        ["fn"]: "getAttr",
        ["argv"]: [{ ["ref"]: "PartitionResult" }, "supportsFIPS"],
      }),
      (mlc = {
        ["fn"]: "booleanEquals",
        ["argv"]: [
          !0,
          {
            ["fn"]: "getAttr",
            ["argv"]: [{ ["ref"]: "PartitionResult" }, "supportsDualStack"],
          },
        ],
      }),
      (hlc = [_lc]),
      (glc = [blc]),
      (ylc = [{ ["ref"]: "Region" }]),
      (oGh = {
        version: "1.0",
        parameters: {
          Region: ulc,
          UseDualStack: dlc,
          UseFIPS: dlc,
          Endpoint: ulc,
        },
        rules: [
          {
            conditions: [{ ["fn"]: "isSet", ["argv"]: [plc] }],
            rules: [
              {
                conditions: hlc,
                error:
                  "Invalid Configuration: FIPS and custom endpoint are not supported",
                type: "error",
              },
              {
                rules: [
                  {
                    conditions: glc,
                    error:
                      "Invalid Configuration: Dualstack and custom endpoint are not supported",
                    type: "error",
                  },
                  {
                    endpoint: { url: plc, properties: _1e, headers: _1e },
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
                conditions: [{ ["fn"]: "isSet", ["argv"]: ylc }],
                rules: [
                  {
                    conditions: [
                      {
                        ["fn"]: "aws.partition",
                        ["argv"]: ylc,
                        assign: "PartitionResult",
                      },
                    ],
                    rules: [
                      {
                        conditions: [_lc, blc],
                        rules: [
                          {
                            conditions: [
                              { ["fn"]: "booleanEquals", ["argv"]: [!0, flc] },
                              mlc,
                            ],
                            rules: [
                              {
                                rules: [
                                  {
                                    endpoint: {
                                      url: "https://bedrock-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                      properties: _1e,
                                      headers: _1e,
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
                        conditions: hlc,
                        rules: [
                          {
                            conditions: [
                              { ["fn"]: "booleanEquals", ["argv"]: [flc, !0] },
                            ],
                            rules: [
                              {
                                rules: [
                                  {
                                    endpoint: {
                                      url: "https://bedrock-fips.{Region}.{PartitionResult#dnsSuffix}",
                                      properties: _1e,
                                      headers: _1e,
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
                        conditions: glc,
                        rules: [
                          {
                            conditions: [mlc],
                            rules: [
                              {
                                rules: [
                                  {
                                    endpoint: {
                                      url: "https://bedrock.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                      properties: _1e,
                                      headers: _1e,
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
                              url: "https://bedrock.{Region}.{PartitionResult#dnsSuffix}",
                              properties: _1e,
                              headers: _1e,
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
      (Slc = oGh));
  });
