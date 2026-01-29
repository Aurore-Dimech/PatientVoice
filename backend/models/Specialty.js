const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Specialty = sequelize.define('Specialty', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'specialties',
  timestamps: true,
});

Specialty.belongsToMany(Center, {
  through: 'center_specialties',
  foreignKey: 'specialty_id',
  otherKey: 'center_id',
  as: 'centers'
});

module.exports = Specialty;