import express from "express";
import {tableauOfPaysBack} from "../controller/pays_controller.js";

const pays_router = express.Router();

pays_router.get('/gestion/pays/', tableauOfPaysBack);

export default pays_router;