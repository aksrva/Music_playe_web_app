const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 8090;
const abs_path = path.join(__dirname, "../public");
const songs = require("./routes");
app.use(express.static(abs_path));
app.set("view engine", "hbs");

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Header", "Type-Content, Authorization");
    next();
})
app.use("/songs", songs);
app.get("/", (req, res) => {
    let data = fs.readFileSync(abs_path + "/musics.json", "utf-8");
    // data = JSON.parse(data);
    // console.log(data);
    res.render("index", {songsList: data});
})
app.listen(PORT, () => {
    console.log("Server is started at port "+ PORT);
})