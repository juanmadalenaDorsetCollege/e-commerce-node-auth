const Router = require('express');

const authRouter = require('./auth.routes');
const productRouter = require('./product.routes');


const router = Router();

router.use('/auth', authRouter);
router.use('/products', productRouter); 


module.exports = router;