import fs from 'fs';
import couch from '../service/couch';

const feeds = couch.use('feeds');

async function batchInsert(dir) {

  try {

    const files = await fs.promises.readdir(dir);

    const promises = files.map(async file => {
      const path = `${dir}/${file}`;
      const entry = await fs.promises.readFile(path, 'utf-8');
      const { rss: { channel: { name, title, item: items } } } = JSON.parse(entry);
      const promises = items.map(item => feeds.insert({ name, title, ...item }));
      await Promise.allSettled(promises);
      console.dir(`Completed ${name}`);
    });

    await Promise.allSettled(promises);
    console.dir('Done');

  } catch (e) {
    console.error(e);
  }

}

const dir = '../data/json';
batchInsert(dir);
