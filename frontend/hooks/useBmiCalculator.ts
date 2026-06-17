import { useState } from "react";
import { bmiRequestSchema } from "../validations/bmi.schema";
import { calculateBmi } from "../services/bmi.service";
import type { BmiResult } from "../types/bmi.types";

export function useBmiCalculator(bffUrl: string) {
  const [result, setResult] = useState<BmiResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(heightCm: number, weightKg: number) {
    setError(null);
    const parsed = bmiRequestSchema.safeParse({ heightCm, weightKg });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }

    setLoading(true);
    try {
      const bmiResult = await calculateBmi(bffUrl, parsed.data);
      setResult(bmiResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  return { result, error, loading, submit };
}
