const Router = require("express");
const EmployeeController = require("../controllers/EmployeeController");
const router = new Router();

router.get("/list", EmployeeController.getAll);

module.exports = router;
