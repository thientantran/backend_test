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
      "users",
      [
        {
          name: "client3",
          email: "client3@gmail.com",
          password: "$10$FRl9LpThYr5CWP7s23z3CeXpksAQDFt7WJYDmQz1iJ0QjPhmPhoBK",
          phone: "0123456777",
          type: "ADMIM",
          avatar: "www.gravatar.com/avatar/cad99327a4dcfea2da9e5117c935560c",
          createdAt: "2021-02-13 08:32:50",
          updatedAt: "2022-04-13 05:02:50",
        },
        {
          name: "client1",
          email: "client1@gmail.com",
          password: "$10$FRl9LpThYr5CWP7s23z3CeXpksAQDFt7WJYDmQz1iJ0QjPhmPhoBK",
          phone: "0123456777",
          type: "CLIENT",
          avatar: "www.gravatar.com/avatar/cad99327a4dcfea2da9e5117c935560c",
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
    await queryInterface.bulkDelete("users", null, {});
  },
};
