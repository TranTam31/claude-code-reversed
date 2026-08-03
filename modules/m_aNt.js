// Module: aNt (lines 401941-401953)
  var aNt = S(() => {
    ((bNy = new Set([Use, NEe])),
      (g1T = [
        /^(?:bun|npm|yarn|pnpm|deno)\s+(?:run\s+)?test\b/,
        /^(?:\.\/)?(?:go|cargo|make|mvn|gradle|gradlew|dotnet|swift|mix|sbt|lein|rake|zig|bazel|nx|turbo)\s+test\b/,
        new RegExp(`^${Kud}(?:pytest|jest|vitest|rspec|phpunit|ctest)\\b`),
        /^(?:bun|npm|yarn|pnpm)\s+run\s+test:\S/,
      ]),
      (y1T = [
        /^(?:bun|npm|yarn|pnpm)\s+run\s+typecheck\b/,
        new RegExp(`^${Kud}(?:tsc|mypy)\\b`),
      ]));
  });
