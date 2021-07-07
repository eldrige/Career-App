import cheerio from 'cheerio';
import axios from 'axios';
import cron from 'node-cron';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Job from './models/jobModel.js';
import Scholarship from './models/scholarshipModel.js';
const numberOfJobs = 50;
const numberOfScholarships = 50;
const jobUrl = `https://www.cameroondesks.com/search/label/jobs?max-results=${numberOfJobs}`;
const scholarshipUrl = `https://www.cameroondesks.com/search/label/scholarship?&max-results=${numberOfScholarships}`;

dotenv.config();
connectDB();

let fetchedInfo = [];
const fetchAndSaveToDB = async (url, model) => {
  try {
    const { data: html } = await axios.get(url);

    if (html) {
      const $ = cheerio.load(html);
      const mainBlock = $('.post.hentry');
      mainBlock.each((idx, elt) => {
        let title = $(elt).find('h2').text().replace(/\s\s+/g, '');
        let link = $(elt).find('a').attr('href');
        let datePublished = Date.now();
        fetchedInfo.push({ link, title, datePublished });
      });
      console.log('Data scraped!');
      console.log(fetchedInfo);
    }
    await model.insertMany(fetchedInfo);
    fetchedInfo = [];
  } catch (error) {
    console.error(error.message);
  }
};

fetchAndSaveToDB(jobUrl, Job);
fetchAndSaveToDB(scholarshipUrl, Scholarship);

// Run cron job every wednesday
cron.schedule('* * * * Wednesday', () => {
  fetchAndSaveToDB(url);
});
