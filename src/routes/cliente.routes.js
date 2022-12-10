const express = require("express")
var router = express.Router();


var controller = require('../controllers/cliente.controller')

router.get("/clientes", controller.get)
router.get("/clientes/:id", controller.getId)
router.post("/clientes", controller.post)
router.put("/clientes/:id", controller.put)

router.delete("/clientes/:id", controller.delete)
module.exports = router;