const Router = require("express");
const SellController = require("../controllers/sellController");
const router = new Router();

router.get("/list", SellController.getAll);

module.exports = router;
