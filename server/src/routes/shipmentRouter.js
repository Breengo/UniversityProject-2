const Router = require("express");
const ShipmentController = require("../controllers/shipmentController");
const router = new Router();

router.get("/list", ShipmentController.getAll);

module.exports = router;
