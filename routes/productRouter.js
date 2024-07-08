const router= require('express').Router();
const productController= require('../controllers/productController');

router.post('/', productController.createProduct);

router.get('/', productController.getAllProducts);

router.get("/:id", productController.getProductById);

router.put("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

modules.exports= router;