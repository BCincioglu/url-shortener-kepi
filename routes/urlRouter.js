// routes/urlRoutes.js
import { Router } from "express";
import { shortenUrlController } from "../controllers/urlGeneratorController.js";
import { redirectUrlController } from "../controllers/urlRedirectController.js";


export const urlRoutes = Router();
urlRoutes.post("/shorten", shortenUrlController);
urlRoutes.get("/:code", redirectUrlController);

