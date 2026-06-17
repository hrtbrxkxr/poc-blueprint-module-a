import type { BmiResponseDto } from "../types/bmi.types";

export function toBmiCategory(bmi: number): BmiResponseDto["category"] {
  if (bmi < 18.5) return "underweight";
  if (bmi < 25) return "normal";
  if (bmi < 30) return "overweight";
  return "obese";
}
