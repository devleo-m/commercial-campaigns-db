'use strict';

module.exports = {
  up: (queryInterface) =>{
    return queryInterface.bulkInsert('advertiserCommercials', [
      {
        userId: 2,
        name: 'Lorem Ipsum',
        color: 'red',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
 down: (queryInterface) => {
    return queryInterface.bulkDelete('advertiserCommercials', null, {});
  }
};