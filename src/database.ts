import { Sequelize } from 'sequelize'

require('dotenv').config();

export const sequelize: Sequelize = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: 'postgres',
    logging: false,
    pool: {
        max: 1500,
        min: 0,
        acquire: 60000,
        idle: 10000
    },
    minifyAliases: true,
});