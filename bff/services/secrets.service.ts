import { hydrateEnvFromVault, createLogger } from "@hrtbrxkxr/shared-utils";

const logger = createLogger("module-a-bff-secrets");

/**
 * Credentials this BFF needs to call its own backend service. Sourced from
 * Vault in staging/production; falls back to whatever is in .env locally.
 */
const VAULT_MANAGED_KEYS = ["BACKEND_SERVICE_API_KEY"] as const;

export async function loadSecretsFromVault(): Promise<void> {
  await hydrateEnvFromVault({
    keys: VAULT_MANAGED_KEYS,
    secretPath: process.env.VAULT_SECRET_PATH,
    logger,
  });
}
