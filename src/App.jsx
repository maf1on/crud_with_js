import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/Contact'
import About from './pages/About'
import Sign from './pages/Sign'
import Basket from './pages/Basket'

const App = () => {

  const router = createBrowserRouter([
      {
        path: '/',
        element: <RootLayout/>,
        children: [
          {
            index: true,
            element: <Home/>
          },
          
          {
            path: 'product',
            element: <Product/>
          },
          
          {
            path: 'contact',
            element: <Contact/>
          },
          
          {
            path: 'about',
            element: <About/>
          },
          
          {
            path: 'sign',
            element: <Sign/>
          },
          
          {
            path: '/basket',
            element: <Basket/>
          }
        ]
      }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App