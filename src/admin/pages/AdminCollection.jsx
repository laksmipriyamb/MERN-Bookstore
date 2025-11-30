import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSidebar'
import Footer from '../../components/Footer'


function AdminCollection() {
  const [tab, setTab] = useState(1)
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5">
        <div className="col-span-1">
          <AdminSideBar />
        </div>
        <div className="col-span-4 p-10">
          <h1 className="my-5 text-center text-3xl font-bold">All Collections</h1>
          {/* tabs */}
          <div className="flex my-5 justify-center items-center">
            <p onClick={() => setTab(1)} className={tab == 1 ? "text-blue-600 border-gray-200 text-xl font-bold border-t border-l border-r p-3 cursor-pointer" : "border-gray-200 text-xl font-bold border-b p-3 cursor-pointer"}>Books</p>
            <p onClick={() => setTab(2)} className={tab == 2 ? "text-blue-600 border-gray-200 text-xl font-bold border-t border-l border-r p-3 cursor-pointer" : "border-gray-200 text-xl font-bold border-b p-3 cursor-pointer"}>Users</p>
          </div>
          {/* tab contents */}
          {
            tab == 1 &&
            <div className='md:grid grid-cols-4 w-full my-5'>
              {/* duplicate book card */}
              <div className="shadow rounded p-3 mx-4">
                <img width={'300px'} height={'300px'} src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT_rkQYyZwuyV3rHETlGzcviLIvEXDMPPFa-WOPP6bhhROMianunaRpqOrmRy_aD_x2j92zTAoyIrRAUZ028AengNsT3S2u0_BJ99TuNYE&usqp=CAc" alt="book image" />
                <div className="flex justify-center items-center flex-col mt-4">
                  <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
                  <h4 className='text-lg'>title</h4>
                  <h4>$ price</h4>
                  <div className='grid mt-3 w-full'><button className='bg-green-600 text-white mt-3 py-2 px-3'>Approve</button></div>
                </div>
              </div>
              {/* duplicate book card */}
              <div className="shadow rounded p-3 mx-4">
                <img width={'300px'} height={'300px'} src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT_rkQYyZwuyV3rHETlGzcviLIvEXDMPPFa-WOPP6bhhROMianunaRpqOrmRy_aD_x2j92zTAoyIrRAUZ028AengNsT3S2u0_BJ99TuNYE&usqp=CAc" alt="book image" />
                <div className="flex justify-center items-center flex-col mt-4">
                  <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
                  <h4 className='text-lg'>title</h4>
                  <h4>$ price</h4>
                  <div className='grid mt-3 w-full'><button className='bg-green-600 text-white mt-3 py-2 px-3'>Approve</button></div>
                </div>
              </div>
              {/* duplicate book card */}
              <div className="shadow rounded p-3 mx-4">
                <img width={'300px'} height={'300px'} src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT_rkQYyZwuyV3rHETlGzcviLIvEXDMPPFa-WOPP6bhhROMianunaRpqOrmRy_aD_x2j92zTAoyIrRAUZ028AengNsT3S2u0_BJ99TuNYE&usqp=CAc" alt="book image" />
                <div className="flex justify-center items-center flex-col mt-4">
                  <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
                  <h4 className='text-lg'>title</h4>
                  <h4>$ price</h4>
                  <div className='grid mt-3 w-full'><button className='bg-green-600 text-white mt-3 py-2 px-3'>Approve</button></div>
                </div>
              </div>
              {/* duplicate book card */}
              <div className="shadow rounded p-3 mx-4">
                <img width={'300px'} height={'300px'} src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT_rkQYyZwuyV3rHETlGzcviLIvEXDMPPFa-WOPP6bhhROMianunaRpqOrmRy_aD_x2j92zTAoyIrRAUZ028AengNsT3S2u0_BJ99TuNYE&usqp=CAc" alt="book image" />
                <div className="flex justify-center items-center flex-col mt-4">
                  <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
                  <h4 className='text-lg'>title</h4>
                  <h4>$ price</h4>
                  <div className='grid mt-3 w-full'><button className='bg-green-600 text-white mt-3 py-2 px-3'>Approve</button></div>
                </div>
              </div>
              
            </div>
          }
          {
            tab == 2 &&
            <div className='md:grid grid-cols-4 w-full my-5'>
              {/* duplicate user card */}
              <div className="rounded bg-gray-200 p-3 m-2 text-wrap">
                <p className="text-red-600 font-bold">ID : okj8765e4excvh9</p>
                <div className="flex items-center text-wrap mt-2">
                  {/* user image */}
                  <img style={{ width: '80px', height: '80px', borderRadius: '50%' }} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="profile" />
                  {/* content */}
                  <div className='ms-5'>
                    <h4 className="font-bold text-2xl text-blue-800">name</h4>
                    <p>demo@gmail.com</p>
                  </div>
                </div>
              </div>
              {/* duplicate user card */}
              <div className="rounded bg-gray-200 p-3 m-2 text-wrap">
                <p className="text-red-600 font-bold">ID : okj8765e4excvh9</p>
                <div className="flex items-center text-wrap mt-2">
                  {/* user image */}
                  <img style={{ width: '80px', height: '80px', borderRadius: '50%' }} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="profile" />
                  {/* content */}
                  <div className='ms-5'>
                    <h4 className="font-bold text-2xl text-blue-800">name</h4>
                    <p>demo@gmail.com</p>
                  </div>
                </div>
              </div>
              
            </div>
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminCollection