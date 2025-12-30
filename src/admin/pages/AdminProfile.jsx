import React, { useState, useEffect } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSidebar'
import Footer from '../../components/Footer'
import { FaPen } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import serverURL from '../../services/serverURL'
import { editUserAPI } from '../../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';



function AdminProfile() {

  const [userDetails, setUserDetails] = useState({
    id: "", username: "", password: "", role: "", bio: "", picture: ""
  })
  const [confirmPassword, setConfirmPassword] = useState("")
  const [existingPicture, setExistingPicture] = useState("")
  const [preview, setPreview] = useState('')
  const [passwordMatch, setPasswordMatch] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUserDetails({ ...userDetails, id: user._id, username: user.username, role: user.role, bio: user.bio })
      setExistingPicture(user.picture)
    }
  }, [])

  const handleUploadPicture = (imgFile) => {
    setUserDetails({ ...userDetails, picture: imgFile })
    const url = URL.createObjectURL(imgFile)
    setPreview(url)
  }

  const checkPasswordMatch = (data) => {
        setConfirmPassword(data)
        userDetails.password == data ? setPasswordMatch(true) : setPasswordMatch(false)
    }

    const resetForm = () => {
        const user = JSON.parse(sessionStorage.getItem("user"))
        setUserDetails({ ...userDetails, id: user._id, username: user.username, role: user.role, bio: user.bio, password: "" })
        setExistingPicture(user.picture)
        setPreview("")
        setConfirmPassword("")
        setPasswordMatch(true)
    }

    const handleProfileUpdate = async () => {
            const { username, password, bio, role, id, picture } = userDetails
            if (!username || !password || !confirmPassword) {
                toast.info("Please fill the form completely!!!")
            } else {
                const token = sessionStorage.getItem("token")
                if (token) {
                    const reqHeader = {
                        'Authorization': `Bearer ${token}`
                    }
                    const reqBody = new FormData()
                    for(let key in userDetails){
                        if(key != "picture"){
                            reqBody.append(key,userDetails[key])
                        }else{
                            preview?reqBody.append("picture",userDetails.picture):reqBody.append("picture",existingPicture)
                        }
                    }
                    const result = await editUserAPI(id,reqBody,reqHeader)
                    if(result.status==200){
                        toast.success("Profile updated successfully...Please login with new password!!!")
                        setTimeout(()=>{
                            navigate('/login')
                        },2000)
                    }else{
                        console.log(result);
                        toast.error("Something went wrong!!!")
                    }
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
          <h1 className="text-center my-5 font-bold text-3xl">Settings</h1>
          <div className="md:grid grid-cols-2 gap-10 items-center mt-10">
            {/* text */}
            <div>
              <h2 className="text-xl font-bold mb-5">Welcome to the Admin Settings Panel.</h2>
              <p className="text-justify">
                The Admin Settings page of the Book Store Management System provides a centralized interface where the admin can manage all store configurations. It includes options to update store information such as the store name, tagline, contact details, address, and logo. The admin can edit their profile by changing their name, username, email, password, and profile photo. User management tools allow viewing registered users, assigning roles like Admin, Staff, or Customer, and blocking or adding staff accounts. Inventory settings help configure default category views, set low-stock alerts, enable automatic showcasing of new arrivals, and import or export book data. Payment and billing settings include enabling payment modes, updating GST details, setting invoice prefixes, and enabling automatic invoice emails. Delivery settings let the admin manage delivery charges, free-delivery thresholds, serviceable areas, and delivery partners. Appearance controls allow changing the theme color, dashboard mode, home banner, and featured categories. Notification options offer email alerts for low stock, new orders, and daily sales summaries. Security and backup settings include database backups, two-factor authentication, session timeouts, and IP whitelisting. Finally, system controls allow clearing cache, resetting dashboard widgets, enabling maintenance mode, and checking the system version—all ensuring smooth and efficient bookstore administration.
              </p>
            </div>
            {/* form */}
            <div className="flex justify-center items-center flex-col bg-blue-100 p-5 rounded">
              {/* image */}
              <label htmlFor="uploadImg">
                <input onChange={e => handleUploadPicture(e.target.files[0])} type="file" id='uploadImg' hidden />
                {
                  existingPicture ?
                    <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} src={preview ? preview : existingPicture.startsWith("https://lh3.googleusercontent.com/") ? existingPicture : `${serverURL}/uploads/${existingPicture}`} alt="profile" />
                    :
                    <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} src={preview ? preview : "https://static.vecteezy.com/system/resources/previews/020/213/738/non_2x/add-profile-picture-icon-upload-photo-of-social-media-user-vector.jpg"} alt="profile" />
                }

              </label>
             
              {/* name */}
              <div className="mt-4 mb-3 w-full px-5">
                <input value={userDetails.username} onChange={e => setUserDetails({ ...userDetails, username: e.target.value })} type="text" placeholder='Username' className='border border-gray-800 p-2 rounded w-full' />
              </div>
              {/* password */}
              <div className="mb-3 w-full px-5">
                <input value={userDetails.password} onChange={e => setUserDetails({ ...userDetails, password: e.target.value })} type="password" placeholder='New Password' className='border border-gray-800 p-2 rounded w-full' />
              </div>
              <div className="mb-3 w-full px-5">
                <input value={confirmPassword} onChange={e => checkPasswordMatch(e.target.value)} type="password" placeholder='Confirm Password' className='border border-gray-800 p-2 rounded w-full' />
              </div>
              {
                !passwordMatch && <div className="mb-3 w-full px-5 text-red-600 text-xs">
                  *Confirm password must match with new password
                </div>
              }

              {/* button */}
              <div className="mb-3 flex justify-center px-5 w-full mt-5">
                <button onClick={resetForm} className='px-3 py-2 rounded border bg-red-600 text-white hover:bg-white hover:border-red-600 hover:text-red-600'>RESET</button>
                <button onClick={handleProfileUpdate} className='px-3 ms-4 py-2 rounded border bg-blue-600 text-white hover:bg-white hover:border-blue-600 hover:text-blue-600' disabled={!passwordMatch ? true : false}>UPDATE</button>
              </div>
            </div>
          </div>
        </div>
         {/* toast */}
                    <ToastContainer position="top-center" autoClose={2000} theme="colored" />
      </div>
      <Footer />
    </>
  )
}

export default AdminProfile