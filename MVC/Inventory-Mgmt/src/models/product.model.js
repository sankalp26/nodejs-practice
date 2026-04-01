export default class ProductModel {
  // Constructor is used to initialize product object properties
  constructor(id, name, desc, price, imgUrl) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.imgUrl = imgUrl;
  }
  // Static method to return all products
  static get() {
    return products; // Return the products array
  }
}
// Array that stores all product objects
let products = [
  new ProductModel(
    1,
    "Atomic Habits",
    "A practical book on building Habits",
    299,
    "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
  ),
  new ProductModel(
    2,
    "Ikigai",
    "A book on finding your purpose in life",
    199,
    "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg",
  ),
  new ProductModel(
    3,
    "Deep Work",
    "A book on focused work and productivity",
    249,
    "https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg",
  ),
];