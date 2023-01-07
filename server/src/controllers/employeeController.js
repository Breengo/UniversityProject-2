const { Employee } = require("../models/models");

class EmployeeController {
  async getAll(req, res, next) {
    try {
      const employees = await Employee.findAll({ order: ["id"] });
      return res.status(200).json(employees);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new EmployeeController();
