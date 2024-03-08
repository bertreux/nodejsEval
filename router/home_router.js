import express from "express";
import {carte_sports, fetch_get_all_sports, home} from "../controller/home_controller.js";

const home_router = express.Router();

home_router.get('/', home);

home_router.get('/site', carte_sports);

home_router.post('/site/sports/data', fetch_get_all_sports);

export default home_router;