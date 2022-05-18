import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import AppRouter from './components/BLL/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './state/store'
import GlobalStyles from './globalStyles'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
)

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppRouter />
                <GlobalStyles />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
)

reportWebVitals()
