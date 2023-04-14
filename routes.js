const express = require("express");
const router = express.Router();
const carController = require("./controllers/CarController");

router.get("/carros", carController.buscarTodosOsCarros);
router.get("/carro/:codigo", carController.buscarCarro);
router.post("/carro", carController.cadastrarCarro);
router.put("/carro/:codigo", carController.alterarDados);
router.delete("/carro/:codigo", carController.deletarCarro);

module.exports = router;