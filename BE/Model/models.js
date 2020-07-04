const database = require("../Model/db");
exports.getData = (callback) =>
{
    database.query("select * from products",callback);
}
exports.deleteProduct = (id,callback) =>
{
    database.query("DELETE FROM products WHERE id = " + id,callback);
}
exports.createProductModel = (product,callback) =>
{
    database.query("INSERT INTO `products`(`name`, `color`, `price`) VALUES (?,?,?)",[
    product.productName,
    product.productColor,
    product.productPrice
   ],callback);
}
exports.getDataProductToUpdate = (id,callback) =>
{
    database.query("select * from products where id = "+ id,callback);
}
exports.updateProductModel = (newProduct,callback) =>
{
    database.query("UPDATE `products` SET `name`=?,`color`=?,`price`=? WHERE id = ?",
    [newProduct.name,newProduct.color,newProduct.price,newProduct.id],
    callback);
}
