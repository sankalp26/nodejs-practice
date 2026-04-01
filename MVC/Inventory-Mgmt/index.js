import express from "express";
import path from "path";
import ProductController from "./src/controller/product.controller.js"; // Import the ProductController class

const server = express(); // Create an Express application

//set up view engine settings
server.set("view engine","ejs"); // Set up the view engine to use EJS
server.set("views", path.join(path.resolve(), "src", "views"))// Set the folder where Express will look for view files

const productController = new ProductController();  // Create an instance of ProductController

// Handle GET request for the home route ("/")
server.get("/",productController.getProducts); // Calls getProducts method from ProductController

//server.use(express.static("src/views"));

server.listen(3400);
