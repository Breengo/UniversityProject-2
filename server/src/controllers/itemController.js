const { Item, Sell, Shipment } = require("../models/models");

class ItemController {
  async getAll(req, res) {
    const items = await Item.findAll({ order: ["id"] });
    return res.status(200).json(items);
  }
  async sellItems(req, res) {
    const { id, employeeId, quantity } = req.query;
    const item = await Item.findOne({ where: { id } });
    const updated = await Item.update(
      { quantity: Number(item.quantity) - Number(quantity) },
      { where: { id } }
    );
    const sell = await Sell.create({ quantity, itemId: id, employeeId });
    return res.status(200).json(sell);
  }
  async shipItems(req, res) {
    const { id, employeeId, quantity } = req.query;
    const item = await Item.findOne({ where: { id } });
    const updated = await Item.update(
      { quantity: Number(item.quantity) + Number(quantity) },
      { where: { id } }
    );
    const sell = await Shipment.create({ quantity, itemId: id, employeeId });
    return res.status(200).json(sell);
  }
}

module.exports = new ItemController();
