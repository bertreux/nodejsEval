import express from "express";
import {tableauOfAthleteBack, showOfAthleteBack} from "../controller/athlete_controller.js";

const athlete_router = express.Router();

athlete_router.get('/gestion/athletes/', tableauOfAthleteBack);

athlete_router.get('/gestion/athlete/:id/show', showOfAthleteBack);

athlete_router.get('/gestion/athlete/:id/edit', editOfAthleteBack);
athlete_router.post('/gestion/athlete/:id/edit', insertDataEditOfAthleteBack);

athlete_router.get('/gestion/athlete/:id/new', newOfAthleteBack);
athlete_router.post('/gestion/athlete/:id/new', insertDataNewOfAthleteBack);

export default athlete_router;