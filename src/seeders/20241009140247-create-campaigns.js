'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('campaigns', [
      {
        userId: 2,
        name: 'Lorem Ipsum',
        startDate: '2024-10-10',
        endDate: '2024-10-15',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: 'Campaign Alpha',
        startDate: '2024-11-01',
        endDate: '2024-11-10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        name: 'Campaign Beta',
        startDate: '2024-11-05',
        endDate: '2024-11-15',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        name: 'Campaign Gamma',
        startDate: '2024-12-01',
        endDate: '2024-12-05',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        name: 'Campaign Delta',
        startDate: '2024-12-10',
        endDate: '2024-12-20',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        name: 'Campaign Epsilon',
        startDate: '2025-01-01',
        endDate: '2025-01-10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        name: 'Campaign Zeta',
        startDate: '2025-01-15',
        endDate: '2025-01-25',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 9,
        name: 'Campaign Eta',
        startDate: '2025-02-01',
        endDate: '2025-02-10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 10,
        name: 'Campaign Theta',
        startDate: '2025-02-15',
        endDate: '2025-02-20',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 11,
        name: 'Campaign Iota',
        startDate: '2025-03-01',
        endDate: '2025-03-10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 12,
        name: 'Campaign Kappa',
        startDate: '2025-03-15',
        endDate: '2025-03-25',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 13,
        name: 'Campaign Lambda',
        startDate: '2025-04-01',
        endDate: '2025-04-10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 14,
        name: 'Campaign Mu',
        startDate: '2025-04-15',
        endDate: '2025-04-20',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 15,
        name: 'Campaign Nu',
        startDate: '2025-05-01',
        endDate: '2025-05-05',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 16,
        name: 'Campaign Xi',
        startDate: '2025-05-10',
        endDate: '2025-05-15',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 17,
        name: 'Campaign Omicron',
        startDate: '2025-06-01',
        endDate: '2025-06-10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 18,
        name: 'Campaign Pi',
        startDate: '2025-06-15',
        endDate: '2025-06-25',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 19,
        name: 'Campaign Rho',
        startDate: '2025-07-01',
        endDate: '2025-07-05',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 20,
        name: 'Campaign Sigma',
        startDate: '2025-07-10',
        endDate: '2025-07-20',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 21,
        name: 'Campaign Tau',
        startDate: '2025-08-01',
        endDate: '2025-08-10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 22,
        name: 'Campaign Upsilon',
        startDate: '2025-08-15',
        endDate: '2025-08-25',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('campaigns', null, {});
  }
};