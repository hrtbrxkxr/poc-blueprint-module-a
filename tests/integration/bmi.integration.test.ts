import { describe, expect, it } from "vitest";
import request from "supertest";
import { app } from "../../bff/server";

describe("POST /api/bmi/calculate", () => {
  it("returns a computed BMI for valid input", async () => {
    const res = await request(app).post("/api/bmi/calculate").send({ heightCm: 170, weightKg: 65 });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ bmi: 22.5, category: "normal" });
  });

  it("rejects invalid input", async () => {
    const res = await request(app).post("/api/bmi/calculate").send({ heightCm: -1, weightKg: 65 });
    expect(res.status).toBe(400);
  });
});
