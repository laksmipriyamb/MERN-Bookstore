import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Books() {
  const [showCategoryList, setShowCategoryList] = useState(false)

  const [token,setToken] = useState()

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
    }
  },[])


  return (
    <>
      <Header />
      {/* login- book page */}
      {
        token ?
        <>
        {/* title & search box */}
        <div className="flex flex-col justify-center items-center my-5">
          {/* heading */}
          <h1 className="text-3xl font-bold my-5">All Books</h1>
          {/* search box */}
          <div className="flex my-5">
            <input type="text" placeholder='Search By Title' className="border border-gray-400 p-2 md:w-100 w-64" />
            <button className="bg-black text-white p-2">Search</button>
          </div>

        </div>
        {/* books and filter row */}
        <div className="md:grid grid-cols-4 md:px-20 p-5 mb-10">
          {/* filter row */}
          <div className="cols-span-1">
            {/* filter-title */}
            <div className="flex justify-between">
              <h1 className="text-2xl font-semibold">Filter</h1>
              <button onClick={() => setShowCategoryList(!showCategoryList)} className="text-2xl md:hidden"><FaBars /></button>
            </div>
            {/* filter option */}
            <div className={showCategoryList ? "block" : "md:block hidden"}>
              {/* category 1 */}
              <div className="mt-3">
                <input type="radio" name="filter" id="all" />
                <label htmlFor="all" className='ms-3'>All</label>
              </div>
              {/* book caterory  */}
              <div className="mt-3">
                <input type="radio" name="filter" id="demo" />
                <label htmlFor="demo" className='ms-3'>Category name</label>
              </div>
            </div>
          </div>
          {/* books row */}
          <div className="col-span-3">
            <div className="md:grid grid-cols-4 mt-5 md:mt-0">
              {/* book card div */}
              {/* duplicate */}
              <div className="shadow rounded p-3 mx-4 mb-5">
                <img width={'300px'} height={'300px'} src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT_rkQYyZwuyV3rHETlGzcviLIvEXDMPPFa-WOPP6bhhROMianunaRpqOrmRy_aD_x2j92zTAoyIrRAUZ028AengNsT3S2u0_BJ99TuNYE&usqp=CAc" alt="book image" />
                <div className="flex justify-center items-center flex-col mt-4">
                  <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
                  <h4 className='text-lg'>title</h4>
                  <Link to={'/books/id/view'} className="bg-black py-2 px-5 mt-2 text-white ">View</Link>
                </div>
              </div>
              {/* duplicate */}
              <div className="shadow rounded p-3 mx-4 mb-5">
                <img width={'300px'} height={'300px'} src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT_rkQYyZwuyV3rHETlGzcviLIvEXDMPPFa-WOPP6bhhROMianunaRpqOrmRy_aD_x2j92zTAoyIrRAUZ028AengNsT3S2u0_BJ99TuNYE&usqp=CAc" alt="book image" />
                <div className="flex justify-center items-center flex-col mt-4">
                  <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
                  <h4 className='text-lg'>title</h4>
                  <Link to={'/books/id/view'} className="bg-black py-2 px-5 mt-2 text-white ">View</Link>
                </div>
              </div>
              {/* duplicate */}
              <div className="shadow rounded p-3 mx-4 mb-5">
                <img width={'300px'} height={'300px'} src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT_rkQYyZwuyV3rHETlGzcviLIvEXDMPPFa-WOPP6bhhROMianunaRpqOrmRy_aD_x2j92zTAoyIrRAUZ028AengNsT3S2u0_BJ99TuNYE&usqp=CAc" alt="book image" />
                <div className="flex justify-center items-center flex-col mt-4">
                  <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
                  <h4 className='text-lg'>title</h4>
                  <Link to={'/books/id/view'} className="bg-black py-2 px-5 mt-2 text-white ">View</Link>
                </div>
              </div>
              {/* duplicate */}
              <div className="shadow rounded p-3 mx-4 mb-5">
                <img width={'300px'} height={'300px'} src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT_rkQYyZwuyV3rHETlGzcviLIvEXDMPPFa-WOPP6bhhROMianunaRpqOrmRy_aD_x2j92zTAoyIrRAUZ028AengNsT3S2u0_BJ99TuNYE&usqp=CAc" alt="book image" />
                <div className="flex justify-center items-center flex-col mt-4">
                  <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
                  <h4 className='text-lg'>title</h4>
                  <Link to={'/books/id/view'} className="bg-black py-2 px-5 mt-2 text-white ">View</Link>
                </div>
              </div>
              
            </div>
          </div>
        </div>

      </>
      :
      <div className='flex justify-center items-center flex-col w-full h-screen'>
        {/* not login book page */}
        <img width={'300px'} height={'300px'} className='mb-4' src="https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-30-710_512.gif" alt="locked" />
         <p className='font-bold 2xl mx-4 md:mx-0 md:text-3xl'>Please <Link to={'/login'} className='text-blue-700 underline'>Login</Link> to Explore More!!!</p> 
      </div>
      }
      
      <Footer />
    </>
  )
}

export default Books