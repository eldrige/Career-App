import cheerio from 'cheerio';
import axios from 'axios';
const numberOfJobs = 1;
const url = `https://www.cameroondesks.com/search/label/jobs?max-results=${numberOfJobs}`;

const fetchData = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

let data = fetchData(url);

console.log(data);
