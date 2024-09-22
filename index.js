import express from 'express';
const app = express();
const path = require('path');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'team-vertex/dist'), {
    setHeaders: (res, filePath) => {
        if (filePath.endsWith('.br')) {
            res.setHeader('Content-Encoding', 'br');
            if (filePath.endsWith('.wasm.br')) {
                res.setHeader('Content-Type', 'application/wasm');
            } else if (filePath.endsWith('.js.br')) {
                res.setHeader('Content-Type', 'application/javascript');
            }
        } else if (filePath.endsWith('.gz')) {
            res.setHeader('Content-Encoding', 'gzip');
            if (filePath.endsWith('.wasm.gz')) {
                res.setHeader('Content-Type', 'application/wasm');
            } else if (filePath.endsWith('.js.gz')) {
                res.setHeader('Content-Type', 'application/javascript');
            }
        } else if (filePath.endsWith('.wasm')) {
            res.setHeader('Content-Type', 'application/wasm');
        } else if (filePath.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        }
    }
}));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'team-vertex/dist', 'index.html'));
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});