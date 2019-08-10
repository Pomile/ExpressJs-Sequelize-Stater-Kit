"use strict";

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Mary',
      lastName: 'Slesor',
      email: 'mary.slesor@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Francis',
      lastName: 'Codewirght',
      email: 'Francis.codewright@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('People', null, {});
  }
};