const mongoose = require('mongoose')
const PRODUCT_RATING_SCHEMA = require('../Schemas/ProductRatingSchema')

const model = mongoose.model('ProductRating', PRODUCT_RATING_SCHEMA, 'product_rating')

module.exports = model