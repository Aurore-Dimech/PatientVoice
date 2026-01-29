'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('answers', 'updated_at', {
      type: Sequelize.DATE,
      allowNull: true,
    });

    await queryInterface.changeColumn('answers', 'content', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.addColumn('answers', 'value', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('answers', 'updated_at', {
      type: Sequelize.DATE,
      allowNull: false,
    });

    await queryInterface.changeColumn('answers', 'content', {
      type: Sequelize.TEXT,
      allowNull: false,
    });

    await queryInterface.removeColumn('answers', 'value');
  }
};
