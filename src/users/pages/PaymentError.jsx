import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FaBackward } from 'react-icons/fa'

function PaymentError() {
  return (
    <>
        <Header/>
            <div className='md:flex justify-center items-center min-h-screen md:px-20 px-5 my-10'>
                <div className='md:pe-40'>
                    <h1 className='text-5xl text-red-700 md:mb-20 mb-10'>Sorry...Payment Failed!!!</h1>
                    <p className='md:text-2xl text-xl mb-6'>We apologize for the inconvience caused and appreciate you visit to BookStore<br /> you  have a good time with us...</p>
                    <Link to={'/books'} className='bg-red-500 pl-4 py-2 text-xl text-white font-semibold w-65 flex items-center'> <FaBackward className='me-2'/>Explore More Books!!!</Link>
                </div>
                <div>
                    <img width={'600'} src="https://cdn.dribbble.com/userupload/21333154/file/original-d373e3fc29335ed66389a37c09208855.gif" alt="success" />
                </div>
            </div>
            <Footer/>
    </>
  )
}

export default PaymentError