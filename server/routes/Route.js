const express = require('express');
const app = express();
const Route = express.Router();
const MangaRoute = require('./MangaRoute');
const {UserRoute} = require('./UserRoute');
const user = require('../controller/v1/user');

Route.use('/manga', MangaRoute);
Route.use('/user', UserRoute);
// Route.get('/user/test', user.test);

module.exports = Route;