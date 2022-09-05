import fs from 'fs';
import fetch from 'node-fetch';
import createThrottle from 'async-throttle';

import dirname from '../helpers/dirname';

const throttle = createThrottle(12);

import followings from '../data/data.json' assert { type: 'json' };

function saveXMLFeed(handle, i, len) {
  return new Promise(async (res, rej) => {

    try {
      const { name, rss } = handle;
      const response = await fetch(rss);

      if (response.ok) {

        const dest = fs.createWriteStream(`${dirname}/../data/xml/${name}.xml`);

        response.body.pipe(dest);

        response.body.on('end', () => {
          console.log(`Written ${name} ${i} of ${len}`);
          res();
        });

        response.body.on('error', () => {
          console.log(`Error with ${name}`);
          rej();
        });

      }  
    } catch (err) {
      res();
    }

  });
}

function compileData(followings) {
  return followings.map((handle, i) => {
    const { name, rss } = handle;
    const output = {
      name,
      rss: rss.replace('https://nitter.net', 'https://nitter.42l.fr')
    };
    return output;
  });
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


async function getRSSFeeds(followings) {
  const data = compileData(followings);
  const promises = data.map((handle, i) => {
    return throttle(() => saveXMLFeed(handle, i, followings.length));
  });
  await Promise.allSettled(promises);
  console.log('Done!');
}

getRSSFeeds(followings);
