import 'dotenv/config';
import { app, port, server } from './service/express';
// import couch from './service/couch';

import routes from './routes/index';

import sseFunction from './helpers/sseFunction';

import followings from '../data/followings' assert { type: 'json' };

app.get('/stream', routes.sse(sseFunction));
app.get('/followings', routes.followings(followings));
app.get('/', routes.root());

server.listen(port, () => {
  console.log(`https server running on port ${port}`);
});
