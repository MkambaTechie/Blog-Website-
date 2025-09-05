import React from "react";
import ReactDOM from "react-dom/client"; 
import { createBrowserRouter, RouterProvider } from "react-router"; 
import App from "./App";
import Home from "./pages/home";
import About from "./pages/about"; 
import Contact from "./pages/contact";
import Blogs from "./pages/blog";
import Services from "./pages/Services";
import SingleBlog from "./pages/SingleBlog";

const router = createBrowserRouter([
  {
    path:  "/",
    element: <App />,
    children: [
      {
      path:  "/",
      element: <Home />    
    },

    {
        
      path:  "/services",
      element: <Services /> 
          
    },

    {
        
      path:  "/blog",
      element: <Blogs /> 
          
    },

    {
      
      path:  "/about",
      element: <About /> 
          
    },

    {
      
      path:  "/contact",
      element: <Contact />    
    },

    {
      
      path:  "/blogs/:id",
      element: <SingleBlog />,
      // NOTE: `localhost` will not work in production.
      // Replace with your production API URL or an environment variable.
      loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)    
    }


  ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
