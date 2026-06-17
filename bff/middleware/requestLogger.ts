import type { NextFunction, Request, Response } from "express";

export function requestLogger(req: Request, _res: Response, next: NextFunction) {
  console.log(JSON.stringify({ level: "info", scope: "module-a-bff", method: req.method, path: req.path }));
  next();
}
