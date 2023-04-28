'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    
    await queryInterface.bulkInsert('Airpots', [

      {
        name: 'c1',
        cityId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'c2 Airport',
        cityId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'c3 International Airport',
        cityId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'kota International Airport',
        cityId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
