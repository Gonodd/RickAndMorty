require("dotenv").config();
const PORT = 3001;
const server = require("./app");

server.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});



/*http.createServer((req, res) => {
    console.log(req.url)
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes("/rickandmorty/character")) {
        const id = Number(req.url.split("/").at(-1));
        getCharById(res, id);
    }

}).listen(PORT, "localhost")
*/
