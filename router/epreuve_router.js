import express from "express";
import {getAllEpreuve, tableauOfEpreuveBack, showOfEpreuveBack} from "../controller/epreuve_controller.js";

const epreuve_router = express.Router();

epreuve_router.get('/epreuves/', getAllEpreuve);

epreuve_router.get('/gestion/epreuves/', tableauOfEpreuveBack);

epreuve_router.get('/gestion/epreuve/:id/show', showOfEpreuveBack);

epreuve_router.get('/gestion/epreuve/:id/edit', editOfEpreuveBack);
epreuve_router.post('/gestion/epreuve/:id/edit', insertDataEditOfEpreuveBack);

epreuve_router.get('/gestion/epreuve/:id/new', newOfEpreuveBack);
epreuve_router.post('/gestion/epreuve/:id/new', insertDataNewOfEpreuveBack);

export default epreuve_router;