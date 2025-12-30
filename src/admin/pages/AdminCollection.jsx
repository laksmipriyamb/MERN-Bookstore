import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSidebar'
import Footer from '../../components/Footer'
import { getAllAdminBooksAPI, getAllUsersAPI, updateBookStatusAPI } from '../../services/allAPI'
import { useEffect } from 'react'
import serverURL from '../../services/serverURL'
import { ToastContainer, toast } from 'react-toastify';


function AdminCollection() {
  const [tab, setTab] = useState(1)
  const [allBooks, setAllBooks] = useState([])
  const [allUsers, setAllUsers] = useState([])

  console.log(allBooks);
  console.log(allUsers);


  useEffect(() => {
    const token = sessionStorage.getItem("token")
    if (token) {
      if (tab == 1) {
        getAllBooks(token)
      } else if (tab == 2) {
        getAllUsers(token)
      }
    }
  }, [tab, allBooks])


  const getAllBooks = async (token) => {
    const reqHeader = {
      'Authorization': `Bearer ${token}`
    }
    const result = await getAllAdminBooksAPI(reqHeader)
    if (result.status == 200) {
      setAllBooks(result.data)
    } else {
      console.log(result);

    }
  }

  const getAllUsers = async (token) => {
    const reqHeader = {
      'Authorization': `Bearer ${token}`
    }
    //api call
    //setAllUsers with response data
    const result = await getAllUsersAPI(reqHeader)
    if (result.status == 200) {
      setAllUsers(result.data)
    } else {
      console.log(result);
    }
  }

  const updateBookStatus = async (id) => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        'Authorization': `Bearer ${token}`
      }
      const result = await updateBookStatusAPI(id,reqHeader)
      if(result.status==200){
        toast.success("Book Status updated!!!")
        getAllBooks(token)
      }else{
        console.log(result);
        
      }
    }
  }
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
              {
                allBooks?.length > 0 ?
                  allBooks?.map(book => (
                    <div key={book?._id} className="shadow rounded p-3 mx-4">
                      <img width={'300px'} height={'300px'} src={book?.imageURL} alt="book image" />
                      <div className="flex justify-center items-center flex-col mt-4">
                        <h3 className='text-blue-600 font-bold text-lg'>{book?.author}</h3>
                        <h4 className='text-lg'>{book?.title}</h4>
                        <h4>$ {book?.discountPrice}</h4>
                        <div className='grid mt-3 w-full'>
                          {
                            book?.status != "approved" ?
                              <button onClick={()=>{updateBookStatus(book?._id)}} className='bg-green-600 text-white mt-3 py-2 px-3'>Approve</button>
                              :
                              <img width={'80px'} src="https://t3.ftcdn.net/jpg/16/55/16/02/360_F_1655160263_Fsh9Qit1IXA6MbM1UBJzjz01IPH48VzG.jpg" alt="check icon" />
                          }
                        </div>
                      </div>
                    </div>
                  ))
                  :
                  <p>Loading</p>
              }

            </div>
          }
          {
            tab == 2 &&
            <div className='md:grid grid-cols-4 w-full my-5'>
              {/* duplicate user card */}
              {
                allUsers?.length > 0 ?
                  allUsers?.map(user => (
                    <div key={user?._id} className="rounded bg-gray-200 p-3 m-2 text-wrap">
                      <p className="text-red-600 font-bold">ID : {user?._id}</p>
                      <div className="flex items-center text-wrap mt-2">
                        {/* user image */}
                        <img style={{ width: '80px', height: '80px', borderRadius: '50%' }} src={user?.picture ? user?.picture.startsWith("https://lh3.googleusercontent.com/") ? user?.picture : `${serverURL}/uploads/${user.picture}` : "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"} alt="profile" />
                        {/* content */}
                        <div className='ms-5'>
                          <h4 className="font-bold text-2xl text-blue-800">{user?.username}</h4>
                          <p>{user?.email.slice(0, 15)}...</p>
                        </div>
                      </div>
                    </div>
                  ))
                  :
                  <p>Loading...</p>
              }

            </div>
          }
        </div>
        {/* toast */}
        <ToastContainer position="top-center" autoClose={2000} theme="colored" />
      </div>
      <Footer />
    </>
  )
}

export default AdminCollection