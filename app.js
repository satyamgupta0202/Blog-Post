const Blog = require("./models/blog");
const express = require("express");
const mongoose = require("mongoose");
// express app
const app = express();

const mongoURI =
  "mongodb+srv://satyam1234:@nodenuts.h8bsy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI)
  .then((res) => app.listen(3000))
  .catch((error) => console.log(error));
// listen for requests

// register view engine
app.set("view engine", "ejs");
// app.set('views', 'myviews');

// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "name",
//     snippet: "ok",
//     body: "i dont know",
//   });
//   blog
//     .save()
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err));
// });

// app.get("/", (req, res) => {
//   const blogs = [
//     {
//       title: "Yoshi finds eggs",
//       snippet: "Lorem ipsum dolor sit amet consectetur",
//     },
//     {
//       title: "Mario finds stars",
//       snippet: "Lorem ipsum dolor sit amet consectetur",
//     },
//     {
//       title: "How to defeat bowser",
//       snippet: "Lorem ipsum dolor sit amet consectetur",
//     },
//   ];
//   res.render("index", { title: "Home", blogs });
// });

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => console.log(err));
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
