import { describe, expect, it } from "vitest";
import { computeBmi } from "./bmi.service";

describe("computeBmi", () => {
  it("computes a normal BMI", () => {
    expect(computeBmi({ heightCm: 170, weightKg: 65 })).toEqual({ bmi: 22.5, category: "normal" });
  });

  it("computes an obese BMI", () => {
    expect(computeBmi({ heightCm: 160, weightKg: 100 }).category).toBe("obese");
  });
});
