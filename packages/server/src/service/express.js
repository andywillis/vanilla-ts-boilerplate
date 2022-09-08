import path from 'path';
import express from 'express';
import https from 'https';
import compression from 'compression';
import helmet from 'helmet';

import rootname from '../../rootname';
import serverOptions from './config/server';

const app = express();
// console.log(path.join(rootname, '../client/build'));
app.use(express.static(path.join(rootname, '../client/build')));
app.use(express.json());
app.use(helmet());
app.use(compression());

const port = parseInt(process.env.PORT, 10) || 4000;

const server = https.createServer(serverOptions, app);

export { app, port, server };
