import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { sequelize } from './database';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors())
app.use(express.json());

app.get("/", async (req, res) =>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully');
        res.send('Connection has been established successfully');
    } catch (error) {
        console.error(`Error connecting to database: ${error}`);
        res.send(`Error connecting to database: ${error}`);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
})