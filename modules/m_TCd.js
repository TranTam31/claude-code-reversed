// Module: TCd (lines 479339-479496)
  var TCd = S(() => {
    Vn();
    pt();
    Zr();
    vt();
    Ss();
    Ar();
    Qr();
    Vb();
    qHe();
    ((HKy = Se(() =>
      v.strictObject({
        message: v
          .string()
          .min(1)
          .describe(
            "The notification body. Keep it under 200 characters; mobile OSes truncate.",
          ),
        status: v.literal("proactive"),
      }),
    )),
      (kKy = Se(() =>
        v.object({
          message: v.string(),
          pushSent: v.boolean().optional(),
          localSent: v.boolean().optional(),
          disabledReason: v
            .enum(["config_off", "user_present", "no_transport"])
            .optional(),
          sentAt: v
            .string()
            .optional()
            .describe(
              "ISO timestamp captured at tool execution on the emitting process. Optional \u2014 resumed sessions replay pre-sentAt outputs verbatim.",
            ),
        }),
      )),
      (RKy = Ui({
        name: _ee,
        searchHint:
          "send a notification to the user via terminal and optionally mobile",
        maxResultSizeChars: 1000,
        userFacingName: () => "PushNotification",
        get inputSchema() {
          return HKy();
        },
        get outputSchema() {
          return kKy();
        },
        shouldDefer: !0,
        isEnabled() {
          return pbe("tengu_kairos_push_notifications", !1, IKy);
        },
        isConcurrencySafe() {
          return !0;
        },
        isReadOnly() {
          return !0;
        },
        toAutoClassifierInput(e) {
          return e.message;
        },
        async description() {
          return MPu;
        },
        async prompt() {
          return LPu();
        },
        mapToolResultToToolResultBlockParam(e, t) {
          let r;
          if (e.disabledReason === "config_off")
            r = "Push not sent \u2014 mobile push is disabled in /config.";
          else if (e.disabledReason === "user_present")
            r =
              "Not sent \u2014 this terminal is active, so your output here already reaches the user; a separate notification would be redundant.";
          else if (e.disabledReason === "no_transport")
            r = e.localSent
              ? "Terminal notification sent. Mobile push not sent (Remote Control inactive)."
              : "Mobile push not sent (Remote Control inactive).";
          else
            r = e.localSent
              ? "Terminal notification sent. Mobile push requested."
              : "Mobile push requested.";
          return { tool_use_id: t, type: "tool_result", content: r };
        },
        renderToolUseMessage(e) {
          if (!e.message) return "";
          return e.message;
        },
        async call({ message: e }, t, r, n, o) {
          let i = new Date().toISOString(),
            s = Yt(process.env.CLAUDE_CODE_REMOTE) || ba(),
            a = s || $x(),
            l = ({ pushSent: u, localSent: d, disabledReason: p }) => {
              O("tengu_push_notification_send", {
                message_length: e.length,
                push_sent: u,
                local_sent: d,
                is_remote: s,
                disabled_reason: Xo(p),
              });
            };
          if (a && !s && !Mc("agentPushNotifEnabled", !1).value)
            return (
              l({ pushSent: !1, localSent: !1, disabledReason: "config_off" }),
              {
                data: {
                  message: e,
                  pushSent: !1,
                  localSent: !1,
                  disabledReason: "config_off",
                  sentAt: i,
                },
              }
            );
          if (!s && !Z.CLAUDE_CODE_DISABLE_NOTIFICATION_PRESENCE_CHECK && gSi())
            return (
              l({
                pushSent: !1,
                localSent: !1,
                disabledReason: "user_present",
              }),
              {
                data: {
                  message: e,
                  pushSent: !1,
                  localSent: !1,
                  disabledReason: "user_present",
                  sentAt: i,
                },
              }
            );
          o?.({
            type: "os_notification",
            message: e,
            notificationType: "push_notification",
          });
          let c = !t.options.isNonInteractiveSession;
          if (!a)
            return (
              l({ pushSent: !1, localSent: c, disabledReason: "no_transport" }),
              {
                data: {
                  message: e,
                  pushSent: !1,
                  localSent: c,
                  disabledReason: "no_transport",
                  sentAt: i,
                },
              }
            );
          return (
            l({ pushSent: !0, localSent: c }),
            { data: { message: e, pushSent: !0, localSent: c, sentAt: i } }
          );
        },
      })));
  });
