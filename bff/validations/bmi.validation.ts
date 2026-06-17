import { z } from "zod";

export const bmiRequestSchema = z.object({
  heightCm: z.number().min(50).max(272),
  weightKg: z.number().min(2).max(650),
});
