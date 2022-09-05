import fs from 'fs';
import { XMLParser } from 'fast-xml-parser';

const parser = new XMLParser();

async function convertXML(dir) {

  try {

    const files = await fs.promises.readdir(dir);

    const promises = files.map(async file => {
      const path = `${dir}/${file}`;
      const filename = file.replace('.xml', '.json');
      return [ filename, await fs.promises.readFile(path, 'utf-8') ];
    });

    (await Promise.all(promises)).forEach(entry => {
      console.log(`Writing ${entry[0]}`);
      const json = parser.parse(entry[1]);
      json.rss.channel.name = entry[0].replace('.json', '');
      fs.promises.writeFile(`../data/json/${entry[0]}`, JSON.stringify(json, null, 2));
    });

  } catch (e) {
    console.error(e);
  }

}

const dir = '../data/xml';
convertXML(dir);
