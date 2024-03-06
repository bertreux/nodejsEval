import express from "express";
import {connexion, deconnexion, inscription} from "../controller/connexion_controller.js";

const connexion_router = express.Router();

connexion_router.get('/connexion/', connexion);

connexion_router.get('/deconnexion/', deconnexion);

connexion_router.get('/inscription/', inscription);

export default connexion_router;