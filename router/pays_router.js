import express from "express";
import {tableauOfPaysBack, showOfPaysBack, editOfPaysBack, newOfPaysBack} from "../controller/pays_controller.js";

const pays_router = express.Router();

pays_router.get('/gestion/pays/', tableauOfPaysBack);

pays_router.get('/gestion/sport/:id/show', showOfPaysBack);

pays_router.get('/gestion/sport/:id/edit', editOfPaysBack);
//pays_router.post('/gestion/sport/:id/edit', insertDataEditOfPaysBack);

pays_router.get('/gestion/sport/new', newOfPaysBack);
//pays_router.post('/gestion/sport/new', insertDataNewOfPaysBack);

export default pays_router;