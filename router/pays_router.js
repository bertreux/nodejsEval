import express from "express";
import {tableauOfPaysBack, showOfPaysBack, editOfPaysBack, newOfPaysBack, deleteOfPaysBack, insertDataEditOfPaysBack, insertDataNewOfPaysBack} from "../controller/pays_controller.js";
import pays_form_middleware from "../middleware/form/pays_form_middleware.js";

const pays_router = express.Router();

pays_router.get('/gestion/pays/', tableauOfPaysBack);

pays_router.get('/gestion/pays/:id/show', showOfPaysBack);

pays_router.get('/gestion/pays/:id/sup', deleteOfPaysBack);

pays_router.get('/gestion/pays/:id/edit', editOfPaysBack);
pays_router.post('/gestion/pays/:id/edit', [pays_form_middleware], insertDataEditOfPaysBack);

pays_router.get('/gestion/pays/new', newOfPaysBack);
pays_router.post('/gestion/pays/new', [pays_form_middleware], insertDataNewOfPaysBack);

export default pays_router;