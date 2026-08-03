// Module: chr (lines 501394-501901)
  var chr = S(() => {
    bl();
    ei();
    Ei();
    Cbe();
    w$e();
    Pr();
    D$s();
    F$t();
    ((EDd = require("fs")),
      (vDd = require("path")),
      (TQy = new Set(["--list-runtimes", "--list-sdks"])));
    ((hDd = Object.assign(Object.create(null), {
      "get-childitem": {
        safeFlags: [
          "-Path",
          "-LiteralPath",
          "-Filter",
          "-Include",
          "-Exclude",
          "-Recurse",
          "-Depth",
          "-Name",
          "-Force",
          "-Attributes",
          "-Directory",
          "-File",
          "-Hidden",
          "-ReadOnly",
          "-System",
        ],
      },
      "get-content": {
        safeFlags: [
          "-Path",
          "-LiteralPath",
          "-TotalCount",
          "-Head",
          "-Tail",
          "-Raw",
          "-Encoding",
          "-Delimiter",
          "-ReadCount",
        ],
      },
      "get-item": { safeFlags: ["-Path", "-LiteralPath", "-Force", "-Stream"] },
      "get-itemproperty": { safeFlags: ["-Path", "-LiteralPath", "-Name"] },
      "test-path": {
        safeFlags: [
          "-Path",
          "-LiteralPath",
          "-PathType",
          "-Filter",
          "-Include",
          "-Exclude",
          "-IsValid",
          "-NewerThan",
          "-OlderThan",
        ],
      },
      "resolve-path": { safeFlags: ["-Path", "-LiteralPath", "-Relative"] },
      "get-filehash": {
        safeFlags: ["-Path", "-LiteralPath", "-Algorithm", "-InputStream"],
      },
      "get-acl": {
        safeFlags: [
          "-Path",
          "-LiteralPath",
          "-Audit",
          "-Filter",
          "-Include",
          "-Exclude",
        ],
      },
      "set-location": {
        safeFlags: ["-Path", "-LiteralPath", "-PassThru", "-StackName"],
      },
      "push-location": {
        safeFlags: ["-Path", "-LiteralPath", "-PassThru", "-StackName"],
      },
      "pop-location": { safeFlags: ["-PassThru", "-StackName"] },
      "select-string": {
        safeFlags: [
          "-Path",
          "-LiteralPath",
          "-Pattern",
          "-InputObject",
          "-SimpleMatch",
          "-CaseSensitive",
          "-Quiet",
          "-List",
          "-NotMatch",
          "-AllMatches",
          "-Encoding",
          "-Context",
          "-Raw",
          "-NoEmphasis",
        ],
      },
      "convertto-json": {
        safeFlags: [
          "-InputObject",
          "-Depth",
          "-Compress",
          "-EnumsAsStrings",
          "-AsArray",
        ],
      },
      "convertfrom-json": {
        safeFlags: ["-InputObject", "-Depth", "-AsHashtable", "-NoEnumerate"],
      },
      "convertto-csv": {
        safeFlags: [
          "-InputObject",
          "-Delimiter",
          "-NoTypeInformation",
          "-NoHeader",
          "-UseQuotes",
        ],
      },
      "convertfrom-csv": {
        safeFlags: ["-InputObject", "-Delimiter", "-Header", "-UseCulture"],
      },
      "convertto-xml": {
        safeFlags: ["-InputObject", "-Depth", "-As", "-NoTypeInformation"],
      },
      "convertto-html": {
        safeFlags: [
          "-InputObject",
          "-Property",
          "-Head",
          "-Title",
          "-Body",
          "-Pre",
          "-Post",
          "-As",
          "-Fragment",
        ],
      },
      "format-hex": {
        safeFlags: [
          "-Path",
          "-LiteralPath",
          "-InputObject",
          "-Encoding",
          "-Count",
          "-Offset",
        ],
      },
      "get-member": {
        safeFlags: [
          "-InputObject",
          "-MemberType",
          "-Name",
          "-Static",
          "-View",
          "-Force",
        ],
      },
      "get-unique": {
        safeFlags: ["-InputObject", "-AsString", "-CaseInsensitive", "-OnType"],
      },
      "compare-object": {
        safeFlags: [
          "-ReferenceObject",
          "-DifferenceObject",
          "-Property",
          "-SyncWindow",
          "-CaseSensitive",
          "-Culture",
          "-ExcludeDifferent",
          "-IncludeEqual",
          "-PassThru",
        ],
      },
      "join-string": {
        safeFlags: [
          "-InputObject",
          "-Property",
          "-Separator",
          "-SingleQuote",
          "-DoubleQuote",
          "-FormatString",
        ],
      },
      "get-random": {
        safeFlags: [
          "-InputObject",
          "-Minimum",
          "-Maximum",
          "-Count",
          "-SetSeed",
          "-Shuffle",
        ],
      },
      "convert-path": { safeFlags: ["-Path", "-LiteralPath"] },
      "join-path": {
        safeFlags: ["-Path", "-ChildPath", "-AdditionalChildPath"],
      },
      "split-path": {
        safeFlags: [
          "-Path",
          "-LiteralPath",
          "-Qualifier",
          "-NoQualifier",
          "-Parent",
          "-Leaf",
          "-LeafBase",
          "-Extension",
          "-IsAbsolute",
        ],
      },
      "get-itempropertyvalue": {
        safeFlags: ["-Path", "-LiteralPath", "-Name"],
      },
      "get-psprovider": { safeFlags: ["-PSProvider"] },
      "get-computerinfo": { allowAllFlags: !0 },
      "get-host": { allowAllFlags: !0 },
      "get-date": {
        safeFlags: ["-Date", "-Format", "-UFormat", "-DisplayHint", "-AsUTC"],
      },
      "get-location": {
        safeFlags: ["-PSProvider", "-PSDrive", "-Stack", "-StackName"],
      },
      "get-psdrive": { safeFlags: ["-Name", "-PSProvider", "-Scope"] },
      "get-module": {
        safeFlags: [
          "-Name",
          "-ListAvailable",
          "-All",
          "-FullyQualifiedName",
          "-PSEdition",
        ],
      },
      "get-alias": {
        safeFlags: ["-Name", "-Definition", "-Scope", "-Exclude"],
      },
      "get-history": { safeFlags: ["-Id", "-Count"] },
      "get-culture": { allowAllFlags: !0 },
      "get-uiculture": { allowAllFlags: !0 },
      "get-timezone": { safeFlags: ["-Name", "-Id", "-ListAvailable"] },
      "get-uptime": { allowAllFlags: !0 },
      "write-output": {
        safeFlags: ["-InputObject", "-NoEnumerate"],
        additionalCommandIsDangerousCallback: N4,
      },
      "write-host": {
        safeFlags: [
          "-Object",
          "-NoNewline",
          "-Separator",
          "-ForegroundColor",
          "-BackgroundColor",
        ],
        additionalCommandIsDangerousCallback: N4,
      },
      "start-sleep": {
        safeFlags: ["-Seconds", "-Milliseconds", "-Duration"],
        additionalCommandIsDangerousCallback: N4,
      },
      "format-table": {
        allowAllFlags: !0,
        additionalCommandIsDangerousCallback: N4,
      },
      "format-list": {
        allowAllFlags: !0,
        additionalCommandIsDangerousCallback: N4,
      },
      "format-wide": {
        allowAllFlags: !0,
        additionalCommandIsDangerousCallback: N4,
      },
      "format-custom": {
        allowAllFlags: !0,
        additionalCommandIsDangerousCallback: N4,
      },
      "measure-object": {
        allowAllFlags: !0,
        additionalCommandIsDangerousCallback: N4,
      },
      "select-object": {
        allowAllFlags: !0,
        additionalCommandIsDangerousCallback: N4,
      },
      "sort-object": {
        allowAllFlags: !0,
        additionalCommandIsDangerousCallback: N4,
      },
      "group-object": {
        allowAllFlags: !0,
        additionalCommandIsDangerousCallback: N4,
      },
      "where-object": {
        allowAllFlags: !0,
        additionalCommandIsDangerousCallback: N4,
      },
      "out-string": {
        allowAllFlags: !0,
        additionalCommandIsDangerousCallback: N4,
      },
      "out-host": {
        allowAllFlags: !0,
        additionalCommandIsDangerousCallback: N4,
      },
      "get-netadapter": {
        safeFlags: [
          "-Name",
          "-InterfaceDescription",
          "-InterfaceIndex",
          "-Physical",
        ],
      },
      "get-netipaddress": {
        safeFlags: [
          "-InterfaceIndex",
          "-InterfaceAlias",
          "-AddressFamily",
          "-Type",
        ],
      },
      "get-netroute": {
        safeFlags: [
          "-InterfaceIndex",
          "-InterfaceAlias",
          "-AddressFamily",
          "-DestinationPrefix",
        ],
      },
      "get-dnsclient": { safeFlags: ["-InterfaceIndex", "-InterfaceAlias"] },
      "get-winevent": {
        safeFlags: [
          "-LogName",
          "-ListLog",
          "-ListProvider",
          "-ProviderName",
          "-Path",
          "-MaxEvents",
          "-FilterXPath",
          "-Force",
          "-Oldest",
        ],
      },
      git: {},
      gh: {},
      docker: {},
      ipconfig: {
        safeFlags: ["/all", "/allcompartments"],
        additionalCommandIsDangerousCallback: (e, t) =>
          (t?.args ?? []).some((r) => !r.startsWith("/") && !r.startsWith("-")),
      },
      netstat: {
        safeFlags: [
          "-a",
          "-b",
          "-e",
          "-f",
          "-n",
          "-o",
          "-p",
          "-q",
          "-r",
          "-s",
          "-t",
          "-x",
          "-y",
        ],
      },
      systeminfo: { safeFlags: ["/FO", "/NH"] },
      tasklist: { safeFlags: ["/M", "/SVC", "/V", "/FI", "/FO", "/NH"] },
      "where.exe": { allowAllFlags: !0 },
      hostname: {
        safeFlags: ["-a", "-d", "-f", "-i", "-I", "-s", "-y", "-A"],
        additionalCommandIsDangerousCallback: (e, t) =>
          (t?.args ?? []).some((r) => !r.startsWith("-")),
      },
      whoami: {
        safeFlags: [
          "/user",
          "/groups",
          "/claims",
          "/priv",
          "/logonid",
          "/all",
          "/fo",
          "/nh",
        ],
      },
      ver: { allowAllFlags: !0 },
      arp: {
        safeFlags: ["-a", "-g", "-v", "-n"],
        additionalCommandIsDangerousCallback: (e, t) =>
          (t?.args ?? []).some((r) => !r.startsWith("-")),
      },
      route: {
        safeFlags: ["print", "PRINT", "-4", "-6"],
        additionalCommandIsDangerousCallback: (e, t) => {
          if (!t) return !0;
          return (
            t.args.find((n) => !n.startsWith("-"))?.toLowerCase() !== "print"
          );
        },
      },
      getmac: { safeFlags: ["/FO", "/NH", "/V"] },
      tree: { safeFlags: ["/F", "/A", "/Q", "/L"] },
      findstr: {
        safeFlags: [
          "/B",
          "/E",
          "/L",
          "/R",
          "/S",
          "/I",
          "/X",
          "/V",
          "/N",
          "/M",
          "/O",
          "/P",
          "/C",
          "/G",
          "/D",
          "/A",
        ],
      },
      dotnet: {},
    })),
      (CQy = new Set(["out-null"])),
      (xQy = new Set([
        "format-table",
        "format-list",
        "format-wide",
        "format-custom",
        "measure-object",
        "select-object",
        "sort-object",
        "group-object",
        "where-object",
        "out-string",
        "out-host",
      ])),
      (HQy = new Set(["where.exe"])),
      (kQy = new Set(["git", "gh", "docker", "dotnet"])),
      (IQy = [
        "",
        ".exe",
        ".bat",
        ".cmd",
        ".com",
        ".ps1",
        ".vbs",
        ".js",
        ".wsf",
        ".vbe",
        ".jse",
        ".wsh",
        ".msc",
        ".cpl",
      ]),
      (ADd = qr(
        () => {
          let e = new Set(IQy),
            t = (process.env.PATHEXT ?? "").split(";");
          for (let r of t.slice(0, 64)) {
            let n = r.trim().toLowerCase();
            if (n.startsWith(".") && n.length <= 16) e.add(n);
          }
          return [...e];
        },
        () => process.env.PATHEXT ?? "",
      )),
      (RQy = qr(
        () => {
          let e = ADd()
            .filter((t) => t !== "")
            .map((t) => BN(t.slice(1)));
          return new RegExp(`\\.(${e.join("|")})$`, "i");
        },
        () => process.env.PATHEXT ?? "",
      )));
    MQy = /\.(exe|cmd|bat|com)$/;
    ((NQy = new Set([
      "-c",
      "-C",
      "--exec-path",
      "--config-env",
      "--git-dir",
      "--work-tree",
      "--bare",
      "--attr-source",
      "--help",
      "-h",
      "--shallow-file",
    ])),
      (CDd = new Set([
        "-c",
        "-C",
        "--exec-path",
        "--config-env",
        "--git-dir",
        "--work-tree",
        "--namespace",
        "--super-prefix",
        "--shallow-file",
      ])),
      ($Qy = ["-c", "-C"]));
    ((SDd = new Set(AYr.filter((e) => /^-[^-]$/.test(e)).map((e) => e[1]))),
      (BQy = [...AYr.filter((e) => e.startsWith("--")), "--tls"]));
  });
