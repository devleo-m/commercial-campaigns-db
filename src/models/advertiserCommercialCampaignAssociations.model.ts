import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../database'
import { IAdvertiserCommercialCampaignAssociations } from '../interface'

type AdvertiserCommercialCampaignAssociationsModel = typeof Model & {
    new(): IAdvertiserCommercialCampaignAssociations;
}

export const AdvertiserCommercialCampaignAssociations = <AdvertiserCommercialCampaignAssociationsModel>sequelize.define(
    'advertiserCommercialCampaignAssociations',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
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
            allowNull: false,
            type: DataTypes.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        deletedAt: {
            allowNull: true,
            type: DataTypes.DATE,
        },
    },
    {
        tableName: 'advertiserCommercialCampaignAssociations',
        paranoid: true,
        indexes: [
            {
                unique: true,
                fields: ['campaignId', 'commercialId']
            }
        ]
    }
)