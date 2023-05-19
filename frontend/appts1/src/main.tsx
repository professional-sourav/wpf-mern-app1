import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './../router';
import { Provider } from 'react-redux'
import { store } from './store/store';
import "./index.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <div className='data-new-gr-c-s-check-loaded="14.1110.0'>
          <RouterProvider router={router} />
        </div>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
)
