import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from './src/App';

const PORT = process.env.PORT || 3006;
const app = express();

app.get('/', (req, res) => {
    const app = ReactDOMServer.renderToString(<App />);
    const indexFile = path.resolve('./dist/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Algo malo ocurrió: ', err)
            return res.status(500).send('Oops! ')
        }
        return res.send(
            data.replace('<div id="app"></div>', `<div id="app">${app}</div>`)
        )
    })
})

app.use(express.static('./dist'))

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
