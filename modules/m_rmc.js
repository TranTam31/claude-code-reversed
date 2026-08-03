// Module: rMc (lines 133745-134085)
  var rMc = S(() => {
    ((UPc = { ["required"]: !1, ["type"]: "string" }),
      (TWi = { ["required"]: !0, default: !1, ["type"]: "boolean" }),
      (YPc = { ["ref"]: "Endpoint" }),
      (BPc = { ["fn"]: "isSet", ["argv"]: [{ ["ref"]: "Region" }] }),
      (n8 = { ["ref"]: "Region" }),
      (jPc = {
        ["fn"]: "aws.partition",
        ["argv"]: [n8],
        assign: "PartitionResult",
      }),
      (XPc = { ["ref"]: "UseFIPS" }),
      (JPc = { ["ref"]: "UseDualStack" }),
      (hY = {
        url: "https://sts.amazonaws.com",
        properties: {
          authSchemes: [
            { name: "sigv4", signingName: "sts", signingRegion: "us-east-1" },
          ],
        },
        headers: {},
      }),
      (vde = {}),
      (WPc = {
        conditions: [{ ["fn"]: "stringEquals", ["argv"]: [n8, "aws-global"] }],
        ["endpoint"]: hY,
        ["type"]: "endpoint",
      }),
      (QPc = { ["fn"]: "booleanEquals", ["argv"]: [XPc, !0] }),
      (ZPc = { ["fn"]: "booleanEquals", ["argv"]: [JPc, !0] }),
      (GPc = {
        ["fn"]: "getAttr",
        ["argv"]: [{ ["ref"]: "PartitionResult" }, "supportsFIPS"],
      }),
      (eMc = { ["ref"]: "PartitionResult" }),
      (VPc = {
        ["fn"]: "booleanEquals",
        ["argv"]: [
          !0,
          { ["fn"]: "getAttr", ["argv"]: [eMc, "supportsDualStack"] },
        ],
      }),
      (qPc = [{ ["fn"]: "isSet", ["argv"]: [YPc] }]),
      (zPc = [QPc]),
      (KPc = [ZPc]),
      (Psg = {
        version: "1.0",
        parameters: {
          Region: UPc,
          UseDualStack: TWi,
          UseFIPS: TWi,
          Endpoint: UPc,
          UseGlobalEndpoint: TWi,
        },
        rules: [
          {
            conditions: [
              {
                ["fn"]: "booleanEquals",
                ["argv"]: [{ ["ref"]: "UseGlobalEndpoint" }, !0],
              },
              { ["fn"]: "not", ["argv"]: qPc },
              BPc,
              jPc,
              { ["fn"]: "booleanEquals", ["argv"]: [XPc, !1] },
              { ["fn"]: "booleanEquals", ["argv"]: [JPc, !1] },
            ],
            rules: [
              {
                conditions: [
                  { ["fn"]: "stringEquals", ["argv"]: [n8, "ap-northeast-1"] },
                ],
                endpoint: hY,
                ["type"]: "endpoint",
              },
              {
                conditions: [
                  { ["fn"]: "stringEquals", ["argv"]: [n8, "ap-south-1"] },
                ],
                endpoint: hY,
                ["type"]: "endpoint",
              },
              {
                conditions: [
                  { ["fn"]: "stringEquals", ["argv"]: [n8, "ap-southeast-1"] },
                ],
                endpoint: hY,
                ["type"]: "endpoint",
              },
              {
                conditions: [
                  { ["fn"]: "stringEquals", ["argv"]: [n8, "ap-southeast-2"] },
                ],
                endpoint: hY,
                ["type"]: "endpoint",
              },
              WPc,
              {
                conditions: [
                  { ["fn"]: "stringEquals", ["argv"]: [n8, "ca-central-1"] },
                ],
                endpoint: hY,
                ["type"]: "endpoint",
              },
              {
                conditions: [
                  { ["fn"]: "stringEquals", ["argv"]: [n8, "eu-central-1"] },
                ],
                endpoint: hY,
                ["type"]: "endpoint",
              },
              {
                conditions: [
                  { ["fn"]: "stringEquals", ["argv"]: [n8, "eu-north-1"] },
                ],
                endpoint: hY,
                ["type"]: "endpoint",
              },
              {
                conditions: [
                  { ["fn"]: "stringEquals", ["argv"]: [n8, "eu-west-1"] },
                ],
                endpoint: hY,
                ["type"]: "endpoint",
              },
              {
                conditions: [
                  { ["fn"]: "stringEquals", ["argv"]: [n8, "eu-west-2"] },
                ],
                endpoint: hY,
                ["type"]: "endpoint",
              },
              {
                conditions: [
                  { ["fn"]: "stringEquals", ["argv"]: [n8, "eu-west-3"] },
                ],
                endpoint: hY,
                ["type"]: "endpoint",
              },
              {
                conditions: [
                  { ["fn"]: "stringEquals", ["argv"]: [n8, "sa-east-1"] },
                ],
                endpoint: hY,
                ["type"]: "endpoint",
              },
              {
                conditions: [
                  { ["fn"]: "stringEquals", ["argv"]: [n8, "us-east-1"] },
                ],
                endpoint: hY,
                ["type"]: "endpoint",
              },
              {
                conditions: [
                  { ["fn"]: "stringEquals", ["argv"]: [n8, "us-east-2"] },
                ],
                endpoint: hY,
                ["type"]: "endpoint",
              },
              {
                conditions: [
                  { ["fn"]: "stringEquals", ["argv"]: [n8, "us-west-1"] },
                ],
                endpoint: hY,
                ["type"]: "endpoint",
              },
              {
                conditions: [
                  { ["fn"]: "stringEquals", ["argv"]: [n8, "us-west-2"] },
                ],
                endpoint: hY,
                ["type"]: "endpoint",
              },
              {
                endpoint: {
                  url: "https://sts.{Region}.{PartitionResult#dnsSuffix}",
                  properties: {
                    authSchemes: [
                      {
                        name: "sigv4",
                        signingName: "sts",
                        signingRegion: "{Region}",
                      },
                    ],
                  },
                  headers: vde,
                },
                ["type"]: "endpoint",
              },
            ],
            ["type"]: "tree",
          },
          {
            conditions: qPc,
            rules: [
              {
                conditions: zPc,
                error:
                  "Invalid Configuration: FIPS and custom endpoint are not supported",
                ["type"]: "error",
              },
              {
                conditions: KPc,
                error:
                  "Invalid Configuration: Dualstack and custom endpoint are not supported",
                ["type"]: "error",
              },
              {
                endpoint: { url: YPc, properties: vde, headers: vde },
                ["type"]: "endpoint",
              },
            ],
            ["type"]: "tree",
          },
          {
            conditions: [BPc],
            rules: [
              {
                conditions: [jPc],
                rules: [
                  {
                    conditions: [QPc, ZPc],
                    rules: [
                      {
                        conditions: [
                          { ["fn"]: "booleanEquals", ["argv"]: [!0, GPc] },
                          VPc,
                        ],
                        rules: [
                          {
                            endpoint: {
                              url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                              properties: vde,
                              headers: vde,
                            },
                            ["type"]: "endpoint",
                          },
                        ],
                        ["type"]: "tree",
                      },
                      {
                        error:
                          "FIPS and DualStack are enabled, but this partition does not support one or both",
                        ["type"]: "error",
                      },
                    ],
                    ["type"]: "tree",
                  },
                  {
                    conditions: zPc,
                    rules: [
                      {
                        conditions: [
                          { ["fn"]: "booleanEquals", ["argv"]: [GPc, !0] },
                        ],
                        rules: [
                          {
                            conditions: [
                              {
                                ["fn"]: "stringEquals",
                                ["argv"]: [
                                  {
                                    ["fn"]: "getAttr",
                                    ["argv"]: [eMc, "name"],
                                  },
                                  "aws-us-gov",
                                ],
                              },
                            ],
                            endpoint: {
                              url: "https://sts.{Region}.amazonaws.com",
                              properties: vde,
                              headers: vde,
                            },
                            ["type"]: "endpoint",
                          },
                          {
                            endpoint: {
                              url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",
                              properties: vde,
                              headers: vde,
                            },
                            ["type"]: "endpoint",
                          },
                        ],
                        ["type"]: "tree",
                      },
                      {
                        error:
                          "FIPS is enabled but this partition does not support FIPS",
                        ["type"]: "error",
                      },
                    ],
                    ["type"]: "tree",
                  },
                  {
                    conditions: KPc,
                    rules: [
                      {
                        conditions: [VPc],
                        rules: [
                          {
                            endpoint: {
                              url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",
                              properties: vde,
                              headers: vde,
                            },
                            ["type"]: "endpoint",
                          },
                        ],
                        ["type"]: "tree",
                      },
                      {
                        error:
                          "DualStack is enabled but this partition does not support DualStack",
                        ["type"]: "error",
                      },
                    ],
                    ["type"]: "tree",
                  },
                  WPc,
                  {
                    endpoint: {
                      url: "https://sts.{Region}.{PartitionResult#dnsSuffix}",
                      properties: vde,
                      headers: vde,
                    },
                    ["type"]: "endpoint",
                  },
                ],
                ["type"]: "tree",
              },
            ],
            ["type"]: "tree",
          },
          { error: "Invalid Configuration: Missing Region", ["type"]: "error" },
        ],
      }),
      (tMc = Psg));
  });
