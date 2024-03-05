import express from "express";
import {getAllSports} from "../controller/sport_controller.js";

const sport_router = express.Router();

sport_router.get('/sports', getAllSports);

export default sport_router;