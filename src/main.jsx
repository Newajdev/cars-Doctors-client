import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import router from './routes/Routers.jsx'
import AuthProvider from './provider/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </StrictMode>,
  </div>
)
