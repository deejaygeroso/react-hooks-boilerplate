import React, { ReactElement } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './modules/About'
import Home from './modules/Home'
import './common/styles/app.css'

const App = (): ReactElement => {
  const router = createBrowserRouter([
    {
      element: <Home />,
      path: '/',
    },
    {
      element: <About />,
      path: 'about',
    },
  ])

  return <RouterProvider router={router} />
}

export default App
