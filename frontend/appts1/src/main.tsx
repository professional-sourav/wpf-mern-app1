import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './../router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='data-new-gr-c-s-check-loaded="14.1110.0'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
