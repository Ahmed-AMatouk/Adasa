import './App.css'
import { RouterProvider , createHashRouter} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import BlogDetails from './components/BlogDetails/BlogDetails';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import BlogLayout from './components/blogLayout/BlogLayout';

let router  = createHashRouter([
  {path:"",
   element: <Layout/> ,
   children: [
    {index: true, element: <Home/>},
    {path: "home", element: <Home/>},
    {path: "blog", element: <BlogLayout/> , children: [
      {index:true, element: <Blog/>},
      {path: ":id", element: <BlogDetails/>}
    ]},
    {path: "about", element: <About/>},
    {path: "*", element: <NotFound/>},
   ]}
])

export default function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

