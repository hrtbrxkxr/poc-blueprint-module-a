import { BmiCalculator } from "../components/BmiCalculator";

export function ModuleAPage({ bffUrl }: { bffUrl: string }) {
  return <BmiCalculator bffUrl={bffUrl} />;
}
