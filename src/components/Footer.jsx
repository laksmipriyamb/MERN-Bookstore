import React from 'react'
import { FaArrowRight, FaFacebook, FaHeart, FaInstagram } from 'react-icons/fa'
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <div>
      <div className="md:flex bg-sky-950 ps-10 justify-center py-12">
        <div className='md:w-32 flex-auto me-10 mb-10 md:mb-0'>
          <h1 className='text-l font-bold text-white mb-3'>ABOUT US</h1>
          <p className='text-white text-justify'>We are a platform for buying and selling second-hand books easily and affordably. Our goal is to give pre-loved books a new home while helping readers save money and reduce waste. Find great books or sell your old ones—all in one place!</p>
        </div>
        <div className='md:w-32 flex-auto mb-10 md:mb-0'>
          <h1 className='text-l font-bold text-white mb-3'>NEWS LETTER</h1>
          <p className='text-white mb-4'>Stay updated with our latest trends</p>
          <div className='flex'>
            <input type="text" placeholder='Email ID' className='bg-white py-1 px-1'/>
            <button className='bg-yellow-400 p-2'><FaArrowRight className='text-white'/></button>
          </div>
          </div>
        <div className='md:w-32 flex-auto mb-10 md:mb-0'>
          <h1 className='text-l font-bold text-white mb-3'>FOLLOW US</h1>
          <p className='text-white mb-4'>Let us be social</p>
          <div className='flex'><FaInstagram className='text-white'/><FaXTwitter className='text-white mx-2'/><FaFacebook className='text-white me-2'/><FaLinkedin className='text-white'/></div>
        </div>
      </div>
      <p className="text-center text-white bg-black flex justify-center items-center">
        Copyright &copy; 2025 All rights reserved | This website is made with &hearts; By luminar Technolab
      </p>
    </div>
  )
}

export default Footer