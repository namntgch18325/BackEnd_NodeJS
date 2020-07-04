const db = require("../Model/models.js");
exports.getDataProduct = (rep,res) =>{

    db.getData(function name(err,rows) {
        res.json(rows);
    });
}
exports.deleteProduct = (req,res) => {
    db.deleteProduct(req.params.id,function cb(err,rows)
    {
        res.json({"status":"true"});
    });
}
exports.createProduct = (req,res) =>
{   
    db.createProductModel(req.body,function cb(err,rows)
    {
        res.json({"status":"added"});
    });
}

exports.getDataToUpdate = (req,res) =>
{
    db.getDataProductToUpdate(req.params.id,function(err,rows)
    {
        res.json(rows);
    });
}

exports.updateProduct = (req,res) =>
{
    db.updateProductModel(req.body,function(err,data)
    {
        res.json({"status":"Update Done"});
    });
}