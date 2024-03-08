import express from "express";
import {getAllSports, EpreuveOfSport, tableauOfSportBack, showOfSportBack, editOfSportBack, newOfSportBack, deleteOfSportBack, insertDataEditOfSportBack, insertDataNewOfSportBack} from "../controller/sport_controller.js";
import sport_form_middleware from "../middleware/form/sport_form_middleware.js";

const sport_router = express.Router();

sport_router.get('/sports/', getAllSports);

sport_router.get('/sport/:id/', EpreuveOfSport);

sport_router.get('/gestion/sports/', tableauOfSportBack);

sport_router.get('/gestion/sport/:id/sup', deleteOfSportBack);

sport_router.get('/gestion/sport/:id/show', showOfSportBack);

sport_router.get('/gestion/sport/:id/edit', editOfSportBack);
sport_router.post('/gestion/sport/:id/edit', [sport_form_middleware], insertDataEditOfSportBack);

sport_router.get('/gestion/sport/new', newOfSportBack);
sport_router.post('/gestion/sport/new', [sport_form_middleware], insertDataNewOfSportBack);

export default sport_router;