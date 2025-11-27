import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaLocationDot, FaMailchimp, FaPhoneFlip } from "react-icons/fa6";
import { FaEnvelope, FaEnvelopeOpen, FaEnvelopeOpenText, FaPhone, FaTelegram, FaTelegramPlane } from 'react-icons/fa';

function Contact() {
  return (
    <div>
      <Header />
      <div className='flex items-center flex-col'>
        <h1 className="text-xl font-bold mt-5">Contacts</h1>
        <p className='text-center mt-4'>Have a query about our collection or need help with an order?
          Our team is always ready to provide support and guidance whenever you need it.
          You can reach out to us for book recommendations, stock availability, or purchase-related concerns.
          We value every reader and aim to provide a friendly and satisfying experience.
          If you're facing any issue, big or small, let us know — we’re here to help.
          Your feedback also matters to us, as it helps us improve and serve you better.
          Feel free to contact us anytime, and we’ll get back to you as quickly as possible.</p>
        <div className='md:flex justify-center items-center gap-40 mt-7 mb-4'>
          <div className='flex justify-center items-center'>
            <FaLocationDot style={{ borderRadius: '50%' }} className='text-4xl bg-gray-300 text-black p-2 me-3' />
            <p>123 Main Street,Apt 4B,<br />Anytown,CA 91234</p>
          </div>
          <div className='flex justify-center items-center md:my-0 my-7'>
            <FaPhoneFlip style={{ borderRadius: '50%' }} className='text-4xl bg-gray-300 text-black p-2 me-3' />
            <p>+91 8937527923</p>
          </div>
          <div className='flex justify-center items-center'>
            <FaEnvelopeOpenText style={{ borderRadius: '50%' }} className='text-4xl bg-gray-300 text-black p-2 me-3' />
            <p>BookStore@gmail.com</p>
          </div>
        </div>
        {/* map and form */}
        <div className="flex flex-col w-full mx-5  mb-7 md:grid md:grid-cols-2 md:gap-3 items-center">
          <div className="flex flex-col  items-center" >
            {/* form */}
            <div className='px-6 py-8 rounded' style={{ backgroundColor: ' #D9D9D9' }}>
              <h3 className="text-2xl text-black my-3 text-center">send me message</h3>
              <form className='flex flex-col gap-3 '>
                <input type="text" placeholder="username" className='w-100 ps-3 border bg-white rounded py-1 border-white ' />
                <input type="text" placeholder="Email-id" className='w-100 ps-3  border bg-white rounded py-1 border-white' />
                <input type="text" placeholder="message" className='w-100  ps-3 border bg-white rounded pb-23 border-white' />
                <button className='flex items-center justify-center text-white rounded  my-3 py-2 gap-1' style={{ backgroundColor: '#1E2939' }}>send Message <FaTelegramPlane className='text-white' style={{ backgroundColor: '#1E2939' }} /></button>
              </form>
            </div>
          </div>
          {/* map */}
          <div className="flex items-center my-3 mx-2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d31432.60385013562!2d76.34944000000002!3d10.010624000000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3b080ffce877d5ef%3A0x8bef6870ad11b98!2sGround%20Floor%2C%20K7%20REALTY%2C%20Seaport%20-%20Airport%20Rd%2C%20Echamuku%2C%20Kunnumpuram%2C%20Thrikkakara%2C%20Infopark%2C%20Kochi%2C%20Kakkanad%2C%20Kerala%20682030!3m2!1d10.0181644!2d76.3426715!5e0!3m2!1sen!2sin!4v1764228808865!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact