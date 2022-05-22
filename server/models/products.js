const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productsSchema = new Schema({
    name: String,
    popularity: String,
    image: String,
    price: Number,
    type: String,
    delivery: Boolean,
})

module.exports = mongoose.model('Product', productsSchema, 'products')
