import express from "express";
import {getAllTitres, tableauOfTitreBack, showOfTitreBack} from "../controller/titre_controller.js";
import epreuve_router from "./epreuve_router.js";

const titre_router = express.Router();

titre_router.get('/titres/', getAllTitres);

titre_router.get('/gestion/titres/', tableauOfTitreBack);

epreuve_router.get('/gestion/titre/:id/show', showOfTitreBack);

epreuve_router.get('/gestion/titre/:id/edit', editOfTitreBack);
epreuve_router.post('/gestion/titre/:id/edit', insertDataEditOfTitreBack);

epreuve_router.get('/gestion/titre/:id/new', newOfTitreBack);
epreuve_router.post('/gestion/titre/:id/new', insertDataNewOfTitreBack);

export default titre_router;