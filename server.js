import express from "express";
import nunjucks from "nunjucks"
import http from 'node:http';
import home_router from "./router/home_router.js";
import sport_router from "./router/sport_router.js";
import connexion_router from "./router/connexion_router.js";
import epreuve_router from "./router/epreuve_router.js";
import titre_router from "./router/titre_router.js";

const app = express();
const router = express.Router();

app.use(router);
router.use(express.json());
router.use(express.static("public"));

nunjucks.configure('views', {
    autoescape: true,
    noCache: true,
    express: app
});

router.use(home_router);
router.use(sport_router);
router.use(connexion_router);
router.use(epreuve_router);
router.use(titre_router);

const server = http.createServer(app);

export default server;