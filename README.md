# AGENTS.md Management

Tools to maintain and improve AGENTS.md files — audit quality, capture session learnings, and keep project memory current.

## What It Does

Two complementary features for different purposes:

| | agent-md-improver (skill) | /revise-agent-md (command) |
|---|---|---|
| **Purpose** | Keep AGENTS.md aligned with codebase | Capture session learnings |
| **Triggered by** | Codebase changes | End of session |
| **Use when** | Periodic maintenance | Session revealed missing context |

## Usage

### Skill: agent-md-improver

Audits AGENTS.md files against current codebase state:

```
/audit my AGENTS.md files
/check if my AGENTS.md is up to date
```

The skill scans all AGENTS.md files, evaluates them against quality criteria, outputs a detailed quality report, and (with your approval) applies targeted improvements.

### Command: /revise-agent-md

Captures learnings from the current session:

```
/revise-agent-md
```

Reviews the current session for missing context, patterns, commands, and gotchas that should be documented in AGENTS.md. Shows proposed changes with diffs and applies them with your approval.

## Installation

Install from GitHub:

```bash
pi install git:github.com/YOUR_USERNAME/agent-md-management
```

Or install locally:

```bash
pi install /path/to/agent-md-management
```

## What Makes a Great AGENTS.md

- **Concise and human-readable** — Dense is better than verbose
- **Actionable commands** — Everything copy-paste ready
- **Project-specific patterns** — Not generic advice
- **Non-obvious gotchas** — Things an AI agent can't easily infer
- **Up to date** — Reflects current codebase state

## Inspiration

Inspired by [claude-md-management](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-md-management) from Anthropic's official Claude Code plugins.

## License

Apache-2.0
