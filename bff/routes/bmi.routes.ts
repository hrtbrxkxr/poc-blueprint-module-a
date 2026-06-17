import { Router } from "express";
import { bmiRequestSchema } from "../validations/bmi.validation";
import { computeBmi } from "../services/bmi.service";

export const bmiRouter = Router();

bmiRouter.post("/calculate", (req, res) => {
  const parsed = bmiRequestSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.issues[0]?.message ?? "Invalid request" });
    return;
  }

  res.json(computeBmi(parsed.data));
});
