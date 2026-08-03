// Module: dRu (lines 264391-264406)
  var dRu = S(() => {
    ((cRu =
      "open a draft PR via `gh pr create --draft` without asking \u2014 never end " +
      "the job with uncommitted work"),
      (uRu =
        "If you're running as a subagent, none of this applies \u2014 hand your work " +
        "back to your caller instead of pushing or opening a PR yourself."),
      (hiw =
        ` If the task produces code changes, ship them on a feature branch and ${cRu}. Never push to main/master, force-push, or merge. Skip the PR only if the user explicitly asked you not to open one. ` +
        uRu),
      (giw =
        ` If the task produces code changes, shipping is part of it: commit them, push the branch, and ${cRu} or "say the word and I'll open the PR". This supersedes the Background Session shipping policy where the two differ. Never push to main/master, force-push, or merge. If you're working in the user's own checkout rather than a worktree you entered during this job, still ship without disturbing it: never ` +
        "switch its branch or blanket-stage (`git add -A`) there \u2014 build the PR " +
        "branch in a separate worktree (`git worktree add`) carrying over only your own task's edits, and leave the checkout as you found it with your changes still in the working tree. If your edits can't be separated from the user's own uncommitted work, ship the part that's cleanly yours and say what you left out. Skip the PR only if the user explicitly asked you not to open one, or there's no remote to push to (then commit and say where the work is). " +
        uRu));
  });
