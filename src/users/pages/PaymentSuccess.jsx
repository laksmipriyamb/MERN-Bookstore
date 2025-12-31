import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FaBackward } from 'react-icons/fa'

function PaymentSuccess() {
  return (
    <>
        <Header/>
        <div className='md:flex justify-center items-center min-h-screen md:px-20 px-5 my-10'>
            <div className='md:pe-40'>
                <h1 className='text-5xl text-blue-700 md:mb-20 mb-10'>Congratulation!!!</h1>
                <p className='md:text-2xl text-xl mb-6'>Thankyou for purchasing with BookStore.Hope <br /> you  have a good time with us...</p>
                <Link to={'/books'} className='bg-blue-600 pl-4 py-2 text-xl text-white font-semibold w-65 flex items-center'> <FaBackward className='me-2'/>Explore More Books!!!</Link>
            </div>
            <div>
                <img src="https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif" alt="success" />
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default PaymentSuccess