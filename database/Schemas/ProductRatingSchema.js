const { Schema } = require('mongoose');

const PRODUCT_RATING_SCHEMA = new Schema({
    productId: { type: Schema.Types.ObjectId, ref: 'Product' }, // Product id reference
    userId: { type: Schema.Types.ObjectId, ref: 'User' }, // User id reference
    rating: Number,
    comment: String,
    date: { type: Date, default: Date.now }
});

module.exports = PRODUCT_RATING_SCHEMA;
