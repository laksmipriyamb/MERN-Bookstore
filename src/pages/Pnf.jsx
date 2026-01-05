import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routeGuardContext } from '../contextAPI/GuardContext'
function Pnf() {
  const {role,authorised} = useContext(routeGuardContext)
  const navigate = useNavigate()
  const backHome = ()=>{
    if(authorised){
      role=="user" ? navigate('/') : navigate('/admin/home')
    }else{
      navigate('/')
    }
  }
  return (
    <div style={{height:'100vh'}} className='flex justify-center items-center flex-col'>
      <img src="/pnf.png" alt="pnf" />
      <p>Oh No !</p>
      <h1 className="text-4xl font-bold my-3">Look Like You're Lost</h1>
      <p>The page you are looking for is not available</p>
      <button onClick={backHome} className='px-3 py-2 bg-blue-500 text-white mt-3 rounded font-bold'>BACK HOME</button>
    </div>
  )
}

export default Pnf