import 'dotenv/config';
import { app, port, server } from './service/express';
// import couch from './service/couch';

import routes from './routes/index';

// import sseFunction from './helpers/sseFunction';

// import data from '../data/data' assert { type: 'json' };

// app.get('/stream', routes.sse(sseFunction));
app.get('/json', routes.json());
app.get('/', routes.root());

server.listen(port, () => {
  console.log(`https server running on port ${port}`);
  console.log(`Which means you need to use https://localhost:${port}`);
});
