const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const server = express();
const routes = require("./routes");

server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));
server.use("/api", routes);
server.listen(3300, () => {
    console.log("💻 servidor iniciado e operando na porta 3300: http://localhost:3300");
});