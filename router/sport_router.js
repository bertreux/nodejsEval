import express from "express";
import {getAllSports, EpreuveOfSport, tableauOfSportBack} from "../controller/sport_controller.js";

const sport_router = express.Router();

sport_router.get('/sports/', getAllSports);

sport_router.get('/sport/:id/', EpreuveOfSport);

sport_router.get('/gestion/sports/', tableauOfSportBack);

export default sport_router;