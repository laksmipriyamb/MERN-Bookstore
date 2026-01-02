import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBackward, FaCamera, FaEye } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { FaX } from 'react-icons/fa6'
import { getBookDetailsByIdAPI, purchaseBookAPI } from '../../services/allAPI'
import serverURL from '../../services/serverURL'
import {loadStripe} from '@stripe/stripe-js';

function View() {
  const [modalStatus, setModalStatus] = useState(false)
  const [viewDetails, setViewDetails] = useState({})
  console.log(viewDetails);

  const { id } = useParams()
  console.log(id);


  useEffect(() => {
    //get book details by id
    if (id) {
      getDetailsById(id)
    }

  }, [id])

  const getDetailsById = async (id) => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        'Authorization': `Bearer ${token}`
      }
      //api call to get book details by id
      const result = await getBookDetailsByIdAPI(reqHeader, id)
      console.log(result);

      if (result.status == 200) {
        setViewDetails(result.data)
      } else {
        console.log(result);
      }
    }
  }

  const makePayment = async ()=>{
    //to view stripe payment window in browser
    const stripe = await loadStripe('pk_test_51SkJOfI6PYKlC3Jo9dSPbz8UIdYEg5xiDhkJHtD05yzSZbHU2rBIefopvQJjyklX3eV5x6sLntgrAcyj9pRaztxt00MMFSfCtn');
    //api call foe checkout
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        'Authorization': `Bearer ${token}`
      }
      //api call to get book details by id
      const result = await purchaseBookAPI(id,reqHeader)

      if (result.status == 200) {
        const {checkoutURL} = result.data
        window.location.href = checkoutURL
      } else {
        console.log(result);
      }
    }
  }

  return (
    <>
      <Header />
      <div className='md:m-10 m-5'>
        <div className="shadow border p-5 border-gray-300">
          {
            viewDetails && viewDetails._id ?

              <div className="md:grid grid-cols-4 gap-x-10 items-center">
                {/* image */}
                <div className="col-span-1">
                  <img src={viewDetails.imageURL} alt="book" className="w-full" />
                </div>
                {/* book details column */}
                <div className="col-span-3">
                  <div className="flex justify-between mt-5 md:mt-0">
                    <h1 className="text-2xl font-black">{viewDetails.title}</h1>
                    <button onClick={() => setModalStatus(true)} className="text-gray-400"><FaEye /></button>
                  </div>
                  <p className="my-3 text-blue-700">-{viewDetails.author}</p>
                  <div className="md:grid grid-cols-3 gap-5 my-10">
                    <p className="font-bold">Publisher :{viewDetails.publisher}</p>
                    <p className="font-bold">Language :{viewDetails.language}</p>
                    <p className="font-bold">No. of Pages :{viewDetails.pages}</p>
                    <p className="font-bold">Original Price :{viewDetails.price}</p>
                    <p className="font-bold">ISBN :{viewDetails.isbn}</p>
                    <p className="font-bold">Category :{viewDetails.category}</p>
                    <p className="font-bold">Seller :{viewDetails.sellerMail}</p>
                  </div>
                  <div className="md:my-10 my-4">
                    <p className="font-bold text-lg">
                      {viewDetails.abstract}
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <Link to={'/books'} className="bg-blue-700 p-2 font-bold rounded text-white flex items-center"><FaBackward className='me-2' />Back</Link>
                    <button onClick={makePayment} className='bg-green-700 rounded font-bold text-white px-3 ms-2'>Buy $ {viewDetails.discountPrice}</button>
                  </div>
                </div>
              </div>

              :
              <div className="text-center font-bold my-5">
                No Details Found!!!
              </div>

          }
        </div>
      </div>
      {/* modal */}
      {
        modalStatus &&
        <div onClick={() => setModalStatus(false)} className="relative z-10">
          <div className="bg-gray-500/75 fixed inset-0">
            <div className="flex justify-center items-center min-h-screen">
              <div className="bg-white rounded-2xl md:w-250 w-100">
                {/* modal title */}
                <div className="bg-black text-white p-3 flex justify-between items-center">
                  <h3>Books Images</h3>
                  < FaX onClick={() => setModalStatus(false)} />
                </div>
                {/* modal body */}
                <div className="relative p-5">
                  <p className="text-blue-600 flex items-center"><FaCamera className='me-2' />Camera clicks of the book in the hand of seller</p>
                  {/* book images in row */}
                  <div className="md:flex flex-wrap my-4">
                    {
                      viewDetails?.uploadImages?.map(fileName=>(
                        <img key={fileName} src={`${serverURL}/uploads/${fileName}`} alt="book" className="md:w-75 w-25 md:me-2 mb-3 md:mb-0" />
                      ))
                    }
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      <Footer />
    </>
  )
}

export default View