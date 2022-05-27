import { gql } from 'apollo-boost'

export const categoriesQuery = gql`
  query categoriesQuery {
    categories {
        id
        name
        products
    }
  }
`
