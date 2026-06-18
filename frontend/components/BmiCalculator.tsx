"use client";

import { SetStateAction, useState } from "react";
import { Button, Card, Input } from "@hrtbrxkxr/shared-ui";
import { useBmiCalculator } from "../hooks/useBmiCalculator";

export function BmiCalculator({ bffUrl }: { bffUrl: string }) {
  const [height, setHeight] = useState("170");
  const [weight, setWeight] = useState("70");
  const { result, error, loading, submit } = useBmiCalculator(bffUrl);

  return (
    <Card>
      BMI Calculator
      <div className="mb-3 flex gap-3">
        <div className="grid gap-2">
          <p>Height (cm)</p>
          <Input
            id="height"
            value={height}
            onChange={(e: { target: { value: SetStateAction<string>; }; }) => setHeight(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <p>Weight (kg)</p>
          <Input
            id="weight"
            value={weight}
            onChange={(e: { target: { value: SetStateAction<string>; }; }) => setWeight(e.target.value)}
          />
        </div>
      </div>
      <Button
        onClick={() => submit(Number(height), Number(weight))}
        disabled={loading}
      >
        {loading ? "Calculating..." : "Calculate"}
      </Button>
      {error && <p className="text-destructive mt-3">{error}</p>}
      {result && (
        <p className="mt-3">
          BMI: <strong>{result.bmi}</strong> ({result.category})
        </p>
      )}
    </Card>
  );
}
