import type { BmiRequest, BmiResult } from "../types/bmi.types";

export async function calculateBmi(bffUrl: string, payload: BmiRequest): Promise<BmiResult> {
  const response = await fetch(`${bffUrl}/api/bmi/calculate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`BMI calculation failed: ${response.status}`);
  }

  return (await response.json()) as BmiResult;
}
