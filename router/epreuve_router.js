import express from "express";
import {getAllEpreuve, tableauOfEpreuveBack} from "../controller/epreuve_controller.js";

const epreuve_router = express.Router();

epreuve_router.get('/epreuves/', getAllEpreuve);

epreuve_router.get('/gestion/epreuves/', tableauOfEpreuveBack);

export default epreuve_router;