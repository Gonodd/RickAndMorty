const http = require("http");
const fs = require("fs");
const { error } = require("console");
//const data = require("./utils/data");
const getCharById = require("./controllers/getCharById.js")

const PORT = 3001;

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes("/rickandmorty/character")) {
        const id = Number(req.url.split("/").at(-1));
        getCharById(res, id);
    }

}).listen(PORT, "localhost")