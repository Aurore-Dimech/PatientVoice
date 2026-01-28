const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Center = require('./Center');

const Form = sequelize.define('Form', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  center_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Center,
      key: 'id',
    },
  },
}, {
  tableName: 'forms',
  timestamps: true,
});

Form.belongsTo(Center, { foreignKey: 'center_id' });
Center.hasMany(Form, { foreignKey: 'center_id' });

module.exports = Form;