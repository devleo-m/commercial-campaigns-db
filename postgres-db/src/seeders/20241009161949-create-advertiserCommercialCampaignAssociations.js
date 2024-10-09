'use strict';

module.exports = {
  up: (queryInterface) =>{
    return queryInterface.bulkInsert('advertiserCommercialCampaignAssociations', [
      {
        campaignId: 1,
        commercialId: 1,
        startDate: '2024-10-15',
        endDate: '2024-10-25',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
 down: (queryInterface) => {
    return queryInterface.bulkDelete('advertiserCommercialCampaignAssociations', null, {});
  }
};