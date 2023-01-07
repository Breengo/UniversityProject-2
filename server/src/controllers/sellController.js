const { Sell } = require("../models/models");

class SellController {
  async getAll(req, res) {
    const sells = await Sell.findAll({ order: ["id"] });
    return res.status(200).json(sells);
  }
}

module.exports = new SellController();
