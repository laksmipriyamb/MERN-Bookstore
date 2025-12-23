import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit from '../components/Edit'
import SellBook from '../components/SellBook'
import BookStatus from '../components/BookStatus'
import Purchase from '../components/Purchase'
import serverURL from '../../services/serverURL'


function Profile() {
const [tab,setTab] = useState(1)
const [dp,setDp] = useState("")
const [username,setUsername] = useState("")

useEffect(()=>{
  if(sessionStorage.getItem("token") && sessionStorage.getItem('user')){
    const user = JSON.parse(sessionStorage.getItem("user"))
    setUsername(user?.username)
    setDp(user?.picture)
  }
},[])

  return (
    <>
    <Header/>
    {/* black div */}
    <div style={{height:'200px'}} className="bg-black"> </div>
      {/* profile image */}
      <div style={{width:'230px',height:'230px',borderRadius:'50%',marginLeft:'70px',marginTop:'-120px'}} className='bg-white p-3'>
        <img style={{width:'200px',height:'200px',borderRadius:'50%'}} src={dp?dp.startsWith("https://lh3.googleusercontent.com/")?dp:`${serverURL}/uploads/${dp}`:"https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"} alt="profile" />
      </div>
      {/* name with edit block */}
      <div className="md:flex justify-between items-center md:px-20 px-5 my-5">
        <h1 className="text-2xl font-bold flex items-center">{username}<FaCircleCheck className='text-blue-400 ms-5'/></h1>
        <Edit/>
      </div>
      <p className='text-justify md:px-20 px-5'>An avid book lover who enjoys discovering new authors, exploring different genres, and sharing honest reviews. This user values meaningful stories, well-developed characters, and beautifully written prose. With a passion for building a personal reading journey, they frequently update their collection, wishlist, and reading progress. Always excited to find the next great read and connect with fellow readers in the community.</p>
      {/* tabs with contents */}
      <div className="md:px-40">
        {/* tabs */}
        <div className="flex justify-center items-center my-8 font-medium text-lg">
          <p onClick={()=>setTab(1)} className={tab==1?'text-blue-400 border-gray-200 border-t border-l border-r p-4 cursor-pointer':'border-gray-200 border-b p-4 cursor-pointer'}>Sell Books</p>
          <p onClick={()=>setTab(2)} className={tab==2?'text-blue-400 border-gray-200 border-t border-l border-r p-4 cursor-pointer':'border-gray-200 border-b p-4 cursor-pointer'}>Book Status</p>
          <p onClick={()=>setTab(3)} className={tab==3?'text-blue-400 border-gray-200 border-t border-l border-r p-4 cursor-pointer':'border-gray-200 border-b p-4 cursor-pointer'}>Purchase history</p>
        </div>
        {/* contents */}
        {
          tab==1 &&
          <SellBook/>
          }
        {
          tab==2 &&
          <BookStatus/>
        }
        {
          tab==3 &&
          <Purchase/>
        }
      </div>
   
    <Footer/>
    </>
  )
}

export default Profile