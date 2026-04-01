import path from "path";
import ProductModel  from "../models/product.model.js"; // Import the ProductModel class

// Create and export the ProductController class
export default class ProductController {
  // Method to handle request for fetching products
  getProducts(req, res) {
    let products = ProductModel.get(); // Get all products from the model
    console.log(products);
    // return res.sendFile(
    //   path.join(path.resolve(), "src", "views", "products.html"),
    // ); // Send the products.html file as a response; path.resolve() gives the root directory of the project; path.join() creates the correct file path

    res.render("products", { products }); // Render the "products" view file(products.ejs) and pass the products data to it
  }
}
