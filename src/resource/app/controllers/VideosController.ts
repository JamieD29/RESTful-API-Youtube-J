import { Request, Response } from "express";
import fs from "fs";
import Video from "../../../utils/interface/Video/Video";
class VideosController {
  //GET /videos
  playlist(req: Request, res: Response) {
    fs.readFile("data.json", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Lỗi đọc tệp tin JSON" });
        return;
      }
      const videosData: { items: Video[] } = JSON.parse(data);
      res.send(videosData);
    });
  }
}

export default new VideosController();

