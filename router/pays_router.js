import express from "express";
import {tableauOfPaysBack, showOfPaysBack} from "../controller/pays_controller.js";

const pays_router = express.Router();

pays_router.get('/gestion/pays/', tableauOfPaysBack);

pays_router().get('/gestion/sport/:id/show', showOfPaysBack);

export default pays_router;