import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../database'
import { IUser } from '../interface'

type UserModel = typeof Model & {
    new(): IUser;
}

export const User = <UserModel>sequelize.define(
    'users',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING(100),
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING(150),
            unique: true,
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING(255),
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
        tableName: 'users',
        paranoid: true
    }
)