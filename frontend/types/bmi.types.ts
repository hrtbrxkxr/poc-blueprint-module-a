export interface BmiRequest {
  heightCm: number;
  weightKg: number;
}

export interface BmiResult {
  bmi: number;
  category: "underweight" | "normal" | "overweight" | "obese";
}
