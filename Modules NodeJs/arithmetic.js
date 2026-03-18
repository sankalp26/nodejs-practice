function add(a, b) {
  return a + b;
}
function div(a, b) {
  return a / b;
}
//2 ways to create Modules
//1. Common JS Module
module.exports.add = add;
module.exports.div = div;
//2. ES6 Module.