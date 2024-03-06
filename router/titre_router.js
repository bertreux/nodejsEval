import express from "express";
import {getAllTitres, tableauOfTitreBack} from "../controller/titre_controller.js";

const titre_router = express.Router();

titre_router.get('/titres/', getAllTitres);

titre_router.get('/gestion/titres/', tableauOfTitreBack);

export default titre_router;