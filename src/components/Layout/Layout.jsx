import React from 'react'
import NavBar from './../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
import { Circles } from 'react-loader-spinner'





export default function Layout() {
  const [blogs, setBlogs] = useState();
  const [loading, setLoading] = useState(true);
  async function getproducts(){
    let data = await axios.get(`/posts.json`)
    console.log(data.data)
    setBlogs(data.data)
    setLoading(false)
  }
  
  useEffect(() =>{
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getproducts()
  },[])

  if(loading){
      return <>
        <div className="w-full h-screen fixed bg-black flex justify-center items-center">
          <Circles
        height={100}
        width={100}
        radius={5}
        color="#ff8904"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
        </div>
        
      
      </>
      }

  return (
    <>
        <NavBar/>
        <Outlet context={{blogs}}/>
        <Footer/>
    </>
  )
}
