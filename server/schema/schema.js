const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLBoolean,
} = require('graphql')

const Categories = require('../models/categories')
const Products = require('../models/products')

const CategoryType = new GraphQLObjectType({
    name: 'Category',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        products: { type: new GraphQLNonNull(GraphQLList(GraphQLInt))},

    }),
})

const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        popularity: { type: new GraphQLNonNull(GraphQLList(GraphQLString))},
        image: { type: new GraphQLNonNull(GraphQLString) },
        price: { type: new GraphQLNonNull(GraphQLInt) },
        type: { type: new GraphQLNonNull(GraphQLString) },
        delivery: { type: new GraphQLNonNull(GraphQLBoolean) },
    }),
})

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        category: {
            type: CategoryType,
            args: { id: { type: GraphQLID } },
            resolve(parent, { id }) {
                return Categories.findById(id)
            },
        },
        product: {
            type: ProductType,
            args: { id: { type: GraphQLID } },
            resolve(parent, { id }) {
                return Products.findById(id)
            },
        },
        categories: {
            type: new GraphQLList(CategoryType),
            args: { name: { type: GraphQLString } },
            resolve(parent, { name }) {
                return Categories.find({ name: { $regex: name, $options: 'i' } })
            },
        },
        products: {
            type: new GraphQLList(ProductType),
            args: { name: { type: GraphQLString } },
            resolve(parent, { name }) {
                return Products.find({ name: { $regex: name, $options: 'i' } })
            },
        },
    },
})

module.exports = new GraphQLSchema({
    query: Query,
})
