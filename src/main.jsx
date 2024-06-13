import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Route.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={Router}>
    <App />
</RouterProvider>
)
