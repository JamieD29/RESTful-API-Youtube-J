import express, { Express, Request, Response } from "express";
import http from "http";
import cors from "cors";
import route from "./resource/routes/index.route";
const port = 8080;
const app: Express = express();

app.use(express.json());

app.use(
  cors({
    credentials: true,
  })
);

route(app);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
