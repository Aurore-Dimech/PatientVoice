'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('centers', 'city', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('centers', 'postal_code', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('centers', 'address', {
      type: Sequelize.TEXT,
      allowNull: false,
    });

    await queryInterface.changeColumn('centers', 'updated_at', {
      type: Sequelize.DATE,
      allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('centers', 'city');
    await queryInterface.removeColumn('centers', 'postal_code');
    await queryInterface.removeColumn('centers', 'address');

    await queryInterface.changeColumn('centers', 'updated_at', {
      type: Sequelize.DATE,
      allowNull: false,
    });
  }
};
