const express= require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://kauxp:EpL4wFZP37ONnmZI@cluster0.ttc3saq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log('Connected to MongoDB')
})
.catch((err) => {
    console.error('Could not connect to MongoDB', err)
})

//productSchema
const productSchema= new mongoose.Schema({
    product_name:{
        type: String,
        required: true
    },
    product_price:{
        type: String,
        required: true
    },
    isInStock:{
        type: Boolean,
        required: true
    },
    Category:{
        type: String,
        required: true
    }
})

const productModel = mongoose.model('products', productSchema);

app.post('/api/products', async (req, res) => {
    const body= req.body;
    const product= productModel.create({
        product_name: body.product_name,
        product_price: body.product_price,
        isInStock: body.isInStock,
        Category: body.Category
    })
    console.log(product);
    return res.status(201).json({message: 'Product created successfully'});
})

app.get('/api/products', async (req, res) => {
    const products= await productModel.find({isInStock: true}); //gives only those products which are in stock
    return res.status(200).json(products);
})

app.get('/api/products/:id', async (req, res) => {
    const product= await productModel.findById(req.params.id);
    return res.json(product);
})

app.delete('/api/products/:id', async(req, res)=>{
    const product = await productModel.findByIdAndDelete(req.params.id);
    return res.json(product);
})

app.put('/api/products/:id', async(req,res)=>{
    const product = await productModel.findByIdAndUpdate(req.params);
    return res.json(product);
})

app.listen(3030, () => {
    console.log('Server is running on port 3030');
})
