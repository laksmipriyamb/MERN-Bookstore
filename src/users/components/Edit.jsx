import React, { useState } from 'react'
import { FaEdit, FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

function Edit() {
    const [offcanvasStatus,setOffcanvasStatus] = useState(false)
    return (
        <div>
            <button onClick={()=>setOffcanvasStatus(true)} className='flex items-center text-blue-600 border py-2 px-4 rounded hover:text-white hover:bg-blue-600'>Edit <FaEdit className='ms-3' /></button>
            {/* offcanvas */}
            {
                offcanvasStatus &&
                <div>
                <div className="fixed inset-0 bg-gray-500/75 z-50 w-full h-full">
                </div>
                <div className="bg-white h-full w-90 fixed z-52 top-0 left-0">
                    {/* header */}
                    <div className="bg-black p-3 flex justify-between text-white">
                        <h3 className="text-xl">Update Profile</h3>
                        <button onClick={()=>setOffcanvasStatus(false)}><FaX /></button>
                    </div>
                    {/* body */}
                    <div className="flex justify-center items-center flex-col mt-10 mb-5">
                        {/* image */}
                        <label htmlFor="uploadImg">
                            <input type="file" id='uploadImg' hidden />
                            <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="profile" />
                        </label>
                        <button className='bg-yellow-400 p-2 text-white rounded mb-5' style={{marginTop:'-20px'}}><FaPen/></button>
                        {/* name */}
                        <div className=" mb-3 w-full px-5">
                            <input type="text" placeholder='Username' className='boder border-gray-200 p-2 rounded w-full'/>
                        </div>
                        {/* password */}
                        <div className="mb-3 w-full px-5">
                            <input type="password" placeholder='New Password' className='boder border-gray-200 p-2 rounded w-full'/>
                        </div>
                        <div className="mb-3 w-full px-5">
                            <input type="password" placeholder='Confirm Password' className='boder border-gray-200 p-2 rounded w-full'/>
                        </div>
                        {/* bio */}
                        <div className="mb-3 mb-3 w-full px-5">
                            <textarea type="text" placeholder='Bio' rows={3} className='boder border-gray-200 p-2 rounded w-full'/>
                        </div>
                        {/* button */}
                        <div className="mb-3 flex justify-end px-5 w-full mt-5">
                           <button className='px-3 py-2 rounded border bg-red-600 text-white hover:bg-white hover:border-red-600 hover:text-red-600'>RESET</button>
                           <button className='px-3 ms-4 py-2 rounded border bg-green-600 text-white hover:bg-white hover:border-green-600 hover:text-green-600'>UPDATE</button>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default Edit