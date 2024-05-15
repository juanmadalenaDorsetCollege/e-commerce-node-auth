const { Schema } = require('mongoose')

const PRODUCT_SCHEMA = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    discountPercentage: {type: Number, required: true},
    rating: {type: Number, required: false},
    stock: {type: Number, required: true},
    brand: {type: String, required: true},
    category: {type: String, required: true},
    thumbnail: {type: String, required: true},
    images: {type: String, required: true},
}); 

module.exports = PRODUCT_SCHEMA
