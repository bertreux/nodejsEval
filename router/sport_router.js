import express from "express";
import {getAllSports, EpreuveOfSport, tableauOfSportBack, showOfSportBack, editOfSportBack, newOfSportBack, deleteOfSportBack, insertDataEditOfSportBack, insertDataNewOfSportBack} from "../controller/sport_controller.js";
import sport_form_middleware from "../middleware/form/sport_form_middleware.js";
import {est_connecte} from "../middleware/form/connexion_form_middleware.js";

const sport_router = express.Router();

sport_router.get('/sports/', getAllSports);

sport_router.get('/sport/:id/', EpreuveOfSport);

sport_router.get('/gestion/sports/', [est_connecte], tableauOfSportBack);

sport_router.get('/gestion/sport/:id/sup', [est_connecte], deleteOfSportBack);

sport_router.get('/gestion/sport/:id/show', [est_connecte], showOfSportBack);

sport_router.get('/gestion/sport/:id/edit', [est_connecte], editOfSportBack);
sport_router.post('/gestion/sport/:id/edit', [est_connecte, sport_form_middleware], insertDataEditOfSportBack);

sport_router.get('/gestion/sport/new', [est_connecte], newOfSportBack);
sport_router.post('/gestion/sport/new', [est_connecte, sport_form_middleware], insertDataNewOfSportBack);

export default sport_router;