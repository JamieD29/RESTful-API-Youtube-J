import { Express } from "express";
import videosRouter from "./videos.route";

export default function route(app: Express) {
  app.use("/videos", videosRouter);
}
