// Module: eDd (lines 500285-500592)
  var eDd = S(() => {
    Cbe();
    T$s();
    ((shr = Iln("No matches found")),
      (eQy = Iln("Files differ")),
      (tQy = new Map([
        ["grep", shr],
        ["rg", shr],
        ["egrep", shr],
        ["fgrep", shr],
        ["findstr", shr],
        [
          "robocopy",
          (e, t, r) => ({
            isError: e < 0 || e >= 8,
            message:
              e === 0
                ? "No files copied (already in sync)"
                : e >= 1 && e < 8
                  ? e & 1
                    ? "Files copied successfully"
                    : "Robocopy completed (no errors)"
                  : void 0,
          }),
        ],
      ])),
      (rQy = new Map([
        ["where", Iln("No matching files found")],
        ["fc", Iln("Files differ")],
        ["diff", Iln("Files differ")],
      ])));
    ((iQy = [
      ...RRo,
      "Invoke-WebRequest",
      "winget",
      "choco",
      "az",
      "powershell",
      "cmd",
      "reg",
      "sc",
      "net",
      "where",
      "tasklist",
      "taskkill",
      "robocopy",
      "xcopy",
      "icacls",
      "certutil",
      "schtasks",
    ]),
      (sQy = [
        "get",
        "set",
        "new",
        "remove",
        "test",
        "start",
        "stop",
        "restart",
        "invoke",
        "add",
        "copy",
        "move",
        "select",
        "where",
        "foreach",
        "write",
        "out",
        "import",
        "export",
        "convertto",
        "convertfrom",
      ]),
      (aQy = new Map(iQy.map((e) => [e.toLowerCase(), e]))),
      (lQy = new Map(sQy.map((e) => [e, `cmdlet_${e}`]))),
      (cQy = new Set([
        "set-location",
        "push-location",
        "pop-location",
        "write-output",
        "write-host",
      ])));
    ((KRd = /token '(&&|\|\||\?\?)' is not a valid|InvalidEndOfLine/i),
      (uQy = [
        ["ps5_chain_op", KRd],
        [
          "parser_error",
          /ParserError:|ParseException|TerminatorExpectedAtEndOfString|FullyQualifiedErrorId\s*:\s*(RedirectionNotSupported|AmpersandNotAllowed|MissingTypename|MissingEndCurlyBrace|MissingEndParenthesis|ExpectedValueExpression|MissingExpression|UnexpectedToken)/,
        ],
        [
          "ps_pipeline_error",
          /Cannot run a document in the middle of a pipeline/,
        ],
        [
          "not_recognized",
          /is not recognized as (a name of a cmdlet|the name of a cmdlet|an? internal)/i,
        ],
        ["command_not_found", /CommandNotFoundException/],
        [
          "path_not_found",
          /ItemNotFoundException|PathNotFound,Microsoft\.PowerShell|Cannot find path '[^']+' because it does not exist/,
        ],
        [
          "access_denied",
          /UnauthorizedAccessException|PermissionDenied,Microsoft\.PowerShell|Access to the path '[^']+' is denied|(^|: )Access is denied\.\r?$/m,
        ],
        [
          "parameter_binding",
          /ParameterBindingException|ParameterArgumentValidationError|A parameter cannot be found that matches parameter name|Cannot bind (parameter|argument)/,
        ],
        [
          "object_not_found",
          /ObjectNotFound: \(|DriveNotFoundException|A drive with the name '[^']+' does not exist/,
        ],
        [
          "execution_policy",
          /running scripts is disabled on this system|PSSecurityException/i,
        ],
        [
          "ps_module_load_fail",
          /'[^']+' module could not be loaded|Import-Module ?: The specified module/,
        ],
        ["method_invocation", /MethodInvocationException|MethodException/],
        [
          "cannot_convert",
          /InvalidCastException|ConvertToFinalInvalidCastException/,
        ],
        [
          "null_expression",
          /InvokeMethodOnNull|NullArray|PropertyNotFoundStrict|NullReferenceException/,
        ],
        [
          "variable_undefined",
          /VariableIsUndefined|The variable '\$[^']+' cannot be retrieved because it has not been set/,
        ],
        ["io_exception", /\bIOException\b|FileNotFoundException/],
        [
          "win_file_error",
          /The system cannot find the (file|path) specified|The process cannot access the file/,
        ],
        [
          "win32_error",
          /^(?:\S+ : )?The (parameter is incorrect|directory is not empty|media is write protected|request is not supported)\.\r?$/m,
        ],
        [
          "win_dll_error",
          /OPENSSL_Uplink|procedure entry point .+ could not be located|is not a valid Win32 application|DLL load failed/,
        ],
        [
          "win_store_stub",
          /was not found; run without arguments to install from the Microsoft Store/,
        ],
        [
          "win_cmd_error",
          /The syntax of the command is incorrect|CMD does not support UNC paths as current directories/,
        ],
        [
          "write_error",
          /WriteErrorException|^(?:\x1b\[[0-9;]*m)*Write-Error: /m,
        ],
        [
          "iwr_basic_parsing",
          /Internet Explorer engine is not available|WebCmdletIEDomNotSupportedException/i,
        ],
        [
          "web_request_error",
          /WebCmdletWebResponseException|The remote server returned an error: \(\d{3}\)|Unable to connect to the remote server|Response status code does not indicate success: \d{3}|No connection could be made because the target machine actively refused/,
        ],
        [
          "runtime_exception",
          /: RuntimeException\b|^(?:\x1b\[[0-9;]*m)*RuntimeException: |ScriptHalted/m,
        ],
        ["native_npm", /^npm (ERR!|error)/m],
        ["native_tsc", /(?:^|\s)error TS\d{4,5}: /m],
        [
          "native_dotnet",
          /: error [A-Z]{2,}\d{4}:|^Build FAILED\.|^(?:\S+ : )?Unhandled exception\. System\.\w/m,
        ],
        ["native_python", /^Traceback \(most recent call last\):/m],
        [
          "native_pip",
          /^ERROR: Could not find a version that satisfies the requirement|^ERROR: No matching distribution found for/m,
        ],
        ["native_curl", /^(?:\S+ : )?curl: \(\d+\) /m],
        ["native_cargo", /^error\[E\d{4}\]|^error: could not compile/m],
        ["native_rust_panic", /^thread '.+' panicked at /m],
        ["native_go", /^# [\w./-]+\r?\n.*\.go:\d+:\d+: |^--- FAIL: |^FAIL\t/m],
        ["native_git", /^(?:\S+ : )?(fatal|error): /m],
        [
          "native_node",
          /^(?:Type|Reference|Syntax|Range)Error[: [\]]|^Error: Cannot find module|^node:internal\/|^E[A-Z]{4,10}: .+, (open|read|write|stat|lstat|scandir|readdir|rename|rmdir|unlink|mkdir|copyfile|realpath|access|chmod|symlink) '/m,
        ],
        [
          "native_docker",
          /^docker: Error|^Error response from daemon:|^(?:ERROR: )?failed to (solve|build|fetch|authorize|dial|do request):/m,
        ],
        ["native_pnpm", /ERR_PNPM_[A-Z_]+|^\u2009ELIFECYCLE\u2009/m],
        [
          "native_yarn",
          /^error Command failed|^(?:\u27A4 )?YN0000: .*Failed with errors|^(?:\u27A4 )?YN0001: /m,
        ],
        [
          "native_test_fail",
          /^FAIL |^ {2}[\u2717\u00D7\u2716] |^\s+\u25CF (?!Console\b)|^FAILED .+::/m,
        ],
        ["native_eslint", /^\s+\d+:\d+\s+error\s+.+\s{2}[@\w/-]+\r?$/m],
        ["ps_clixml", /#< CLIXML/],
        ["native_error_prefix", /^(?:\S+ : )?(?:\x1b\[[0-9;]*m)*Error: /m],
        ["native_command_error", /NativeCommandError|RemoteException/],
      ]));
    ((dQy = new Set([
      "head",
      "tail",
      "which",
      "touch",
      "grep",
      "sed",
      "awk",
      "wc",
      "chmod",
      "chown",
      "ln",
      "cut",
      "tr",
      "uniq",
      "xargs",
      "env",
      "seq",
      "realpath",
      "readlink",
      "basename",
      "dirname",
      "printf",
      "source",
      "export",
      "unset",
      "true",
      "false",
      "yes",
      "stat",
      "find",
      "less",
      "sudo",
    ])),
      (pQy = new Set([
        "git",
        "gh",
        "node",
        "npm",
        "npx",
        "yarn",
        "pnpm",
        "bun",
        "python",
        "python3",
        "pip",
        "pip3",
        "cargo",
        "rustc",
        "go",
        "dotnet",
        "java",
        "javac",
        "mvn",
        "gradle",
        "make",
        "cmake",
        "docker",
        "kubectl",
        "terraform",
        "az",
        "aws",
        "gcloud",
        "curl",
        "wget",
        "jq",
        "code",
      ])));
    fQy = [
      [
        "redirection_reserved",
        /RedirectionNotSupported|The '<{1,2}' operator is reserved for future use/,
      ],
      [
        "ampersand_reserved",
        /AmpersandNotAllowed|The ampersand \(&\) character is not allowed/,
      ],
      ["missing_type_name", /MissingTypename|Missing type name after '\['/],
      ["ps5_chain_op", KRd],
      [
        "string_missing_terminator",
        /TerminatorExpectedAtEndOfString|missing the terminator/,
      ],
      [
        "missing_brace_or_paren",
        /MissingEndCurlyBrace|MissingEndParenthesis|Missing closing '[)}]'/,
      ],
      [
        "missing_expression",
        /ExpectedValueExpression|MissingExpression|You must provide a value expression|Missing expression after/,
      ],
      [
        "unexpected_token",
        /UnexpectedToken|Unexpected token '[^']{0,40}' in expression or statement/,
      ],
    ];
  });
