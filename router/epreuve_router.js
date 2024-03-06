import express from "express";
import {getAllEpreuve, tableauOfEpreuveBack, showOfEpreuveBack} from "../controller/epreuve_controller.js";

const epreuve_router = express.Router();

epreuve_router.get('/epreuves/', getAllEpreuve);

epreuve_router.get('/gestion/epreuves/', tableauOfEpreuveBack);

epreuve_router.get('/gestion/epreuve/:id/show', showOfEpreuveBack);

export default epreuve_router;