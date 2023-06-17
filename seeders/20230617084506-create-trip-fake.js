"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "trips",
      [
        {
          fromStation: 2,
          toStation: 3,
          startTime: "2022-06-13 08:32:50",
          price: 200000,
          createdAt: "2021-02-13 08:32:50",
          updatedAt: "2022-04-13 05:02:50",
        },
        {
          fromStation: 3,
          toStation: 4,
          startTime: "2022-06-13 08:32:50",
          price: 350000,
          createdAt: "2021-02-13 08:32:50",
          updatedAt: "2022-04-13 05:02:50",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("trips", null, {});
  },
};
