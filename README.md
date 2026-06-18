# Module A — BMI Calculator

## Purpose

Reference module demonstrating the required `frontend/` + `bff/` structure. Computes Body Mass Index from height and weight via its dedicated BFF.

## This repo runs standalone

This repo doesn't need a consumer repo (e.g. `poc-blueprint`) checked out — clone it on its own and it's a complete, working project.

### Setup

It depends on `@hrtbrxkxr/shared-ui` (published to GitHub Packages), so `pnpm install` needs a GitHub PAT with `read:packages` scope exported first — this repo's own `.npmrc` already points the `@hrtbrxkxr` scope at the right registry:

```bash
export GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
pnpm install
```

(If you're working inside a consumer repo's workspace instead — e.g. `poc-blueprint/modules/module-a` — that consumer's root `.npmrc` has `link-workspace-packages=true`, so `@hrtbrxkxr/shared-ui` resolves to the local `packages/shared-ui` source instead and `GITHUB_TOKEN` isn't needed.)

### Run

```bash
# Terminal 1 — the BFF (port 4001, see module.config.ts)
cd bff && pnpm dev

# Terminal 2 — frontend playground (no shell, no auth), from this directory
pnpm dev   # http://localhost:5173
```

The playground (`frontend/dev/main.tsx`) mounts `ModuleAPage` directly. The BFF is only needed if you're exercising the "Calculate" button's actual data fetch — the UI renders fine without it otherwise.

## Commands

| Command | Description |
|---|---|
| `pnpm dev` | Standalone Vite playground for the frontend (port 5173) |
| `pnpm --filter module-a-frontend test` | Run frontend unit tests |
| `pnpm --filter module-a-bff dev` | Run the BFF locally on port 4001 |
| `pnpm --filter module-a-bff test` | Run BFF tests |

(The `--filter` form works from a consumer repo's workspace root; from inside this repo's own checkout, drop the `--filter module-a-frontend`/`module-a-bff` prefix and just run the script directly in that directory.)

## Testing

Unit tests live in `tests/unit`, integration tests in `tests/integration`, mocks in `tests/mocks`.

## Deployment

The BFF builds to a standalone Docker container (see `bff/Dockerfile`) and deploys independently of the shell and other modules.
