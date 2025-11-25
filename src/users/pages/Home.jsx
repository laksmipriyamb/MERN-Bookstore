import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'
function Home() {
  return (
    <>
    <Header/>
    <div>
      {/* landing part */}
      <div style={{height:'610px'}} className='flex justify-center items-center flex-col bg-[url(/bg-landing.jpg)] bg-cover bg-center'>
      <div style={{height:'610px',backgroundColor:'rgba(0,0,0,0.5)'}} className='w-full flex justify-center items-center flex-col '>
        <h1 className="text-5xl font-bold mb-2 text-white">Wonderful Gifts</h1>
        <p className='text-white'>Gift your family and friends a book</p>
        {/* search */}
        <div className='flex items-center mt-7'>
          <input type="text" className="bg-white rounded-3xl text-black w-100 placeholder-gray-500 py-2 ps-4" placeholder='Search Books Here' />
          <button className='text-gray-500' style={{marginLeft:'-40px'}}><FaSearch className='text-gray-500'/></button>
        </div>
      </div>

      </div>
      {/* new arrival */}
      <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
        <h1 className="text-3xl font-bold">NEW ARRIVALS</h1>
        <h2 className="text-2xl mt-3">Explore Our Latest Collection</h2>
        {/* books row & col */}
      </section>
      {/* author */}
      {/* testimony */}
    </div>
    <Footer/>
    </>
  )
}

export default Home