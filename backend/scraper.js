import cheerio from 'cheerio';
import axios from 'axios';
const numberOfJobs = 20;
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Job from './models/jobModel.js';
const url = `https://www.cameroondesks.com/search/label/jobs?max-results=${numberOfJobs}`;

dotenv.config();
connectDB();

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
  }
  await Job.insertMany(fetchedJobs);
};

fetchAndLoad(url);
