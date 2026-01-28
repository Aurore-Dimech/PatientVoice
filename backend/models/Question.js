const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Theme = require('./Theme');

const Question = sequelize.define('Question', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  theme_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Theme,
      key: 'id',
    },
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  tableName: 'questions',
  timestamps: true,
  scopes: {
    isActive: {
      where: { is_active: true },
    },
  },
});

Question.belongsTo(Theme, { foreignKey: 'theme_id' });
Theme.hasMany(Question, { foreignKey: 'theme_id' });

module.exports = Question;