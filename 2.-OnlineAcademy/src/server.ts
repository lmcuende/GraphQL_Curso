// console.log('Hello to Online-Academy');

import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { createServer } from 'http';

const app = express();

app.use('*', cors);
app.use(compression);

app.get('/', (req, res) => {
    res.send('Hello to the Online Academy');
});

const httpServer = createServer(app);

const PORT = 5200;

httpServer.listen(
    {
        port: PORT
    },
    () => console.log(`Servidor Online Academy ready http://localhost:${PORT}`)
);