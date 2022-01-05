import express from "express";
import dotenv from "dotenv";
import routes from "./routes/routes.js";
dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
