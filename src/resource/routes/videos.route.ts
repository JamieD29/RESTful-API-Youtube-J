import express, {Express} from "express";
import VideoController from '../app/controllers/VideosController';

const router:Express = express();

router.get('/', VideoController.playlist);

export default router;