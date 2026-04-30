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

  // Static method to add a new product
  static add(prodObj) {
    const { name, desc, price, imgUrl } = prodObj; // Extract product details from the object (destructuring the obj) eg: name = prodObj.name etc...
    const newProduct = new ProductModel(
      products.length + 1,
      name,
      desc,
      price,
      imgUrl,
    ); // Create a new ProductModel object with a new id
    products.push(newProduct); // This adds the product only to in-memory data. When the server restarts, the array resets to its original data
  }

  static getProdById(id){
    return products.find((product)=>product.id == id);
  }

  static updateProduct(prodObj){
    const index = products.findIndex((product)=>product.id==prodObj.id);
    products[index] = prodObj;
  }

  static delete(id){
    const index = products.findIndex((p)=>p.id==id);
    products.splice(index,1);
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
  new ProductModel(
    4,
    "Can't Hurt Me",
    "Life Story of David Goggins on Mental Toughness",
    399,
    "https://cdn.kobo.com/book-images/c4f18b89-3756-43f7-80b5-bea5ce80b98e/1200/1200/False/can-t-hurt-me.jpg",
  ),
];