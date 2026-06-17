# Module A — BMI Calculator

## Purpose

Reference module demonstrating the required `frontend/` + `bff/` structure. Computes Body Mass Index from height and weight via its dedicated BFF.

## Setup

```bash
pnpm install
```

## Commands

| Command | Description |
|---|---|
| `pnpm --filter module-a-frontend test` | Run frontend unit tests |
| `pnpm --filter module-a-bff dev` | Run the BFF locally on port 4001 |
| `pnpm --filter module-a-bff test` | Run BFF tests |

## Testing

Unit tests live in `tests/unit`, integration tests in `tests/integration`, mocks in `tests/mocks`.

## Deployment

The BFF builds to a standalone Docker container (see `bff/Dockerfile`) and deploys independently of the shell and other modules.
