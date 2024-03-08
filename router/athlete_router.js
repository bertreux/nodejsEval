import express from "express";
import {getAllAthlete, tableauOfAthleteBack, showOfAthleteBack, editOfAthleteBack, newOfAthleteBack, insertDataNewOfAthleteBack, insertDataEditOfAthleteBack, deleteOfAthleteBack} from "../controller/athlete_controller.js";
import athlete_form_middleware from "../middleware/form/athlete_form_middleware.js";

const athlete_router = express.Router();

athlete_router.get('/athletes/', getAllAthlete);

athlete_router.get('/gestion/athletes/', tableauOfAthleteBack);

athlete_router.get('/gestion/athlete/:id/show', showOfAthleteBack);

athlete_router.get('/gestion/athlete/:id/sup', deleteOfAthleteBack);

athlete_router.get('/gestion/athlete/:id/edit', editOfAthleteBack);
athlete_router.post('/gestion/athlete/:id/edit', [athlete_form_middleware], insertDataEditOfAthleteBack);

athlete_router.get('/gestion/athlete/new', newOfAthleteBack);
athlete_router.post('/gestion/athlete/new', [athlete_form_middleware], insertDataNewOfAthleteBack);

export default athlete_router;