const express = require("express");
const routes = express.Router();
const Controller = require("../Controller/controller.js");

routes.get("/getDataProduct",Controller.getDataProduct);
routes.delete("/delete/:id",Controller.deleteProduct);
routes.post("/create",Controller.createProduct);
routes.get("/getDataToUpdate/:id",Controller.getDataToUpdate);
routes.put("/updateProduct",Controller.updateProduct);
module.exports = routes;