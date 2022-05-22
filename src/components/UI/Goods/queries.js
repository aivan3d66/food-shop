import { gql } from 'apollo-boost'

export const productsQuery = gql`
  query productsQuery($name: String) {
    products(name: $name) {
        id
        name
        popularity
        image
        price
        type
        delivery
    }
  }
`
