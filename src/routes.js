const express = require('express');
const rout = express.Router();
const musicList = require("../public/controls");
rout.get("/musics", musicList.musicPlaylist);
module.exports = rout;