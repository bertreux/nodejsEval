import express from "express";
import {getAllTitres, tableauOfTitreBack, showOfTitreBack, editOfTitreBack, newOfTitreBack, deleteOfTitreBack, insertDataEditOfTitreBack, insertDataNewOfTitreBack} from "../controller/titre_controller.js";
import titre_form_middleware from "../middleware/form/titre_form_middleware.js";
import {est_connecte} from "../middleware/form/connexion_form_middleware.js";

const titre_router = express.Router();

titre_router.get('/titres/', getAllTitres);

titre_router.get('/gestion/titres/', [est_connecte], tableauOfTitreBack);

titre_router.get('/gestion/titre/:id/show', [est_connecte], showOfTitreBack);

titre_router.get('/gestion/titre/:id/sup', [est_connecte], deleteOfTitreBack);

titre_router.get('/gestion/titre/:id/edit', [est_connecte], editOfTitreBack);
titre_router.post('/gestion/titre/:id/edit', [est_connecte, titre_form_middleware], insertDataEditOfTitreBack);

titre_router.get('/gestion/titre/new', [est_connecte], newOfTitreBack);
titre_router.post('/gestion/titre/new', [est_connecte, titre_form_middleware], insertDataNewOfTitreBack);

export default titre_router;