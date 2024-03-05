import express from "express";
import {getAllSports, EpreuveOfSport} from "../controller/sport_controller.js";

const sport_router = express.Router();

sport_router.get('/sports', getAllSports);

sport_router.get('/sport/:id', EpreuveOfSport);

export default sport_router;