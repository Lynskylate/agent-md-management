# AGENTS.md Templates

Templates for different project types. Adapt these to your specific project — they are starting points, not rigid requirements.

## Generic Project Template

```markdown
# AGENTS.md

## Commands

| Action | Command |
|--------|---------|
| Install | `<install cmd>` |
| Build | `<build cmd>` |
| Test | `<test cmd>` |
| Lint | `<lint cmd>` |
| Run | `<run cmd>` |

## Architecture

- `src/` — Source code
- `tests/` — Test files
- `docs/` — Documentation

## Key Files

- Entry point: `<path>`
- Config: `<path>`
- Main types: `<path>`

## Code Style

- Language: `<language> <version>`
- Formatter: `<tool>`
- Linter: `<tool>`

## Environment

- Required: `<env vars>`
- Setup: `<setup steps>`

## Gotchas

- `<non-obvious quirk>`

## Testing

- Run all: `<cmd>`
- Run one: `<cmd>`
- Coverage: `<cmd>`

## Workflow

- CI: `<pipeline info>`
- Deploy: `<deploy info>`
```

## Node.js / TypeScript Template

```markdown
# AGENTS.md

## Commands

| Action | Command |
|--------|---------|
| Install | `npm install` |
| Dev | `npm run dev` |
| Build | `npm run build` |
| Test | `npm test` |
| Test single | `npm test -- -t 'name'` |
| Lint | `npm run lint` |
| Type check | `npm run typecheck` |

## Architecture

- `src/` — Source code
  - `src/index.ts` — Entry point
  - `src/routes/` — API routes
  - `src/services/` — Business logic
- `tests/` — Test files (co-located or mirror src/)
- `dist/` — Build output (gitignored)

## Code Style

- TypeScript strict mode
- Prettier for formatting
- ESLint for linting

## Environment

- `.env` file required with: `DATABASE_URL`, `API_KEY`
- Copy `.env.example` to `.env`

## Gotchas

- `npm run build` must run before `npm start` in production
- Tests use an in-memory database, no setup needed
```

## Python Template

```markdown
# AGENTS.md

## Commands

| Action | Command |
|--------|---------|
| Install | `pip install -e ".[dev]"` |
| Test | `pytest` |
| Test single | `pytest tests/test_file.py::test_name` |
| Lint | `ruff check .` |
| Format | `ruff format .` |
| Run | `python -m myapp` |

## Architecture

- `src/myapp/` — Application code
- `tests/` — Test files
- `pyproject.toml` — Project config and dependencies

## Code Style

- Python 3.12+
- Ruff for linting and formatting
- Type hints required for all public functions

## Environment

- Virtual env: `python -m venv .venv && source .venv/bin/activate`
- Required env vars: `DATABASE_URL`

## Gotchas

- Pre-commit hooks run ruff automatically; install with `pre-commit install`
```

## Go Template

```markdown
# AGENTS.md

## Commands

| Action | Command |
|--------|---------|
| Build | `go build ./...` |
| Test | `go test ./...` |
| Test single | `go test ./pkg/foo -run '^TestBar$'` |
| Lint | `go vet ./...` |
| Format | `go fmt ./...` |
| Run | `go run ./cmd/server/` |

## Architecture

- `cmd/` — Entry points (one per binary)
- `internal/` — Private application code
- `pkg/` — Shared library code
- `gen/` — Generated code (do not edit)

## Code Style

- Standard Go formatting (`go fmt`)
- Error handling: use `errors.Is`/`errors.As`, never string comparison
- Fail fast at construction, don't nil-check at runtime

## Gotchas

- Generated code under `gen/` must not be hand-edited
- Run `go generate ./...` after changing proto files
```

## Rust Template

```markdown
# AGENTS.md

## Commands

| Action | Command |
|--------|---------|
| Build | `cargo build` |
| Release | `cargo build --release` |
| Test | `cargo test` |
| Test single | `cargo test test_name` |
| Lint | `cargo clippy -- -D warnings` |
| Format | `cargo fmt -- --check` |
| Run | `cargo run` |

## Architecture

- `src/main.rs` — Binary entry point
- `src/lib.rs` — Library root
- `src/<module>/` — Module directories
- `tests/` — Integration tests

## Code Style

- `cargo fmt` for formatting
- `cargo clippy` for linting
- Prefer `thiserror` for error types, `anyhow` for application code

## Gotchas

- Run `cargo fmt` and `cargo clippy` before committing
- Feature flags are defined in `Cargo.toml`
```

## Multi-Project / Monorepo Template

```markdown
# AGENTS.md

## Repository Layout

- `backend/` — API server (Go)
  - See `backend/AGENTS.md` for details
- `frontend/` — Web UI (React + TypeScript)
  - See `frontend/AGENTS.md` for details
- `shared/` — Shared types and utilities
- `docs/` — Documentation

## Cross-Project Commands

| Action | Command |
|--------|---------|
| Full build | `make build` |
| Full test | `make test` |
| Lint all | `make lint` |

## Workflow

1. Backend changes: work in `backend/`, follow its AGENTS.md
2. Frontend changes: work in `frontend/`, follow its AGENTS.md
3. API changes: update proto files, regenerate clients in both projects

## Gotchas

- Frontend SDK is generated from backend proto; run `make generate` after proto changes
```

## Tips for Customizing

1. **Only include sections relevant to your project** — skip sections that don't apply
2. **Keep commands exact** — use real commands, not placeholders
3. **Update the date** — add a "Last updated: YYYY-MM-DD" line so freshness is clear
4. **Add project-specific gotchas** — these are the most valuable part for AI agents
5. **Don't duplicate what's obvious from reading code** — focus on what an AI agent can't easily infer
