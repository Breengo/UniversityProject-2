const Router = require("express");
const router = new Router();
const employeeRouter = require("./employeeRouter.js");
const itemRouter = require("./itemRouter.js");
const sellRouter = require("./sellRouter.js");
const shipmentRouter = require("./shipmentRouter.js");

router.use("/employee", employeeRouter);
router.use("/item", itemRouter);
router.use("/sell", sellRouter);
router.use("/shipment", shipmentRouter);

module.exports = router;
