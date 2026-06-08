import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

const REVISE_PROMPT = `Review this session for learnings about working with pi in this codebase. Update AGENTS.md with context that would help future pi sessions be more effective.

## Step 1: Reflect

What context was missing that would have helped pi work more effectively?
- Bash commands that were used or discovered
- Code style patterns followed
- Testing approaches that worked
- Environment/configuration quirks
- Warnings or gotchas encountered

## Step 2: Find AGENTS.md Files

Run:
\`\`\`bash
find . -name "AGENTS.md" -o -name ".agents.md" -o -name ".agents.local.md" 2>/dev/null | head -20
\`\`\`

Decide where each addition belongs:
- \`AGENTS.md\` — Team-shared (checked into git)
- \`.agents.local.md\` — Personal/local only (gitignored)
- \`.pi/AGENTS.md\` — Pi-specific project context

## Step 3: Draft Additions

**Keep it concise** — one line per concept. AGENTS.md is part of the prompt, so brevity matters.

Format: \`<command or pattern>\` — \`<brief description>\`

Avoid:
- Verbose explanations
- Obvious information
- One-off fixes unlikely to recur

## Step 4: Show Proposed Changes

For each addition, use this format:

\`\`\`
### Update: ./AGENTS.md

**Why:** [one-line reason]

\`\`\`diff
+ [the addition — keep it brief]
\`\`\`
\`\`\`

## Step 5: Apply with Approval

Ask if I want to apply the changes. Only edit files I approve.`;

export default function (pi: ExtensionAPI) {
  pi.registerCommand("revise-agent-md", {
    description:
      "Capture session learnings and propose AGENTS.md updates",
    handler: async (_args, ctx) => {
      const isStreaming = ctx.hasPendingMessages?.() ?? false;

      if (isStreaming) {
        pi.sendUserMessage(REVISE_PROMPT, { deliverAs: "followUp" });
      } else {
        pi.sendUserMessage(REVISE_PROMPT);
      }

      if (ctx.hasUI) {
        ctx.ui.notify(
          "Analyzing session to propose AGENTS.md improvements...",
          "info",
        );
      }
    },
  });
}
