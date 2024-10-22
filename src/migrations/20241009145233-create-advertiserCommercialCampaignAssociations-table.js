'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('advertiserCommercialCampaignAssociations', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      campaignId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'campaigns',
          key: 'id',
        },
      },
      commercialId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'advertiserCommercials',
          key: 'id',
        },
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
      }
    }).then(function () {
      return queryInterface.sequelize.query(
          'ALTER TABLE "advertiserCommercialCampaignAssociations" ADD CONSTRAINT advertiser_commercial_campaign_associations_unique UNIQUE ("campaignId", "commercialId");'
      )
    })
  },

  down (queryInterface) {
    return queryInterface.dropTable('advertiserCommercialCampaignAssociations');
  }
};