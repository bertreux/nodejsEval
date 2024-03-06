import express from "express";
import {getAllSports, EpreuveOfSport, tableauOfSportBack, showOfSportBack} from "../controller/sport_controller.js";
import epreuve_router from "./epreuve_router.js";

const sport_router = express.Router();

sport_router.get('/sports/', getAllSports);

sport_router.get('/sport/:id/', EpreuveOfSport);

sport_router.get('/gestion/sports/', tableauOfSportBack);

epreuve_router.get('/gestion/sport/:id/show', showOfSportBack);

export default sport_router;