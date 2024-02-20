import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Layout({children}) {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  );
}
