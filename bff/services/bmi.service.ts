import type { BmiRequestDto, BmiResponseDto } from "../types/bmi.types";
import { toBmiCategory } from "../mappers/bmi.mapper";

export function computeBmi({ heightCm, weightKg }: BmiRequestDto): BmiResponseDto {
  const heightM = heightCm / 100;
  const bmi = Math.round((weightKg / (heightM * heightM)) * 10) / 10;
  return { bmi, category: toBmiCategory(bmi) };
}
