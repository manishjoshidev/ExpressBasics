const express = require("express");
const app = express();

app.set("view engine", "ejs");

// app.use(function (req, res, next) {     //this is middleware function
//   console.log("working");
//   next();
// });
app.use(express.static("./public"));

app.get("/", function (req, res) {
  //route 1
  res.render("index"); //use render in place of send
});

app.get("/contact", function (req, res) {
  res.render("contact");
});
app.get("/portfolio", function (req, res) {
  res.render("portfolio");
});

app.get("/error", function (req, res, next) {
  throw Error("something went wrong");
});

app.get("/", [
  function (req, res, next) {
    fs.readFile("/maybe-valid-file", "utf-8", (err, data) => {
      res.locals.data = data;
      next(err);
    });
  },
  function (req, res) {
    res.locals.data = res.locals.data.split(",")[1];
    res.send(res.locals.data);
  },
]);

app.listen(3000);
