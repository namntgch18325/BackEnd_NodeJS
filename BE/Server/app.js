const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const bodyParser = require("body-parser");

const routes = require(path.join(__dirname, "../Routes", "routes"));
const corsList = {
    origin: "http://localhost:8080"
};
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors(corsList));
app.use("/",routes);

app.listen(3000, function log() {
    console.log("Server Is Runing, Port 3000");
})