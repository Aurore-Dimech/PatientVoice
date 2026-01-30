'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('center_specialties', {
      center_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'centers',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      specialty_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'specialties',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });

    await queryInterface.addIndex('center_specialties', ['center_id', 'specialty_id'], {
      unique: true
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('center_specialties');
  }
};