# AGENTS.md Update Guidelines

Best practices for updating AGENTS.md files. Follow these to ensure updates add real value without cluttering the prompt.

## When to Update

Update AGENTS.md when:
- You discover a command pattern that wasn't documented
- You hit a gotcha that cost time to debug
- The codebase structure changes significantly
- New tools, linters, or formatters are added
- CI/CD pipeline changes affect development workflows
- Environment setup steps change

## When NOT to Update

Don't update for:
- Single-session issues that won't recur
- Information easily inferred from reading code
- Generic programming advice
- Temporary workarounds for short-lived issues
- Personal preferences you'd put in `.agents.local.md`

## Writing Style

### Do:
- Use imperative, direct language: "Run `go test ./...` to test"
- Keep entries to one line when possible
- Use tables for commands and structured info
- Use code blocks for commands and file paths
- Start section headers with `##`

### Don't:
- Write paragraphs when bullets suffice
- Use passive voice: "Tests can be run by executing..."
- Include "Note:" or "Tip:" prefixes (just say the thing)
- Add sections with no content ("TBD", "Coming soon")
- Repeat the same information in multiple places

## Section Prioritization

When file size is a concern, keep sections in this priority order:

1. **Commands** — Most important, what agents execute most often
2. **Architecture** — Essential for navigation and understanding
3. **Gotchas** — High value per word, prevent common mistakes
4. **Environment** — Critical for getting started
5. **Code Style** — Important but often inferrable
6. **Testing** — Useful but often standard per framework
7. **Workflow** — Nice to have, can be consolidated

## Diff Format

When proposing changes, use this format for clarity:

```markdown
### Update: path/to/AGENTS.md

**Why:** [one-line reason explaining the gap being filled]

```diff
+ ## New Section
+
+ - pattern one-liner
+ - another one-liner
```

### Update: path/to/AGENTS.md

**Why:** Fix outdated build command

```diff
- npm run build:old
+ npm run build
```
```

## Section-Specific Guidelines

### Commands Section
- Every command should be copy-paste ready
- Include working directory if non-obvious
- Use table format for multiple commands
- Group by action (build, test, deploy, etc.)
- Document flags for common variants

### Architecture Section
- Focus on directory structure and relationships
- Explain _why_ the structure exists, not just what's there
- Mention any architectural patterns (hexagonal, layered, etc.)
- Note entry points and composition roots

### Gotchas Section
- Each entry should save an agent from a debug cycle
- Include the symptom and the fix
- Keep to genuinely non-obvious issues
- Remove entries that no longer apply

### Code Style Section
- Reference tool config files, don't duplicate rules
- Mention language version and key conventions
- Note any deviations from standard practice
- Keep linter/formatter commands actionable

## Removing Stale Content

Signs content should be removed:
- References a file that no longer exists
- Describes a command that errors out
- Mentions a tool or library that's been replaced
- Documents a process that's been automated
- Contains dates older than 6 months without verification

When removing, prefer deletion over commenting out. If in doubt, verify with the user first.

## Merging Updates

When updating an existing AGENTS.md:
1. **Read the current file first** — understand what's there
2. **Identify gaps** — what's missing, what's stale
3. **Preserve existing structure** — add to it, don't rewrite
4. **Don't remove human-authored content** without asking
5. **Keep the existing section order** — consistency matters

## Post-Update Verification

After updating:
1. Verify all commands actually work
2. Check that file paths exist
3. Ensure formatting is consistent
4. Confirm no duplicate information was introduced
5. Check that AGENTS.md is still scannable at a glance
