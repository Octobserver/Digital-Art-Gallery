import express from "express";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send({ express: 'React connected to Express back-end' });
});

export default app;