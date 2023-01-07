const Router = require("express");
const ItemController = require("../controllers/itemController");
const router = new Router();

router.get("/list", ItemController.getAll);
router.put("/sell_items", ItemController.sellItems);
router.put("/ship_items", ItemController.shipItems);

module.exports = router;
