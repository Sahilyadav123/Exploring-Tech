import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import Layout from './Layout.jsx'



const router=createBrowserRouter([
  {
  path:"/",
  element:<Layout/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<ContactUs/>
    },
    
  ]

}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
