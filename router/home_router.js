import express from "express";
import {home} from "../controller/home_controller.js";

const app_router = express.Router();

app_router.get('/', home);

export default app_router;