const express= require('express');
const mongoose = require('mongoose');
const productRouter = require('./routes/productRouter')
const app = express();
require('dotenv').config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('Connected to MongoDB')
})
.catch((err) => {
    console.error('Could not connect to MongoDB', err)
})

app.use('/api/products', productRouter);
app.use('/api/users' , userRoutes)

app.listen(3030, () => {
    console.log('Server is running on port 3030');
})
