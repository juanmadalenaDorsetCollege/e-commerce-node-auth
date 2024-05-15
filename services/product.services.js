const productModel = require('../database/Models/ProductModel');

const getAllProducts = async () => {
    return await productModel.find();
}

const createProduct = async (product) => {
    console.log(product)
    return await productModel.create(product);
}

const getProductById = async (id) => {
    return await productModel.findById(id);
}

const updateProduct = async (id, product) => {
    return await productModel.findByIdAndUpdate(id, product, {new: true});
}

const deleteProduct = async (id) => {
    return await productModel.findByIdAndDelete(id);
}

const getProductByCategory = async (category) => {
    return await productModel.find({category});
}

module.exports = {
    getAllProducts, createProduct, getProductById, updateProduct, deleteProduct, getProductByCategory
}