// Please don't change the pre-written code
// Import the necessary modules here
import { body, validationResult } from "express-validator";
export const formValidation = async (req, res, next) => {
  // Write your code here
  const rules = [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Enter a valid email"),
    body("image").custom((value, { req }) => {
      if (!req.file) {
        throw new Error("Profile image is required");
      }
    }),
  ];
  await Promise.all(rules.map((rule) => rule.run(req)));
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.send(errors);
  }
  next();
};
