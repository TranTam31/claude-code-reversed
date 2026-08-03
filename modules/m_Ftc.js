// Module: Ftc (lines 96988-97177)
  var Ftc = S(() => {
    ((xtc = { ["required"]: !1, type: "string" }),
      (Htc = { ["required"]: !0, default: !1, type: "boolean" }),
      (ktc = { ["ref"]: "Endpoint" }),
      (Ltc = {
        ["fn"]: "booleanEquals",
        ["argv"]: [{ ["ref"]: "UseFIPS" }, !0],
      }),
      (Otc = {
        ["fn"]: "booleanEquals",
        ["argv"]: [{ ["ref"]: "UseDualStack" }, !0],
      }),
      (u_e = {}),
      (Itc = {
        ["fn"]: "getAttr",
        ["argv"]: [{ ["ref"]: "PartitionResult" }, "supportsFIPS"],
      }),
      (Ntc = { ["ref"]: "PartitionResult" }),
      (Rtc = {
        ["fn"]: "booleanEquals",
        ["argv"]: [
          !0,
          { ["fn"]: "getAttr", ["argv"]: [Ntc, "supportsDualStack"] },
        ],
      }),
      (Dtc = [Ltc]),
      (Ptc = [Otc]),
      (Mtc = [{ ["ref"]: "Region" }]),
      (FBh = {
        version: "1.0",
        parameters: {
          Region: xtc,
          UseDualStack: Htc,
          UseFIPS: Htc,
          Endpoint: xtc,
        },
        rules: [
          {
            conditions: [{ ["fn"]: "isSet", ["argv"]: [ktc] }],
            rules: [
              {
                conditions: Dtc,
                error:
                  "Invalid Configuration: FIPS and custom endpoint are not supported",
                type: "error",
              },
              {
                conditions: Ptc,
                error:
                  "Invalid Configuration: Dualstack and custom endpoint are not supported",
                type: "error",
              },
              {
                endpoint: { url: ktc, properties: u_e, headers: u_e },
                type: "endpoint",
              },
            ],
            type: "tree",
          },
          {
            conditions: [{ ["fn"]: "isSet", ["argv"]: Mtc }],
            rules: [
              {
                conditions: [
                  {
                    ["fn"]: "aws.partition",
                    ["argv"]: Mtc,
                    assign: "PartitionResult",
                  },
                ],
                rules: [
                  {
                    conditions: [Ltc, Otc],
                    rules: [
                      {
                        conditions: [
                          { ["fn"]: "booleanEquals", ["argv"]: [!0, Itc] },
                          Rtc,
                        ],
                        rules: [
                          {
                            endpoint: {
                              url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                              properties: u_e,
                              headers: u_e,
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
                    conditions: Dtc,
                    rules: [
                      {
                        conditions: [
                          { ["fn"]: "booleanEquals", ["argv"]: [Itc, !0] },
                        ],
                        rules: [
                          {
                            conditions: [
                              {
                                ["fn"]: "stringEquals",
                                ["argv"]: [
                                  {
                                    ["fn"]: "getAttr",
                                    ["argv"]: [Ntc, "name"],
                                  },
                                  "aws-us-gov",
                                ],
                              },
                            ],
                            endpoint: {
                              url: "https://portal.sso.{Region}.amazonaws.com",
                              properties: u_e,
                              headers: u_e,
                            },
                            type: "endpoint",
                          },
                          {
                            endpoint: {
                              url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}",
                              properties: u_e,
                              headers: u_e,
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
                    conditions: Ptc,
                    rules: [
                      {
                        conditions: [Rtc],
                        rules: [
                          {
                            endpoint: {
                              url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}",
                              properties: u_e,
                              headers: u_e,
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
                      url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}",
                      properties: u_e,
                      headers: u_e,
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
      ($tc = FBh));
  });
