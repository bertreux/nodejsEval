import express from "express";
import {tableauOfAthleteBack} from "../controller/athlete_controller.js";

const athlete_router = express.Router();

athlete_router.get('/gestion/athletes/', tableauOfAthleteBack);

export default athlete_router;