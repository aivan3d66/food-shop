import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import AppRouter from './components/BLL/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './state/store'
import GlobalStyles from './globalStyles'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from 'react-apollo'
import { HttpLink } from '@apollo/client';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
)

const link = new HttpLink({
    uri: 'https://git.heroku.com/food-shop-back.git/graphql',
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
    fetchOptions: {
        mode: 'no-cors',
    },
});


const client: any = new ApolloClient({
    link,
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    product: {
                        merge(existing, incoming) {
                            return incoming
                        },
                    },
                    products: {
                        merge(existing, incoming) {
                            return incoming
                        },
                    },
                    category: {
                        merge(existing, incoming) {
                            return incoming
                        },
                    },
                    categories: {
                        merge(existing, incoming) {
                            return incoming
                        },
                    },

                },
            },
        },
    }),
})

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ApolloProvider client={client}>
                <Provider store={store}>
                    <AppRouter />
                    <GlobalStyles />
                </Provider>
            </ApolloProvider>
        </BrowserRouter>
    </React.StrictMode>,
)

reportWebVitals()
