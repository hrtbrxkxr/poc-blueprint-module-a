export interface BmiRequestDto {
  heightCm: number;
  weightKg: number;
}

export interface BmiResponseDto {
  bmi: number;
  category: "underweight" | "normal" | "overweight" | "obese";
}
