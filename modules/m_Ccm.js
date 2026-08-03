// Module: Ccm (lines 939590-939618)
  var Ccm = S(() => {
    vt();
    ei();
    b_();
    Ecm = require("fs/promises");
    aKS = {
      python: [
        ".py",
        "requirements.txt",
        "pyproject.toml",
        "setup.py",
        "Pipfile",
      ],
      typescript: [".ts", ".tsx", "tsconfig.json", "package.json"],
      java: [".java", "pom.xml", "build.gradle"],
      go: [".go", "go.mod"],
      ruby: [".rb", "Gemfile"],
      csharp: [".cs", ".csproj"],
      php: [".php", "composer.json"],
      curl: [],
    };
    ((Acm = [
      "Reference for the Claude API / Anthropic SDK \u2014 model ids, pricing, params, streaming, tool use, MCP, agents, caching, token counting, model migration.",
      'TRIGGER \u2014 read BEFORE opening the target file; don\'t skip because it "looks like a one-liner" \u2014 whenever: the prompt names Claude/Anthropic in any form (Claude, Anthropic, Fable, Opus, Sonnet, Haiku, `anthropic`, `@anthropic-ai`, `claude-*`, `us.anthropic.*`, `[1m]`); the user asks about an LLM (pricing/model choice/limits/caching) \u2014 never answer from memory; OR the task is LLM-shaped with provider unstated (agent/MCP/tool-definition/multi-agent/RAG/LLM-judge/computer-use; generate/summarize/extract/classify/rewrite/converse over NL; debugging refusals/cutoffs/streaming/tool-calls/tokens).',
      "SKIP only when another provider is being worked on (overrides all triggers): OpenAI/GPT/Gemini/Llama/Mistral/Cohere/Ollama named in the query; OR `grep -rE 'openai|langchain_openai|google.generativeai|genai|mistralai|cohere|ollama'` over the project hits (run this grep FIRST if no provider named \u2014 don't Read the file).",
    ].join(`
`)),
      (dKS = ["migrate", "managed-agents-onboard"]));
  });
