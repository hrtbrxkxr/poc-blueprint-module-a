import express from "express";
import cors from "cors";
import helmet from "helmet";
import { bmiRouter } from "./routes/bmi.routes";
import { healthRouter } from "./routes/health.routes";
import { requestLogger } from "./middleware/requestLogger";
import { errorHandler } from "./middleware/errorHandler";
import { loadSecretsFromVault } from "./services/secrets.service";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.use("/", healthRouter);
app.use("/api/bmi", bmiRouter);

app.use(errorHandler);

async function bootstrap() {
  await loadSecretsFromVault();

  const port = process.env.PORT ?? 4001;
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`module-a-bff listening on port ${port}`);
  });
}

if (process.env.VITEST === undefined) {
  bootstrap();
}

export { app };
