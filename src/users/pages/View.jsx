import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBackward, FaCamera, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaX } from 'react-icons/fa6'

function View() {
  const [modalStatus,setModalStatus] = useState(false)

  return (
    <>
    <Header/>
    <div className='md:m-10 m-5'>
      <div className="shadow border p-5 border-gray-300">
        <div className="md:grid grid-cols-4 gap-x-10 items-center">
          {/* image */}
          <div className="col-span-1">
            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT_rkQYyZwuyV3rHETlGzcviLIvEXDMPPFa-WOPP6bhhROMianunaRpqOrmRy_aD_x2j92zTAoyIrRAUZ028AengNsT3S2u0_BJ99TuNYE&usqp=CAc" alt="book" className="w-full" />
          </div>
          {/* book details column */}
          <div className="col-span-3">
            <div className="flex justify-between mt-5 md:mt-0">
              <h1 className="text-2xl font-black">Book-Title</h1>
              <button onClick={()=>setModalStatus(true)} className="text-gray-400"><FaEye/></button>
            </div>
            <p className="my-3 text-blue-700">-Author</p>
            <div className="md:grid grid-cols-3 gap-5 my-10">
              <p className="font-bold">Publisher :</p>
              <p className="font-bold">Langusge :</p>
              <p className="font-bold">No. of Pages :</p>
              <p className="font-bold">Original Price :</p>
              <p className="font-bold">ISBN :</p>
              <p className="font-bold">Category :</p>
              <p className="font-bold">Seller :</p>
            </div>
            <div className="md:my-10 my-4">
              <p className="font-bold text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, amet eveniet corrupti possimus soluta ipsum velit dolorem blanditiis aliquam tempora eaque ea ullam perferendis a earum maxime, est consequatur repudiandae!
              </p>
            </div>
            <div className="flex justify-end">
              <Link to={'/books'} className="bg-blue-700 p-2 font-bold rounded text-white flex items-center"><FaBackward className='me-2'/>Back</Link>
              <button className='bg-green-700 rounded font-bold text-white px-3 ms-2'>Buy $ 13</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* modal */}
    {
      modalStatus &&
      <div onClick={()=>setModalStatus(false)} className="relative z-10">
      <div className="bg-gray-500/75 fixed inset-0">
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white rounded-2xl md:w-250 w-100">
            {/* modal title */}
            <div className="bg-black text-white p-3 flex justify-between items-center">
              <h3>Books Images</h3>
              < FaX  onClick={()=>setModalStatus(false)} />
            </div>
            {/* modal body */}
            <div className="relative p-5">
              <p className="text-blue-600 flex items-center"><FaCamera className='me-2'/>Camera clicks of the book in the hand of seller</p>
              {/* book images in row */}
              <div className="md:flex flex-wrap my-4">
                <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT_rkQYyZwuyV3rHETlGzcviLIvEXDMPPFa-WOPP6bhhROMianunaRpqOrmRy_aD_x2j92zTAoyIrRAUZ028AengNsT3S2u0_BJ99TuNYE&usqp=CAc" alt="book" className="md:w-75 w-25 md:me-2 mb-3 md:mb-0" />
                <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT_rkQYyZwuyV3rHETlGzcviLIvEXDMPPFa-WOPP6bhhROMianunaRpqOrmRy_aD_x2j92zTAoyIrRAUZ028AengNsT3S2u0_BJ99TuNYE&usqp=CAc" alt="book" className="md:w-75 w-25 md:me-2 mb-3 md:mb-0" />
                <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT_rkQYyZwuyV3rHETlGzcviLIvEXDMPPFa-WOPP6bhhROMianunaRpqOrmRy_aD_x2j92zTAoyIrRAUZ028AengNsT3S2u0_BJ99TuNYE&usqp=CAc" alt="book" className="md:w-75 w-25 md:me-2 mb-3 md:mb-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    }
    <Footer/>
    </>
  )
}

export default View