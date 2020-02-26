const request = require('request')
const cheerio = require('cheerio')

// request("https://imagecolorpicker.com/", (error, response, html) => {
//   if (!error && response.statusCode == 200) {
//     const $ = cheerio.load(html);
//     const feedback = $("#feedback");
//     // console.log(feedback.html());
//     // console.log(feedback.text());
//     const output = feedback.find('div').text();
//     //  const output = feedback.children("div").text();
//     console.log(output)
//   }
// });

request("https://truyencv.com/", (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    $("li .user-block a").each((i, el) => {
      const item = $(el).text();
      const link = $(el).attr('href');
      console.log(link);
    });
  }
});







