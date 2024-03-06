import express from "express";
import nunjucks from "nunjucks"
import http from 'node:http';
import home_router from "./router/home_router.js";
import sport_router from "./router/sport_router.js";
import connexion_router from "./router/connexion_router.js";
import epreuve_router from "./router/epreuve_router.js";
import titre_router from "./router/titre_router.js";
import athlete_router from "./router/athlete_router.js";

const app = express();
const router = express.Router();

app.use(router);
app.use(express.json());
app.use(express.static("public"));

nunjucks.configure('views', {
    autoescape: true,
    noCache: true,
    express: app
});

app.use(home_router);
app.use(sport_router);
app.use(connexion_router);
app.use(epreuve_router);
app.use(titre_router);
app.use(athlete_router);

const server = http.createServer(app);

export default server;