import UserModel from "../models/user.model.js";
import ProductModel from "../models/product.model.js";
const products = ProductModel.get();
export default class UserController {
  getRegister(req, res) {
    res.render("register");
  }
  getLogin(req, res) {
    res.render("login", { errorMessage: null });
  }
  postRegister(req, res) {
    UserModel.register(req.body);
    res.render("login", { errorMessage: null }); //redirect to Login page after registration
  }
  postLogin(req, res) {
    const userFound = UserModel.login(req.body);
    if (!userFound) {
      return res.render("login", { errorMessage: "Login Failed, Check Credentials" });
    } 
    req.session.userEmail = req.body.email;
    return res.render("products", { products: products });
  }
}
