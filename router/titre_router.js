import express from "express";
import {getAllTitres, tableauOfTitreBack, showOfTitreBack, editOfTitreBack, newOfTitreBack, deleteOfTitreBack, insertDataEditOfTitreBack, insertDataNewOfTitreBack} from "../controller/titre_controller.js";
import titre_form_middleware from "../middleware/form/titre_form_middleware.js";

const titre_router = express.Router();

titre_router.get('/titres/', getAllTitres);

titre_router.get('/gestion/titres/', tableauOfTitreBack);

titre_router.get('/gestion/titre/:id/show', showOfTitreBack);

titre_router.get('/gestion/titre/:id/sup', deleteOfTitreBack);

titre_router.get('/gestion/titre/:id/edit', editOfTitreBack);
titre_router.post('/gestion/titre/:id/edit', [titre_form_middleware], insertDataEditOfTitreBack);

titre_router.get('/gestion/titre/new', newOfTitreBack);
titre_router.post('/gestion/titre/new', [titre_form_middleware], insertDataNewOfTitreBack);

export default titre_router;