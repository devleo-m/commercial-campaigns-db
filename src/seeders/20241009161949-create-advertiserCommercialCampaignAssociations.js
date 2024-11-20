'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('advertiserCommercialCampaignAssociations', [
      {
        campaignId: 1,
        commercialId: 1,
        startDate: '2024-10-15',
        endDate: '2024-10-25',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaignId: 2,
        commercialId: 2,
        startDate: '2024-10-16',
        endDate: '2024-10-26',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaignId: 3,
        commercialId: 3,
        startDate: '2024-10-17',
        endDate: '2024-10-27',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaignId: 4,
        commercialId: 4,
        startDate: '2024-10-18',
        endDate: '2024-10-28',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaignId: 5,
        commercialId: 5,
        startDate: '2024-10-19',
        endDate: '2024-10-29',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaignId: 6,
        commercialId: 6,
        startDate: '2024-10-20',
        endDate: '2024-10-30',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaignId: 7,
        commercialId: 7,
        startDate: '2024-10-21',
        endDate: '2024-10-31',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaignId: 8,
        commercialId: 8,
        startDate: '2024-10-22',
        endDate: '2024-11-01',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaignId: 9,
        commercialId: 9,
        startDate: '2024-10-23',
        endDate: '2024-11-02',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaignId: 10,
        commercialId: 10,
        startDate: '2024-10-24',
        endDate: '2024-11-03',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaignId: 11,
        commercialId: 11,
        startDate: '2024-10-25',
        endDate: '2024-11-04',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaignId: 12,
        commercialId: 12,
        startDate: '2024-10-26',
        endDate: '2024-11-05',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaignId: 13,
        commercialId: 13,
        startDate: '2024-10-27',
        endDate: '2024-11-06',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaignId: 14,
        commercialId: 14,
        startDate: '2024-10-28',
        endDate: '2024-11-07',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaignId: 15,
        commercialId: 15,
        startDate: '2024-10-29',
        endDate: '2024-11-08',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaignId: 16,
        commercialId: 16,
        startDate: '2024-10-30',
        endDate: '2024-11-09',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaignId: 17,
        commercialId: 17,
        startDate: '2024-10-31',
        endDate: '2024-11-10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaignId: 18,
        commercialId: 18,
        startDate: '2024-11-01',
        endDate: '2024-11-11',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaignId: 19,
        commercialId: 19,
        startDate: '2024-11-02',
        endDate: '2024-11-12',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaignId: 20,
        commercialId: 20,
        startDate: '2024-11-03',
        endDate: '2024-11-13',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaignId: 21,
        commercialId: 21,
        startDate: '2024-11-04',
        endDate: '2024-11-14',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('advertiserCommercialCampaignAssociations', null, {});
  }
};