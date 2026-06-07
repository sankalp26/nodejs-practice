import ProductModel from "../models/product.model.js"; // Import the ProductModel class
let products = ProductModel.get();
// Create and export the ProductController class
export default class ProductController {
  // Method to handle request for fetching products
  getProducts(req, res) {
    // Get all products from the model
    console.log(products);
    // return res.sendFile(
    //   path.join(path.resolve(), "src", "views", "products.html"),
    // ); // Send the products.html file as a response; path.resolve() gives the root directory of the project; path.join() creates the correct file path

    res.render("products", { products: products }); // Render the "products" view file(products.ejs) and pass the products data to it
  }
  //sending the form to Client
  getAddForm(req, res) {
    return res.render("new-product", { errorMessage: null }); // Initial render sets errorMessage to null so the template doesn't show an error box
  }

  // POST "/": Processes the data sent from the form
  addNewProduct(req, res) {
    // req.body contains the key-value pairs submitted in the form
    const { name, desc, price } = req.body;
    const imgUrl = "images/" + req.file.filename;

    ProductModel.add(name, desc, price, imgUrl); //calling the static method to add the received data from the Form. to be added to the original array of data.
    res.render("products", { products: products });
  }

  getUpdateProductView(req, res, next) {
    //1. If product exists render the view
    const id = req.params.id;
    const productFound = ProductModel.getProdById(id);
    if (productFound) {
      res.render("update-product", {
        product: productFound,
        errorMessage: null,
      });
    }
    //2. else give error
    else {
      res.status(401).send("Product not Found!");
    }
  }

  postUpdateProduct(req, res) {
    // Extract updated fields from the submitted form
    const { id, name, desc, price } = req.body;

    // Get the currently stored product so we can preserve any existing image
    const oldProd = ProductModel.getProdById(id);
    if (!oldProd) {
      return res.status(401).send("Product not Found!");
    }
    // Build the updated product object using the new values
    // Keep the previous image URL by default unless a new file is uploaded
    const updatedProd = { id, name, desc, price, imgUrl: oldProd.imgUrl };

    // If a new image file was uploaded, replace the old image URL
    if (req.file) {
      updatedProd.imgUrl = "images/" + req.file.filename;
    }

    // Save the updated product back into the model and re-render the list
    ProductModel.updateProduct(updatedProd);
    res.render("products", { products: products });
  }

  deleteProduct(req, res) {
    const id = req.params.id;
    const productFound = ProductModel.getProdById(id);
    if (!productFound) {
      return res.status(401).send("Product not Found!");
    }
    ProductModel.delete(id);
    res.render("products", { products: products });
  }
}
