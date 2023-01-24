const sequelize = require("../db.js");
const { DataTypes } = require("sequelize");

const Employee = sequelize.define("employee", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  position: { type: DataTypes.STRING, allowNull: false },
  gender: { type: DataTypes.STRING },
  address: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING, allowNull: false },
});

const Item = sequelize.define("item", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  maker: { type: DataTypes.STRING, allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false },
});

const Shipment = sequelize.define("shipment", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  quantity: { type: DataTypes.INTEGER, allowNull: false },
});

const Sell = sequelize.define("sell", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  quantity: { type: DataTypes.INTEGER, allowNull: false },
});

Employee.hasMany(Shipment);
Shipment.belongsTo(Employee);

Employee.hasMany(Sell);
Sell.belongsTo(Employee);

Item.hasMany(Shipment);
Shipment.belongsTo(Item);

Item.hasMany(Sell);
Sell.belongsTo(Item);

module.exports = { Employee, Item, Shipment, Sell };
