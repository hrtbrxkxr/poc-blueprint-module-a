export async function fetchFromBackend<T>(url: string, init?: RequestInit): Promise<T> {
  const apiKey = process.env.BACKEND_SERVICE_API_KEY;

  const response = await fetch(url, {
    ...init,
    headers: {
      ...init?.headers,
      ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
    },
  });

  if (!response.ok) {
    throw new Error(`Backend request failed: ${response.status} ${response.statusText}`);
  }
  return (await response.json()) as T;
}
