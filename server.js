import express from "express";
import nunjucks from "nunjucks"
import http from 'node:http';
import app_router from "./router/app_router.js";

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

const server = http.createServer(app);

export default server;