const fetch = require('node-fetch');

module.exports = async (req, res) => {
  let response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=" + process.env.NEWSAPI);
  let object = await response.json();
  console.log(object);
  const date = new Date().toString();
  res.status(200).send(date);
};
