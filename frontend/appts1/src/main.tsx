import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './../router';
import { Provider } from 'react-redux'
import { store } from './store/store';
import "./index.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className='data-new-gr-c-s-check-loaded="14.1110.0'>
        <RouterProvider router={router} />
      </div>
    </Provider>
  </React.StrictMode>,
)
