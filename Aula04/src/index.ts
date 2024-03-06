import express from "express";
import dotenv from "dotenv";
import { json } from "stream/consumers";

dotenv.config();

const app = express();
const PORT = process.env.PORT2;

app.listen(PORT, () => {
    console.log(`The server is running in a port ${PORT}...`);
});
