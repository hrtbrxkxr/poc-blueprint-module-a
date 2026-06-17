"use client";

import { useState } from "react";
import { Button, Input, Card } from "@platform/shared-ui";
import { useBmiCalculator } from "../hooks/useBmiCalculator";

export function BmiCalculator({ bffUrl }: { bffUrl: string }) {
  const [height, setHeight] = useState("170");
  const [weight, setWeight] = useState("70");
  const { result, error, loading, submit } = useBmiCalculator(bffUrl);

  return (
    <Card title="BMI Calculator">
      <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <Input label="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} />
        <Input label="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <Button onClick={() => submit(Number(height), Number(weight))} disabled={loading}>
        {loading ? "Calculating..." : "Calculate"}
      </Button>
      {error && <p style={{ color: "#ef4444" }}>{error}</p>}
      {result && (
        <p style={{ marginTop: 12 }}>
          BMI: <strong>{result.bmi}</strong> ({result.category})
        </p>
      )}
    </Card>
  );
}
