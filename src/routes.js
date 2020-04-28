const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const UploadController = require('./controllers/UploadController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/uploads', UploadController.index);
routes.post('/uploads', upload.single('image'), UploadController.create);

module.exports = routes;
