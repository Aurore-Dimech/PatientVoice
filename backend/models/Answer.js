const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Form = require('./Form');
const Question = require('./Question');

const Answer = sequelize.define('Answer', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  form_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Form,
      key: 'id',
    },
  },
  question_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Question,
      key: 'id',
    },
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'answers',
  timestamps: true,
});

Answer.belongsTo(Form, { foreignKey: 'form_id' });
Form.hasMany(Answer, { foreignKey: 'form_id' });
Answer.belongsTo(Question, { foreignKey: 'question_id' });
Question.hasMany(Answer, { foreignKey: 'question_id' });

module.exports = Answer;