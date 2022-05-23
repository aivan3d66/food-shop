import axios from 'axios'
import { createApi } from '@reduxjs/toolkit/query'
import { request, gql, ClientError } from 'graphql-request'

export const instance = axios.create({
    baseURL: 'http://localhost:3000/graphql',
    withCredentials: true,
})

const graphqlBaseQuery = ({ baseUrl }: { baseUrl: string }) =>
    async ({ body }: { body: string }) => {
        try {
            const result = await request(baseUrl, body)
            return { data: result }
        } catch (error) {
            if (error instanceof ClientError) {
                return { error: { status: error.response.status, data: error } }
            }
            return { error: { status: 500, data: error } }
        }
    }


export const api = createApi({
    reducerPath: 'appApi',
    baseQuery: graphqlBaseQuery({
        baseUrl: 'http://localhost:3000/graphql',
    }),
    endpoints: (builder) => ({
        productsQuery: builder.query({
            query: () => ({
                body: gql`
                  query ($name: String) {
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
                `,
            }),
        }),
    }),
})
