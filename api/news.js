import fetch from 'node-fetch';

export default async function (req, res) {
  let response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=" + process.env.NEWSAPI);
  let object = await response.json();
  console.log(object.articles[0]);
  res.json(object.articles[0]);
};
