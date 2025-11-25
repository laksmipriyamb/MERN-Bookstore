import React, { useState } from 'react'
import { FaBars, FaFacebook, FaInstagram,  FaUser } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


function Header() {
  const [listStatus,setListStatus] = useState(false)

  const menuBtnClick =()=>{
    setListStatus(!listStatus)
  }
  return (
    <>
    {/* upper part-title&login */}
    <div className="grid grid-cols-3 p-3">
      {/* logo with title */}
      <div className="flex items-center">
        <img width={'50px'} height={'50px'} src="https://img.freepik.com/free-vector/stack-colorful-books_1308-171744.jpg?semt=ais_hybrid&w=740&q=80" alt="logo" />
        <h1 className="text-2xl font-bold ms-2 md:hidden">BOOKSTORE</h1>
      </div>
      {/* title */}
      <div className="md:flex justify-center items-center hidden">
          <h1 className="text-3xl font-bold">BOOK STORE</h1>
      </div>
      {/* login */}
      <div className="md:flex justify-end items-center hidden">
        <FaFacebook/><FaInstagram className='mx-2'/><FaXTwitter className='me-2'/>
        <Link to={'/login'} className='px-2 py-1 border rounded hover:bg-black hover:text-white flex items-center'> <FaUser className='pe-2 text-xl'/> Login</Link>
      </div>
    </div>

    {/* header lower part links &menu +login button */}
    <nav className='w-full p-2 bg-black text-white md:flex justify-center items-center'>
      {/* div -menu bar &login button in mobile screen */}
      <div className="flex justify-between items-center md:hidden text-xl">
        {/*menu bar btn  */}
        <button onClick={menuBtnClick}><FaBars/></button>
        {/* login link */}
        <Link to={'/login'} className='ms-4 border rounded px-2 py-1 hover:bg-white hover:text-black flex items-center'><FaUser/>Login</Link>
      </div>
      {/* ul -links */}
      <ul className={listStatus?"flex flex-col":"md:flex justify-cente items-center hidden"}>
        <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/'}>HOME</Link></li>
        <li className='md:mx-4 my-3 md:my-0'><Link to={'/books'}>BOOKS</Link></li>
        <li className='md:mx-4 mb-3 md:mb-0'><Link to={'/contact'}>CONTACT</Link></li>
      </ul>
    </nav>
    
    
    </>
  )
}

export default Header