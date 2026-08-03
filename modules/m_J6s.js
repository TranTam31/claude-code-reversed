// Module: J6s (lines 603465-603581)
  var J6s = S(() => {
    mh();
    Bj();
    Rh();
    VM();
    ND();
    ict();
    qIo();
    ASe();
    f4();
    KHe();
    Sbo();
    ((mrp = en(f1s).SEARCH_MCP_REGISTRY_TOOL_NAME),
      (hrp = en(y1s).SUGGEST_CONNECTORS_TOOL_NAME),
      (grp = en(E1s).LIST_CONNECTORS_TOOL_NAME),
      (L1_ = (O1s(), en(L1s)).PLUGIN_SKILL_SAFE_TOOL_NAMES),
      (O1_ = new Set([
        zi,
        bd,
        xd,
        nct,
        Zv,
        bSe,
        Zie,
        Qie,
        Dpe,
        fct,
        o2,
        Uj,
        p4,
        iFe,
        K8,
        Q5,
        y1,
        See,
        Fm,
        Eir,
        Jie,
        b$,
        ff,
        ...(frp ? [frp] : []),
        ...(mrp ? [mrp] : []),
        ...(hrp ? [hrp] : []),
        umr,
        ...(grp ? [grp] : []),
        ...L1_,
      ])),
      (i2o = ["mcp__Claude_Preview__", "mcp__Claude_Browser__"]),
      (M_r = ["mcp__claude-in-chrome__", "mcp__Claude_in_Chrome__", ...i2o]));
    ((yrp = [
      "find",
      "get_page_text",
      "list_connected_browsers",
      "read_page",
      "resize_window",
      "shortcuts_list",
      "switch_browser",
      "tabs_close_mcp",
    ]),
      (N1_ = new Set([
        ...yrp.flatMap((e) => M_r.map((t) => t + e)),
        ...["tabs_close", "tabs_create", "tabs_select"].flatMap((e) =>
          i2o.map((t) => t + e),
        ),
      ])),
      (_rp = new Map([
        ...[...gen].flatMap(([e, t]) => M_r.map((r) => [r + e, t])),
        ...i2o.map((e) => [`${e}tabs_context`, BEs]),
      ])),
      (brp = new Set(M_r.map((e) => `${e}computer`))),
      (Srp = new Set(M_r.map((e) => `${e}browser_batch`))),
      ($1_ = new Set([
        "screenshot",
        "zoom",
        "wait",
        "get_page_text",
        "find",
        "scroll",
        "scroll_to",
        "hover",
        "mouse_move",
        "cursor_position",
        "left_click",
        "right_click",
        "middle_click",
        "double_click",
        "triple_click",
        "left_click_drag",
      ])));
    ((F1_ = new Set(yrp)), (U1_ = new Map([["computer", Y6s], ...gen])));
    ((vrp = [
      "find",
      "get_page_text",
      "list_connected_browsers",
      "read_page",
      "shortcuts_list",
    ]),
      (j1_ = new Set(vrp.flatMap((e) => M_r.map((t) => t + e)))),
      (W1_ = new Set([
        "screenshot",
        "wait",
        "get_page_text",
        "find",
        "cursor_position",
      ])));
    ((G1_ = new Set(vrp)), (V1_ = new Map([["computer", Arp], ...gen])));
    z1_ = new Set([
      Vo,
      W0,
      PKe,
      RIe,
      Fg,
      ...(z6s
        ? [z6s.SPAWN_LOCAL_TOOL_NAME, z6s.REQUEUE_SESSION_TOOL_NAME]
        : []),
    ]);
  });
