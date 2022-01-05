import express from "express";
import path from "path";
import { getArticles } from "../controllers/articlesController.js";

const __dirname = path.resolve()

const router = express.Router();


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', '../index.html'));
});

router.get('/articles', getArticles);

export default router;

