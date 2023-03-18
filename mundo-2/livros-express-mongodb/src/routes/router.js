const express = require("express");
const route = express.Router();

const controller = require("../controllers/livroController");
const services = require("../service/render");

/**
 *  @description Root Route
 *  @method GET /
 */
route.get("/", services.homeRoutes);
route.get("/novo_livro", services.novo_livro);
route.get("/atualizar_livro", services.atualizar_livro);

/**
 *  @description API Route
 */
route.post("/api/livro", controller.cadastrar);
route.get("/api/livro", controller.lista);
route.put("/api/livro/:id", controller.update);
route.delete("/api/livro/:id", controller.delete);

module.exports = route;
