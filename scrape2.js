const request = require("request");
const cheerio = require("cheerio");

request("https://truyencv.com/phuc-thien-thi/", (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    const comments = $(".comments");
    const output = comments.find(".post-comments").html();
    // $("ul .clearfix .post-comments").each((i, el) => {
    //   const comment = $(el);
    //   console.log(comment);
    // });
  }
});
