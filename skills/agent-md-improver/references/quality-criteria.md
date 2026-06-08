# AGENTS.md Quality Criteria

Detailed rubrics for evaluating AGENTS.md file quality. Each criterion is scored on a 0-20 or 0-15 scale depending on its weight.

## 1. Commands & Workflows (Weight: High, Max: 20)

Does the AGENTS.md document the essential commands needed to work with the project?

**20 (Excellent):**
- Build, test, lint, and run commands all documented
- Commands are copy-paste ready with exact syntax
- Environment-specific variants documented (dev vs ci, local vs docker)
- Setup/bootstrap commands covered
- Package manager commands included (npm, pip, go, etc.)

**15 (Good):**
- Most essential commands documented
- Minor gaps (missing lint command, dev server port not specified)
- Commands are mostly copy-paste ready

**10 (Adequate):**
- Basic build/test commands present
- Several command gaps
- Some commands require interpretation to use

**5 (Poor):**
- Only one or two commands mentioned
- Commands are vague or likely outdated
- Missing entire categories (no test commands, no build commands)

**0 (Missing):**
- No commands documented at all

---

## 2. Architecture Clarity (Weight: High, Max: 20)

Can an AI agent understand the project structure from this document?

**20 (Excellent):**
- Clear directory tree or structure map
- Each top-level directory purpose explained
- Entry points identified (main files, composition roots)
- Layer/component relationships explained
- Data flow or request flow described

**15 (Good):**
- Directory structure documented
- Most key directories explained
- Entry points mentioned
- Some architectural patterns described

**10 (Adequate):**
- Basic directory listing
- Vague descriptions of key directories
- Missing layer relationships
- No entry points mentioned

**5 (Poor):**
- Directory list without purpose
- No architectural patterns
- Confusing or inaccurate structure

**0 (Missing):**
- No architecture documentation at all

---

## 3. Non-Obvious Patterns (Weight: Medium, Max: 15)

Are gotchas, quirks, and non-obvious conventions captured?

**15 (Excellent):**
- Code style patterns explicitly documented
- Testing conventions and patterns described
- Environment quirks and workarounds captured
- Configuration gotchas documented
- Build/deploy pipeline nuances covered
- Error handling conventions noted

**10 (Good):**
- Most important conventions documented
- Some gotchas captured
- Minor edge cases not covered

**5 (Adequate):**
- Only the most obvious conventions
- Missing important gotchas
- Generic advice without project specifics

**0 (Missing):**
- No convention or gotcha documentation

---

## 4. Conciseness (Weight: Medium, Max: 15)

Is the document dense with useful information, or padded with obvious filler?

**15 (Excellent):**
- Every section adds unique value
- Information density is high
- No restating what's obvious from reading code
- Formatting aids scannability (tables, bullet points, headers)
- Appropriate length for project complexity

**10 (Good):**
- Mostly concise
- Some minor redundancy
- Good use of formatting

**5 (Adequate):**
- Contains filler or obvious statements
- Overly verbose explanations
- Poor formatting hinders scanning

**0 (Poor):**
- Mostly obvious or redundant content
- Excessively long with low information density

---

## 5. Currency (Weight: High, Max: 15)

Does the document reflect the current state of the codebase?

**15 (Excellent):**
- All commands verified as working
- Directory structure matches current codebase
- No stale or deprecated references
- Recently added files/packages reflected
- Dated/revisioned so freshness is clear

**10 (Good):**
- Most content current
- Minor outdated references
- One or two stale commands

**5 (Adequate):**
- Multiple outdated sections
- References to removed files or packages
- Commands that no longer work

**0 (Poor):**
- Severely outdated
- Misleading instructions
- References codebase state from months ago

---

## 6. Actionability (Weight: High, Max: 15)

Can an AI agent directly act on the instructions without guessing?

**15 (Excellent):**
- All commands are exact and executable
- File paths are specific and verifiable
- Instructions are concrete (not "use appropriate tool" but "use `npm test`")
- Decision points have clear branching
- Error scenarios have prescribed responses

**10 (Good):**
- Most instructions are actionable
- Some vague guidance
- Missing error handling instructions

**5 (Adequate):**
- Several vague or non-actionable instructions
- Requires significant inference to use
- Commands lack exact syntax

**0 (Poor):**
- Primarily vague advice
- Cannot execute without significant interpretation
- Missing critical details needed to act

---

## Scoring Summary

| Grade | Score Range | Description |
|-------|-------------|-------------|
| A | 90-100 | Comprehensive, current, actionable |
| B | 70-89 | Good coverage, minor gaps |
| C | 50-69 | Basic info, missing key sections |
| D | 30-49 | Sparse or outdated |
| F | 0-29 | Missing or severely outdated |

## What to Flag

When auditing, pay special attention to:

1. **Commands that no longer work** — e.g., build scripts that have been renamed
2. **Outdated architecture** — e.g., directories that moved or were deleted
3. **Missing critical sections** — e.g., no test commands in a project with extensive tests
4. **Vague instructions** — e.g., "run the tests" without specifying the command
5. **Missing environment setup** — e.g., required env vars not documented
6. **Deprecated tool references** — e.g., referencing linters no longer in use
