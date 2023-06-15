'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // eslint-disable-next-line no-unused-vars
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
  //  add here
  await queryInterface.bulkInsert('stations',
  [
    {
      "id": 2,
        "name": "Da Nang",
        "address": "Tran Tu Binh",
        "province": "Da Nang",
        "createdAt": "2022-08-09 09:31:31",
        "updatedAt": "2022-08-09T09:31:31"
    },
    {
      "id": 3,
        "name": "Ben xe mien dong",
        "address": "Dinh Bo linh",
        "province": "HCM",
        "createdAt": "2022-08-11 17:45:56",
        "updatedAt": "2022-08-11 17:45:56"
    },
    {
      "id": 4,
        "name": "Ben xe mien tay ",
        "address": "Quan 6",
        "province": "HCM",
        "createdAt": "2022-08-12 15:06:58",
        "updatedAt": "2022-08-12 15:06:58"
    }
  ],{});
  },

  // eslint-disable-next-line no-unused-vars
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // add here
    await queryInterface.bulkDelete('stations', null, {})
  }
};
