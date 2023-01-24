const { Employee } = require("../models/models");
const bcrypt = require("bcrypt");

class EmployeeController {
  async getAll(req, res, next) {
    try {
      const employees = await Employee.findAll({ order: ["id"] });
      return res.status(200).json(employees);
    } catch (error) {
      console.log(error);
    }
  }

  async create(req, res, next) {
    try {
      const { name, position, gender, address, password } = req.body;
      const hashPassword = await bcrypt.hash(password, 6);
      const user = await Employee.create({
        name,
        position,
        gender,
        address,
        password: hashPassword,
      });
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  }

  async auth(req, res, next) {
    try {
      const { id, password } = req.body;
      const employee = await Employee.findOne({ where: { id } });
      if (!employee) {
        throw "No such employee";
      }
      const result = await bcrypt.compare(password, employee.password);
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new EmployeeController();
