import React from 'react'
import { FaPowerOff } from 'react-icons/fa'
import { TbMarquee } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'

function AdminHeader() {
  const navigate = useNavigate()

  const logout = ()=>{
    sessionStorage.clear()
    navigate('/login')
  }
  return (
    <>
    {/* header upper part */}
      <div className='flex justify-between items-center p-3 md:px-20'>
        {/* logowith title */}
        <div className="flex items-center">
          <img width={'50px'} height={'50px'} src="https://img.freepik.com/free-vector/stack-colorful-books_1308-171744.jpg?semt=ais_hybrid&w=740&q=80" alt="logo" />
          <p className="text-2xl font-bold">BOOKSTORE</p>
        </div>
        {/* logout */}
        <button onClick={logout} className='bg-black px-3 py-2 rounded border text-white flex items-center hover:bg-white hover:text-black border-black'> <FaPowerOff className='me-2'/>LOGOUT</button>
      </div>
      {/* header lower part */}
      <div className="bg-black p-2">
        <marquee><p className="text-white">Welcome, Admin! You're all set to manage and monitor the system. Let's get into work!</p></marquee>
      </div>
    </>
  )
}

export default AdminHeader