const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categoriesSchema = new Schema({
    name: String,
    products: Array,
})

module.exports = mongoose.model('Category', categoriesSchema, 'categories')
