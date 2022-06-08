import { gql } from 'apollo-boost'

export const productsQuery = gql`
  query productsQuery {
    products {
        id
        name
        popularity
        image
        price
        delivery
    }
  }
`
