import express from "express";
import {connexion, inscription, inscriptionPost, login, logout} from "../controller/connexion_controller.js";
import {
    connexion_form_middleware,
    is_credential_valid,
    utilisateur_exist_deja
} from "../middleware/form/connexion_form_middleware.js";

const connexion_router = express.Router();

connexion_router.get('/connexion/', connexion);

connexion_router.get('/inscription/', inscription);
connexion_router.post('/inscription/', [connexion_form_middleware, utilisateur_exist_deja], inscriptionPost);

connexion_router.post('/login/', [connexion_form_middleware, is_credential_valid], login);

connexion_router.get('/logout/', logout);

export default connexion_router;