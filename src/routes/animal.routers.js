const express = require("express")
var router = express.Router();


var controller = require('../controllers/animal.controller')



router.get("/animais", controller.get);
router.get("/animais/:id", controller.getId);
router.post("/animais/save", controller.post);
router.put("/animais/change/:id", controller.put);
router.delete("/animais/delete/:id", controller.delete);
module.exports = router;


