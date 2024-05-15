const mongoose = require('mongoose');

const URI = process.env.MONGO_URI

const connection = async () => {
    const connection = await mongoose.connect(URI)
    console.log('Connected to MongoDB')
    connection.connection.on('error', (err) => {
        console.log('MongoDB connection error: ', err)
    })

    return connection;
};

module.exports = connection;