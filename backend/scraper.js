import cheerio from 'cheerio';
import request from 'request';
import fs, { write } from 'fs';
// const writeStream = fs.createWriteStream('jobs.json');
// writeStream.write('Title,Link \n');
const url = `https://www.cameroondesks.com/search/label/jobs?max-results=20`;

const fetchAndLoad = (url) => {
  request(url, (err, response, html) => {
    if (!err && response.statusCode === 200) {
      const $ = cheerio.load(html);
      let titleArray = [];
      $('.post.hentry').each((index, element) => {
        const title = $(element).find('h2').text().replace(/\s\s+/g, '');

        const link = $(element).find('a').attr('href');
        // const description = $(element).find('div.resumo').text();
        // console.log(title);

        // console.log(title.split(" "))

        let funnyArray = title.split(' ');

        let singleJob = funnyArray.reduce((prev, next) => prev + next);
        console.log(title);

        // write to json
        // writeStream.write(`${title}, ${link} \n`);
      });
      console.log('Scraping done .....');
    } else {
      throw error('An unexpected error occured');
    }
  });
};

fetchAndLoad(url);

// const createJobData = (titles, links) => {
//   const jobs = [];

// };
