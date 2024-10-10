import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../database'
import { IAdvertiserCommercials } from '../interface'

type AdvertiserCommercialsModel = typeof Model & {
    new(): IAdvertiserCommercials;
}

export const AdvertiserCommercials = <AdvertiserCommercialsModel>sequelize.define(
    'advertiserCommercials',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        color: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id',
            },
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
        tableName: 'advertiserCommercials',
        paranoid: true
    }
)