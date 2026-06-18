import { createRoot } from "react-dom/client";
import { ModuleAPage } from "../pages/ModuleAPage";
import "./dev.css";

// Standalone playground only — the real shell passes bffUrl from module.config.ts.
const bffUrl = import.meta.env.VITE_BFF_URL ?? "http://localhost:4001";

createRoot(document.getElementById("root")!).render(<ModuleAPage bffUrl={bffUrl} />);
