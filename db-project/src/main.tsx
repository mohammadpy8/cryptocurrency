import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import store from './features/store/store.ts'
import { Provider } from 'react-redux'
import AuthContextProvider from './context/AuthContextProvider'
import CartContextProvider from './context/CartProviderContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <CartContextProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </CartContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
