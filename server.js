import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { getHealthStatus } from './utils/health.js';
import { urlGenerator } from './services/urlGeneratorService.js';
import { connectDB } from './utils/database.js';
import { urlRoutes } from "./routes/urlRouter.js";


dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());

app.set("trust proxy", true);

await connectDB();

const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => res.status(200).json(getHealthStatus()));
app.use("/", urlRoutes);


const server = app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});