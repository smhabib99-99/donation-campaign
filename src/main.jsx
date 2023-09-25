import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import myCreatedRoute from './Router/Router'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={myCreatedRoute}></RouterProvider> */}
    <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>,
)
