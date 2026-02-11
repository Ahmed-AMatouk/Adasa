import React from 'react'
import { Outlet, useOutletContext } from 'react-router-dom';

export default function BlogLayout() {
    const { blogs } = useOutletContext();
    
  return (
    <Outlet context={{blogs}}/>
  )
}
