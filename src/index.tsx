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
    uri: 'http://localhost:3000/graphql',
});


export const client: any = new ApolloClient({
    link,
    cache: new InMemoryCache(),
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
