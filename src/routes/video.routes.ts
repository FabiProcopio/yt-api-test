import { Router } from "express";
import { VideoRepositery } from "../modules/videos/repositories/VideosRepository";
import { login } from '../middleware/login'

const videosRoutes = Router();
const videoRepositery = new VideoRepositery();

videosRoutes.post('/create-video', login, (request, response) => {
    videoRepositery.create(request, response);
})

videosRoutes.get('/get-videos', login, (request, response) => {
    videoRepositery.getVideos(request, response);
})

videosRoutes.get('/search', (request, response) => {
    videoRepositery.searchVideos(request, response);
})

export  { videosRoutes };


