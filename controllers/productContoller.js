const ProductModel= require("../models/Products")

exports.createProduct= async (req, res) => {
    const body= req.body;
    await productModel.create({
        product_name: body.product_name,
        product_price: body.product_price,
        isInStock: body.isInStock,
        Category: body.Category
    })
    console.log(product);
    return res.status(201).json({message: 'Product created successfully'});
}


exports.getAllProducts= async (req, res) => {
    const products= await productModel.find({}); //gives only those products which are in stock
    return res.json(products);
}

exports.getById= async (req, res) => {
    const product= await productModel.findById(req.params.id);
    return res.json(product);
}

exports.deleteProduct= async(req, res)=>{
    const product = await productModel.findByIdAndDelete(req.params.id);
    return res.json(product);
}

exports.updateProduct =async(req,res)=>{
    const product = await productModel.findByIdAndUpdate(req.params.id, req.body);
    res.json(product);
}