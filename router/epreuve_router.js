import express from "express";
import {calendrierEpreuve2024} from "../controller/epreuve_controller.js";

const epreuve_router = express.Router();

epreuve_router.get('/calendrier', calendrierEpreuve2024);

export default epreuve_router;