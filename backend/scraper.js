import cheerio from 'cheerio';
import axios from 'axios';
import cron from 'node-cron';
const numberOfJobs = 20;
const numberOfScholarships = 20;
import dotenv from 'dotenv';
import connectDB from './config/db.js';
// import Job from './models/jobModel.js';
import Scholarship from './models/scholarshipModel.js';
const url = `https://www.cameroondesks.com/search/label/jobs?max-results=${numberOfJobs}`;
const scholarshipUrl = `https://www.cameroondesks.com/search/label/scholarship?&max-results=${numberOfScholarships}`;

dotenv.config();
connectDB();

let fetchedJobs = [];
const fetchAndSaveToDB = async (url) => {
  try {
    const { data: html } = await axios.get(url);

    if (html) {
      const $ = cheerio.load(html);
      const jobBlock = $('.post.hentry');
      jobBlock.each((idx, elt) => {
        let title = $(elt).find('h2').text().replace(/\s\s+/g, '');
        let link = $(elt).find('a').attr('href');
        let datePublished = Date.now();
        fetchedJobs.push({ link, title, datePublished });
      });
      console.log('Data scraped!');
      console.log(fetchedJobs);
    }
    await Scholarship.insertMany(fetchedJobs);
  } catch (error) {
    console.error(error);
  }
};

fetchAndSaveToDB(scholarshipUrl);

// Run cron job every wednesday
cron.schedule('* * * * Wednesday', () => {
  fetchAndSaveToDB(url);
});
