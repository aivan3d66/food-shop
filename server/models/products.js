const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productsSchema = new Schema({
    id: String,
    name: String,
    popularity: Array,
    image: String,
    price: Number,
    type: String,
    delivery: Boolean,
})

module.exports = mongoose.model('Product', productsSchema, 'products')
