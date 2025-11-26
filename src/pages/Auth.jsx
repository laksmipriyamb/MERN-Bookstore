import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Auth({insideRegister}) {
  const [viewPassword,setViewPassword] = useState(false)

  
  return (
    <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[url(/login-bg.png)] bg-cover bg-center'>
      <div className="p-10">
        <h1 className="text-3xl font-bold text-white text-center">BOOK STORE</h1>
        <div style={{width:'400px',backgroundColor:'rgba(0,0,0,0.9'}} className=" text-white p-5 flex flex-col justify-center items-center my-5">
          <div style={{width:'100px',height:'100px',borderRadius:'50%'}} className="border mb-5 flex justify-center items-center">
            <FaUser className='text-3xl'/>
          </div>
          <h2 className="text-2xl">{insideRegister?"Register":"Login"}</h2>
          <form className="my-5 w-full">
            {/* username */}
            {
              insideRegister &&
              <input type="text" placeholder='Username' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded mt-5' />
            }
            {/* email */}
            <input type="text" placeholder='Email ID' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded my-5' />
            {/* password */}
           <div className='flex justify-center items-center'> 
            <input type={viewPassword?"text":"password"} placeholder='Password' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded mb-5 me-6' />
            {
              viewPassword ?
              <FaEyeSlash onClick={()=>setViewPassword(!viewPassword)} className='text-gray-400 me-2 cursor-pointer' style={{marginLeft:'-50px',marginTop:'-20px'}}/>
              :
            <FaEye onClick={()=>setViewPassword(!viewPassword)} className='text-gray-400 me-2 cursor-pointer' style={{marginLeft:'-50px',marginTop:'-20px'}}/>
            }
            </div>
            {/* forgot password */}
            {
              !insideRegister &&
              <div className="flex justify-between mb-5">
                <p className="text-xs text-orange-300">*Never share your password with others</p>
                <button className='text-xs underline'>Forgot Password</button>
              </div>
            }
            {/* login/register btn */}
            <div className='text-center'>
              {
                insideRegister?
                <button className='bg-green-700 p-2 w-full rounded'>Register</button>
                :
                <button className='bg-green-700 p-2 w-full rounded'>Login</button>
              }
            </div>
            {/* already a user  */}
            <div className='text-center'>
              {
                insideRegister?
                <p className="text-blue-600 mt-4">Already a user? <Link to={'/login'} className='underline ms-5'>Login</Link></p>
                :
                <p className="text-blue-600 mt-4">Are you a new user? <Link to={'/register'} className='underline ms-5'>Register</Link></p>
              }
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Auth