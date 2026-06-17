import { Router } from "express";

export const healthRouter = Router();

healthRouter.get("/health", (_req, res) => {
  res.json({ status: "ok", module: "module-a" });
});

healthRouter.get("/ready", (_req, res) => {
  res.json({ status: "ready", module: "module-a" });
});
