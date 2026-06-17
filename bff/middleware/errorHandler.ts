import type { NextFunction, Request, Response } from "express";

export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  const message = err instanceof Error ? err.message : "Internal Server Error";
  // eslint-disable-next-line no-console
  console.error(JSON.stringify({ level: "error", scope: "module-a-bff", message }));
  res.status(500).json({ error: message });
}
