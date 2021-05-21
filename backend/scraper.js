import cheerio from 'cheerio';
import axios from 'axios';
const numberOfJobs = 1;
const url = `https://www.cameroondesks.com/search/label/jobs?max-results=${numberOfJobs}`;

var fetchedJobs = [];
const fetchAndLoad = async (url) => {
  const { data: html } = await axios.get(url);

  if (html) {
    const $ = cheerio.load(html);
    const jobBlock = $('.post.hentry');
    jobBlock.each((idx, elt) => {
      let title = $(elt).find('h2').text().replace(/\s\s+/g, '');
      let link = $(elt).find('a').attr('href');
      let datePublished = Date.now();
      // let imageSrc = $(elt).find('.post-thumb').find('a').attr('style');
      fetchedJobs.push({ link, title, datePublished });
      // let shortDescription = $(elt).find('article').text();
      // console.log(shortDescription);
    });
    // console.log(jobBlock.find('.post-summary').); the span containing the job description
    process.stdout.write('Scraping done...');
    // console.table(jobTitles);
  }
};

fetchAndLoad(url);
