const productServices = require('../services/product.services');

const getAllProducts = (_req, res) => {
    try{
        productServices.getAllProducts()
        .then( data => {
            return res.json(data)
        })
        .catch( error => {
            res.status(400).json({
                msg: error
            })
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            msg: error
        })
    }
}

const createProduct = (req, res) => {
    try{
        productServices.createProduct(req.body)
        .then( data => {
            return res.json(data)
        })
        .catch( error => {
            res.status(400).json({
                msg: error
            })
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            msg: error
        })
    }
}

const getProductById = (req, res) => {
    try{
        productServices.getProductById(req.params.id)
        .then( data => {
            return res.json(data)
        })
        .catch( error => {
            res.status(400).json({
                msg: error
            })
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            msg: error
        })
    }
}

const updateProduct = (req, res) => {
    try{
        productServices.updateProduct(req.params.id, req.body)
        .then( data => {
            return res.json(data)
        })
        .catch( error => {
            res.status(400).json({
                msg: error
            })
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            msg: error
        })
    }
}

const deleteProduct = (req, res) => {
    try{
        productServices.deleteProduct(req.params.id)
        .then( data => {
            return res.json(data)
        })
        .catch( error => {
            res.status(400).json({
                msg: error
            })
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            msg: error
        })
    }
}

const getProductByCategory = (req, res) => {
    try{
        productServices.getProductByCategory(req.params.category)
        .then( data => {
            return res.json(data)
        })
        .catch( error => {
            res.status(400).json({
                msg: error
            })
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            msg: error
        })
    }
}

module.exports = {
    getAllProducts, createProduct, getProductById, updateProduct, deleteProduct, getProductByCategory
}