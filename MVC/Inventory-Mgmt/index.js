import express from "express";
import path from "path";
import ProductController from "./src/controller/product.controller.js"; // Import the ProductController class
import ejsLayouts from "express-ejs-layouts"; // Import middleware for using layouts with EJS
import validateRequest from "./src/middlewares/validation.middleware.js";
import { uploadFile } from "./src/middlewares/file-upload-middleware.js";
const server = express(); // Create an Express application
const productController = new ProductController(); // Create an instance of ProductController

//set up view engine settings
server.set("view engine", "ejs"); // Set up the view engine to use EJS
server.set("views", path.join(path.resolve(), "src", "views")); // Set the folder where Express will look for view files
server.use(ejsLayouts); // Enable EJS layout middleware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public")); // Serve static files like CSS, images, and JavaScript from the public folder

// Handle GET request for the home route ("/")
server.get("/", productController.getProducts); // Calls getProducts method from ProductController
server.get("/new", productController.getAddForm);
//server.use(express.static("src/views"));

server.get("/update-product/:id", productController.getUpdateProductView);

server.post("/delete-product/:id", productController.deleteProduct);

// Parse form data sent from HTML forms and make it available in req.body
server.post(
  "/",
  uploadFile.single("imgUrl"), //first transform multipart form data then validate
  validateRequest,
  productController.addNewProduct,
); //Added Middleware to validate the received form data before sending it to Controller.

server.post("/update-product", productController.postUpdateProduct);

server.listen(3400, () => {
  console.log("Server is running on port 3400");
});
