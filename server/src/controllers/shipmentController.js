const { Shipment } = require("../models/models");

class ShipmentController {
  async getAll(req, res) {
    const shipments = await Shipment.findAll({ order: ["id"] });
    return res.status(200).json(shipments);
  }
}

module.exports = new ShipmentController();
