const mongoose = require('mongoose')
const PRODUCT_SCHEMA = require('../Schemas/ProductSchema')

const model = mongoose.model('Product', PRODUCT_SCHEMA, 'products')

module.exports = model