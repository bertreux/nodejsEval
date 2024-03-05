import express from "express";
import {home} from "../controller/home_controller.js";

const home_router = express.Router();

home_router.get('/', home);

export default home_router;