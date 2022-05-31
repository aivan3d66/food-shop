import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import AppRouter from './components/BLL/AppRouter'
import { HashRouter } from 'react-router-dom'
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
    uri: 'https://food-shop-back.herokuapp.com/graphql'
});

export const client: any = new ApolloClient({
    link,
    cache: new InMemoryCache(),
})

root.render(
    <React.StrictMode>
        <HashRouter>
            <ApolloProvider client={client}>
                <Provider store={store}>
                    <AppRouter />
                    <GlobalStyles />
                </Provider>
            </ApolloProvider>
        </HashRouter>
    </React.StrictMode>,
)

reportWebVitals()
