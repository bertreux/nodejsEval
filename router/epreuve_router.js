import express from "express";
import {getAllEpreuve} from "../controller/epreuve_controller.js";

const epreuve_router = express.Router();

epreuve_router.get('/epreuves', getAllEpreuve);

export default epreuve_router;