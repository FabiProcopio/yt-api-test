"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videosRoutes = void 0;
const express_1 = require("express");
const VideosRepository_1 = require("../modules/videos/repositories/VideosRepository");
const login_1 = require("../middleware/login");
const videosRoutes = (0, express_1.Router)();
exports.videosRoutes = videosRoutes;
const videoRepositery = new VideosRepository_1.VideoRepositery();
videosRoutes.post('/create-video', login_1.login, (request, response) => {
    videoRepositery.create(request, response);
});
videosRoutes.get('/get-videos', login_1.login, (request, response) => {
    videoRepositery.getVideos(request, response);
});
videosRoutes.get('/search', (request, response) => {
    videoRepositery.searchVideos(request, response);
});
