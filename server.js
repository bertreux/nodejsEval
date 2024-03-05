import express from "express";
import nunjucks from "nunjucks"
import http from 'node:http';
import home_router from "./router/home_router.js";

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

const server = http.createServer(app);

export default server;