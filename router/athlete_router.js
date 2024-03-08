import express from "express";
import {getAllAthlete, tableauOfAthleteBack, showOfAthleteBack, editOfAthleteBack, newOfAthleteBack, insertDataNewOfAthleteBack, insertDataEditOfAthleteBack, deleteOfAthleteBack} from "../controller/athlete_controller.js";
import athlete_form_middleware from "../middleware/form/athlete_form_middleware.js";
import {est_connecte} from "../middleware/form/connexion_form_middleware.js";

const athlete_router = express.Router();

athlete_router.get('/athletes/', getAllAthlete);

athlete_router.get('/gestion/athletes/', [est_connecte], tableauOfAthleteBack);

athlete_router.get('/gestion/athlete/:id/show', [est_connecte], showOfAthleteBack);

athlete_router.get('/gestion/athlete/:id/sup', [est_connecte], deleteOfAthleteBack);

athlete_router.get('/gestion/athlete/:id/edit', [est_connecte],editOfAthleteBack);
athlete_router.post('/gestion/athlete/:id/edit', [est_connecte, athlete_form_middleware], insertDataEditOfAthleteBack);

athlete_router.get('/gestion/athlete/new', [est_connecte], newOfAthleteBack);
athlete_router.post('/gestion/athlete/new', [est_connecte, athlete_form_middleware], insertDataNewOfAthleteBack);

export default athlete_router;