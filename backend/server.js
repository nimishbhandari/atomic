import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Server listen
const PORT = process.env.PORT;
const MODE = process.env.MODE;
app.listen(PORT, () => console.log(`Server running on ${PORT} in ${MODE}`));
