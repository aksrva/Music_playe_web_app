const path = require('path');
const fs = require("fs");
exports.musicPlaylist = (req, res, next) => {
    let data = fs.readFileSync(path.join(__dirname, "./musics.json"), "utf-8");
    data = JSON.parse(data);
    res.json(data);
}