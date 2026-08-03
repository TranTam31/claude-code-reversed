// Module: wHi (lines 38268-38407)
  var wHi = S(() => {
    ((t3n = String.raw`(?:No tab with id: \d+|Tab \d+ (?:no longer exists|is not in the same group))`),
      (lfh = [
        {
          pattern: /^Permission denied for JavaScript execution/,
          errorType: "js_permission_denied",
        },
        {
          pattern:
            /^JavaScript execution error: Execution timeout: Code exceeded \d+-second limit$/,
          errorType: "js_timeout",
        },
        {
          pattern: /^JavaScript execution error:/,
          errorType: "js_execution_error",
        },
        {
          pattern: new RegExp(`^Failed to execute JavaScript: ${t3n}`),
          errorType: "tab_not_found",
        },
        {
          pattern: /^Failed to execute JavaScript:/,
          errorType: "js_exception",
        },
      ]),
      (cfh = [
        {
          pattern: /^Permission denied for this action/,
          errorType: "computer_permission_denied",
        },
        {
          pattern:
            /^No element found with reference|^Error getting element coordinates|^Failed to (execute script to get|get) element coordinates/,
          errorType: "computer_element_not_found",
        },
        {
          pattern:
            /^Error (clicking|hovering|scrolling|pressing key|performing drag|capturing)|^Failed to (type|scroll to element)/,
          errorType: "computer_action_failed",
        },
        {
          pattern:
            /^"[^"]*" was not pressed: page zoom keyboard shortcuts are not supported/,
          errorType: "computer_zoom_shortcut_unsupported",
        },
        {
          pattern: new RegExp(`^Failed to execute action: ${t3n}`),
          errorType: "tab_not_found",
        },
        {
          pattern: /^Failed to execute action:/,
          errorType: "computer_exception",
        },
      ]),
      (ufh = [
        {
          pattern: /^Permission denied for reading page content/,
          errorType: "get_page_text_permission_denied",
        },
        {
          pattern:
            /^No semantic content element found|^Output exceeds \d+ character limit/,
          errorType: "get_page_text_too_large",
        },
        {
          pattern: /^No text content found/,
          errorType: "get_page_text_no_content",
        },
        {
          pattern: /^Failed to extract page text: No main text content found/,
          errorType: "get_page_text_no_content",
        },
        {
          pattern:
            /^Failed to extract page text: (Script execution failed|Page script returned empty result)/,
          errorType: "get_page_text_script_error",
        },
        {
          pattern: new RegExp(`^Failed to extract page text: ${t3n}`),
          errorType: "tab_not_found",
        },
        {
          pattern: /^Failed to extract page text:/,
          errorType: "get_page_text_exception",
        },
      ]),
      (dfh = [
        {
          pattern: /^Permission denied by user\. Domain transition denied/,
          errorType: "navigation_blocked",
        },
        {
          pattern: /^Cannot access this page\. Claude cannot assist/,
          errorType: "navigation_blocked",
        },
        {
          pattern: /^Permission denied by user/,
          errorType: "permission_denied_user",
        },
        {
          pattern: /^Permission required but no handler/,
          errorType: "permission_handler_missing",
        },
        {
          pattern:
            /^Authentication failed\. The extension may need to be re-authenticated\. Please check your login status/,
          errorType: "authentication_failed",
        },
        {
          pattern:
            /^Authentication failed\. The extension may need to be re-authenticated\. Open the Claude in Chrome side panel/,
          errorType: "session_expired",
        },
        {
          pattern:
            /^Authentication failed\. The extension may need to be re-authenticated/,
          errorType: "authentication_failed",
        },
        { pattern: /^No tabs? available/, errorType: "no_tabs_available" },
        { pattern: /^This site is blocked/, errorType: "domain_blocked" },
        {
          pattern: /^This site is not allowed due to safety restrictions/,
          errorType: "domain_blocked",
        },
        {
          pattern: new RegExp(`^Tab \\d+ no longer exists|^${t3n}`),
          errorType: "tab_not_found",
        },
        {
          pattern:
            /^Security check failed: Domain changed|^Unable to verify current URL for security check/,
          errorType: "security_check_failed",
        },
      ]),
      (pfh = new Map([
        ["javascript_tool", lfh],
        ["computer", cfh],
        ["get_page_text", ufh],
      ])));
  });
