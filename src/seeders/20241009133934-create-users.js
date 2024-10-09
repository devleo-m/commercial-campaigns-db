'use strict';

module.exports = {
  up: (queryInterface) =>{
    return queryInterface.bulkInsert('users', [
      {
        name: 'admin',
        email: 'admin@gmail.com',
        password: "root",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lorem Ipsum',
        email: 'lorem_ipsum@gmail.com',
        password: "root",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
 down: (queryInterface) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};