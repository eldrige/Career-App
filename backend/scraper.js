import cheerio from 'cheerio';
import axios from 'axios';
const numberOfJobs = 20;
const url = `https://www.cameroondesks.com/search/label/jobs?max-results=${numberOfJobs}`;

const fetchAndLoad = async (url) => {
  const { data: html } = await axios.get(url);

  if (html) {
    const $ = cheerio.load(html);
    const jobBlock = $('.post.hentry');
    let jobs = [];
    jobBlock.each((idx, elt) => {
      let title = $(elt).find('h2').text().replace(/\s\s+/g, '');
      let link = $(elt).find('a').attr('href');
      jobs.push({ link, title });
      // let shortDescription = $(elt).find('article').text();
      // console.log(shortDescription);
    });
    console.log(jobs);
    // console.log(jobBlock.find('.post-summary').text());
    process.stdout.write('Scraping done...');
    // console.table(jobTitles);
  }

  // request(url, (err, response, html) => {
  //   if (!err && response.statusCode === 200) {
  //     const $ = cheerio.load(html);
  //     let titleArray = [];
  //     $('.post.hentry').each((index, element) => {
  //       const title = $(element).find('h2').text().replace(/\s\s+/g, '');

  //       const link = $(element).find('a').attr('href');
  //       // const description = $(element).find('div.resumo').text();
  //       // console.log(title);

  //       // console.log(title.split(" "))

  //       let funnyArray = title.split(' ');

  //       let singleJob = funnyArray.reduce((prev, next) => prev + next);
  //       console.log(title);

  //       // write to json
  //       // writeStream.write(`${title}, ${link} \n`);
  //     });
  //     console.log('Scraping done .....');
  //   } else {
  //     throw error('An unexpected error occured');
  //   }
  // });
};

fetchAndLoad(url);

// const createJobData = (titles, links) => {
//   const jobs = [];

// };
