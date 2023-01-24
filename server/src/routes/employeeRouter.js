const Router = require("express");
const EmployeeController = require("../controllers/EmployeeController");
const router = new Router();

router.get("/list", EmployeeController.getAll);
router.post("/create", EmployeeController.create);
router.post("/auth", EmployeeController.auth);

module.exports = router;
