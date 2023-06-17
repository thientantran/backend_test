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
      "tickets",
      [
        {
          trip_id: 1,
          user_id: 1,
          createdAt: "2022-05-13 08:32:50",
          updatedAt: "2022-06-13 05:02:50",
        },
        {
          trip_id: 2,
          user_id: 2,
          createdAt: "2022-07-13 08:32:50",
          updatedAt: "2022-08-13 05:02:50",
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
    await queryInterface.bulkDelete("tickets", null, {});
  },
};
