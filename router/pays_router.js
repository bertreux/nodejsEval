import express from "express";
import {tableauOfPaysBack, showOfPaysBack, editOfPaysBack, newOfPaysBack, deleteOfPaysBack, insertDataEditOfPaysBack, insertDataNewOfPaysBack} from "../controller/pays_controller.js";
import pays_form_middleware from "../middleware/form/pays_form_middleware.js";
import {est_connecte} from "../middleware/form/connexion_form_middleware.js";

const pays_router = express.Router();

pays_router.get('/gestion/pays/', [est_connecte], tableauOfPaysBack);

pays_router.get('/gestion/pays/:id/show', [est_connecte], showOfPaysBack);

pays_router.get('/gestion/pays/:id/sup', [est_connecte], deleteOfPaysBack);

pays_router.get('/gestion/pays/:id/edit', [est_connecte], editOfPaysBack);
pays_router.post('/gestion/pays/:id/edit', [est_connecte, pays_form_middleware], insertDataEditOfPaysBack);

pays_router.get('/gestion/pays/new', [est_connecte], newOfPaysBack);
pays_router.post('/gestion/pays/new', [est_connecte, pays_form_middleware], insertDataNewOfPaysBack);

export default pays_router;