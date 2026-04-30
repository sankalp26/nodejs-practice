import { body, validationResult } from "express-validator"; // Import validation functions from express-validator

/**
 * Validation middleware function to intercept product creation requests.
 * It ensures the incoming data meets specific criteria before reaching the controller.
 */
const validateRequest = async (req, res, next) => {
  //validate the data

  // ******
  // Code before using Express-Validator=> const { name, price, imgUrl } = req.body; //Leaving desc as we dont have to check that.
  // let error = [];
  // if (!name || name.trim() == "") {
  //   error.push("Product Name is invalid");
  // }
  // if (!price || parseFloat(price) < 0) {
  //   error.push("Price must not be a negative value");
  // }
  // try {
  //   const validUrl = new URL(imgUrl); //Use the URL constructor to check if imgUrl is a real web address
  // } catch (err) {
  //   error.push("Image URL is invalid"); // If 'new URL()' fails, it triggers this catch block
  // }
  //******

  //Using "express-validator" middleware installed using 'npm i express-validator'
  //1. Setup rules for Validation
  const rules = [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price must be a positive number"),
    body("imgUrl").isURL().withMessage("URL is invalid"),
  ];
  //2. Run those rules.
  await Promise.all(rules.map((rule) => rule.run(req))); // Execute each rule and wait for all to complete.--- .run() makes each rule of rules array a Promise.
  //3. Check for errors after running those rules.

  //Error Check: If any strings were pushed to the error array, stop and show the error
  let validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    return res.render("new-product", {
      errorMessage: validationErrors.array()[0].msg,
    }); // Re-render the form page, passing ONLY the first error message to the view
  }
  next(); // If no errors exist, pass control to the next middleware or controller in the route
};
export default validateRequest;
