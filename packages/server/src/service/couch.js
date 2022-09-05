import nano from 'nano';

import config from './config/couch';

export default nano(config.uri);
