import express from 'express';
const app = express();
app.use(express.json());
app.use(express.static('team-vertex/dist'));
const port = process.env.port || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});