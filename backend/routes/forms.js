const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const sequelize = require('../config/database');
const Form = require('../models/Form');
const Answer = require('../models/Answer');
const Question = require('../models/Question');
const Theme = require('../models/Theme');

// POST /forms
router.post('/', [
  body('center_id').isUUID().withMessage('Valid center_id required'),
  body('answers').isArray({ min: 1 }).withMessage('Answers must be an array'),
  body('answers.*.question_id').isInt().withMessage('Valid question_id required'),
  body('answers.*.content').isLength({ max: 255 }).withMessage('Content max 255 chars'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { center_id, answers } = req.body;

  try {
    const center = await require('../models/Center').findByPk(center_id);
    if (!center) return res.status(400).json({ error: 'Invalid center_id' });

    for (const answer of answers) {
      const question = await Question.scope('isActive').findByPk(answer.question_id);
      if (!question) return res.status(400).json({ error: `Invalid or inactive question_id: ${answer.question_id}` });
    }

    await sequelize.transaction(async (transaction) => {
      const form = await Form.create({ center_id }, { transaction });
      for (const answer of answers) {
        await Answer.create({
          form_id: form.id,
          question_id: answer.question_id,
          value: answer.value,
          content: answer.content,
        }, { transaction });
      }
    });

    res.status(201).json({});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /forms
router.get('/', async (req, res) => {
  try {
    const themes = await Theme.findAll({
      include: [{
        model: Question.scope('isActive'),
        as: 'Questions',
      }],
    });

    const data = themes.map(theme => ({
      name: theme.name,
      questions: theme.Questions.map(question => ({
        id: question.id.toString(),
        name: question.content,
      })),
    }));

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;