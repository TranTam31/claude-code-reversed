// Module: u_t (lines 752617-752665)
  var u_t = S(() => {
    mh();
    RS();
    Rh();
    Afe();
    st();
    Ir();
    ((DSn = { name: (WC(), en(BIt)).ARTIFACT_TOOL_NAME, ui: (rua(), en(tua)) }),
      (bVx = [
        Vo,
        ri,
        fl,
        nu,
        zi,
        DT,
        qi,
        ...(kSn ? [kSn.name] : []),
        ...(ISn ? [ISn.name] : []),
        ...(RSn ? [RSn.name] : []),
        ...(DSn ? [DSn.name] : []),
      ]),
      (OGp = {
        get [Vo]() {
          return (fwr(), en(bda)).renderToolUseMessage;
        },
        get [ri]() {
          return (iwr(), en(Eqo)).renderToolUseMessage;
        },
        get [fl]() {
          return (Wua(), en(Bua)).renderToolUseMessage;
        },
        get [nu]() {
          return (rda(), en(tda)).renderToolUseMessage;
        },
        get [zi]() {
          return (oda(), en(nda)).renderToolUseMessage;
        },
        get [DT]() {
          return (hda(), en(mda)).renderToolUseMessage;
        },
        get [qi]() {
          return (_da(), en(yda)).renderToolUseMessage;
        },
        ...(kSn && { [kSn.name]: kSn.ui.renderToolUseMessage }),
        ...(ISn && { [ISn.name]: ISn.ui.renderToolUseMessage }),
        ...(RSn && { [RSn.name]: RSn.ui.renderToolUseMessage }),
        ...(DSn && { [DSn.name]: DSn.ui.renderToolUseMessage }),
      }));
  });
