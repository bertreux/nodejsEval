import express from "express";
import {getAllTitres} from "../controller/titre_controller.js";

const titre_router = express.Router();

titre_router.get('/titres', getAllTitres);

export default titre_router;