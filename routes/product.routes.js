const Router = require('express');

const productController = require('../controllers/product.controllers');

const jwtMiddleware = require('../middlewares/jwt');

const router = Router();



router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);

//JWT middleware
router.use(jwtMiddleware)

router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);
router.get('/category/:category', productController.getProductByCategory);

module.exports = router;