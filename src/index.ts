import express, { Express, Request, Response } from "express";
import fs from "fs";
import Video from "./utils/interface/Video/Video";
import http from "http";
import cors from "cors";

const port = 8080;
const app: Express = express();

app.use(express.json());

app.use(
  cors({
    credentials: true,
  })
);

app.get("/videos", (req: Request, res: Response) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Lỗi đọc tệp tin JSON" });
      return;
    }
    const videosData: { items: Video[] } = JSON.parse(data);
    res.send(videosData);
  });
});

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
