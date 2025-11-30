import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSidebar'
import Footer from '../../components/Footer'
import { FaPen } from 'react-icons/fa'


function AdminProfile() {
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
                <input type="file" id='uploadImg' hidden />
                <img style={{ width: '150px', height: '150px', borderRadius: '50%' }} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="profile" />
              </label>
              <button className='bg-yellow-400 p-2 text-white rounded mb-5' style={{marginTop:'-20px'}}><FaPen/></button>
              {/* name */}
              <div className=" mb-3 w-full px-5">
                <input type="text" placeholder='Username' className='border bg-white border-gray-200 p-2 rounded w-full' />
              </div>
              {/* password */}
              <div className="mb-3 w-full px-5">
                <input type="password" placeholder='New Password' className='border bg-white border-gray-200 p-2 rounded w-full' />
              </div>
              <div className="mb-3 w-full px-5">
                <input type="password" placeholder='Confirm Password' className='border bg-white border-gray-200 p-2 rounded w-full' />
              </div>
              
              {/* button */}
              <div className="mb-3 flex justify-center px-5 w-full mt-5">
                <button className='px-3 py-2 rounded border bg-red-600 text-white hover:bg-white hover:border-red-600 hover:text-red-600'>RESET</button>
                <button className='px-3 ms-4 py-2 rounded border bg-blue-600 text-white hover:bg-white hover:border-blue-600 hover:text-blue-600'>UPDATE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminProfile