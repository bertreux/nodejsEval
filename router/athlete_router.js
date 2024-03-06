import express from "express";
import {tableauOfAthleteBack, showOfAthleteBack} from "../controller/athlete_controller.js";

const athlete_router = express.Router();

athlete_router.get('/gestion/athletes/', tableauOfAthleteBack);

athlete_router.get('/gestion/athlete/:id/show', showOfAthleteBack);

export default athlete_router;