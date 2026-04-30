// Please don't change the pre-written code
// Import the necessary modules here
// Review and understand the provided folder structure carefully before writing code. 

import express from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import { renderBlogs, renderBlogForm, addBlog  } from "./src/controllers/blog.controller.js";
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.use(expressEjsLayouts);

// Write your code here
app.use(express.urlencoded({extended:true}));
app.get("/createblog",renderBlogForm);
app.get("/",renderBlogs);
app.post("/addblog",addBlog);

export default app;
