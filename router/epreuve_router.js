import express from "express";
import {getAllEpreuve, tableauOfEpreuveBack, showOfEpreuveBack, editOfEpreuveBack, newOfEpreuveBack, deleteOfEpreuveBack, insertDataEditOfEpreuveBack, insertDataNewOfEpreuveBack} from "../controller/epreuve_controller.js";
import epreuve_form_middleware from "../middleware/form/epreuve_form_middleware.js";
import {est_connecte} from "../middleware/form/connexion_form_middleware.js";

const epreuve_router = express.Router();

epreuve_router.get('/epreuves/', getAllEpreuve);

epreuve_router.get('/gestion/epreuves/', [est_connecte], tableauOfEpreuveBack);

epreuve_router.get('/gestion/epreuve/:id/show', [est_connecte], showOfEpreuveBack);

epreuve_router.get('/gestion/epreuve/:id/sup', [est_connecte], deleteOfEpreuveBack);

epreuve_router.get('/gestion/epreuve/:id/edit', [est_connecte], editOfEpreuveBack);
epreuve_router.post('/gestion/epreuve/:id/edit', [est_connecte, epreuve_form_middleware], insertDataEditOfEpreuveBack);

epreuve_router.get('/gestion/epreuve/new', [est_connecte], newOfEpreuveBack);
epreuve_router.post('/gestion/epreuve/new', [est_connecte, epreuve_form_middleware], insertDataNewOfEpreuveBack);

export default epreuve_router;