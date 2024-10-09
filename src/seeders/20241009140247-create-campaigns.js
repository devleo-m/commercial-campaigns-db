'use strict';

module.exports = {
  up: (queryInterface) =>{
    return queryInterface.bulkInsert('campaigns', [
      {
        userId: 2,
        name: 'Lorem Ipsum',
        startDate: '2024-10-10',
        endDate: '2024-10-15',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
 down: (queryInterface) => {
    return queryInterface.bulkDelete('campaigns', null, {});
  }
};
