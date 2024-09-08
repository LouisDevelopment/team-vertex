import express from 'express';
const app = express();
app.use(express.json());
app.use(express.static('team-vertex/dist', {
    setHeaders: (res, filePath) => {
        if (filePath.endsWith('.br')) {
            res.setHeader('Content-Encoding', 'br');
            res.setHeader('Content-Type', 'application/javascript');
        } else if (filePath.endsWith('.gz')) {
            res.setHeader('Content-Encoding', 'gzip');
            res.setHeader('Content-Type', 'application/javascript');
        }
    }
}));
const port = process.env.port || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});