import React from 'react';
import ReactDOM from 'react-dom/client';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {Provider} from 'react-redux'

import store from './redux/Store';

import {
  LayOut,
  Home,
  About,
  Portfolio,
  Contact,
  Problem_Solving
} from './pages'

if(process.env.NODE_ENV ===  'production') disableReactDevTools()


const router = createBrowserRouter([
  {
    element:<LayOut/>,
    path:'/',
    errorElement:<div>Error!</div>,
    children:[
      {
        index:true,
        element:<Home/>,
      },
      {
        path:'about',
        element:<About/>,
      },
      {
        path:'portfolio',
        element:<Portfolio/>,
      },
      {
        path: 'contact',
        element:<Contact/>,
      },
      {
        path: 'p-solving',
        element:<Problem_Solving/>,
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
