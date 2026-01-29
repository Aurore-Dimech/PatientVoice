const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Center = sequelize.define('Center', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  latitude: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  postal_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'centers',
  timestamps: true,
  paranoid: true,
});

module.exports = Center;