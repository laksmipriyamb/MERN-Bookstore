import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { getHomePageBooksAPI } from '../../services/allAPI'
import { useEffect } from 'react'
import { searchContext } from '../../contextAPI/ShareContext'

function Home() {
  const navigate = useNavigate()
  //const [searchKey, setSearchKey] = useState("")
  const {searchKey,setSearchKey} = useContext(searchContext)
  const [homeBooks, setHomeBooks] = useState([])

  console.log(homeBooks);

  useEffect(() => {
    getHomeBooks()
  }, [])


  const getHomeBooks = async () => {
    const result = await getHomePageBooksAPI()
    //console.log(result);
    if (result.status == 200) {
      setHomeBooks(result.data)
    } else {
      console.log(result);

    }

  }



  const handleSearch = () => {
    if (!searchKey) {
      toast.warning("Please provide a Book title here")
    } else if (!sessionStorage.getItem("token")) {
      toast.warning("Please login to search a book!!!")
      setTimeout(() => {
        navigate('/login')
      }, 2500)
    } else if (sessionStorage.getItem("token") && searchKey) {
      navigate('/books')
    } else {
      toast.error("Something went wrong!!!")
    }
  }

  return (
    <>
      <Header />
      <div>
        {/* landing part */}
        <div style={{ height: '610px' }} className='flex justify-center items-center flex-col bg-[url(/bg-landing.jpg)] bg-cover bg-center'>
          <div style={{ height: '610px', backgroundColor: 'rgba(0,0,0,0.5)' }} className='w-full flex justify-center items-center flex-col '>
            <h1 className="text-5xl font-bold mb-2 text-white">Wonderful Gifts</h1>
            <p className='text-white'>Gift your family and friends a book</p>
            {/* search */}
            <div className='flex items-center mt-7'>
              <input onChange={e => setSearchKey(e.target.value)} type="text" className="bg-white rounded-3xl text-black w-100 placeholder-gray-500 py-2 ps-4" placeholder='Search Books Here' />
              <button onClick={handleSearch} className='text-gray-500' style={{ marginLeft: '-40px' }}><FaSearch className='text-gray-500' /></button>
            </div>
          </div>

        </div>
        {/* new arrival */}
        <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
          <h1 className="text-3xl font-bold">NEW ARRIVALS</h1>
          <h2 className="text-2xl mt-3">Explore Our Latest Collection</h2>
          {/* books row & col */}
          <div className="md:grid grid-cols-4 w-full mt-10 flex flex-col ">
            {/* duplicate book card div */}

            {

              homeBooks?.length > 0 ?
                homeBooks?.map(book => (
                  <div key={book?._id} className="shadow rounded p-3 mx-4 mb-5 md:mb-0">
                    <img width={'300px'} height={'300px'} src={book?.imageURL} alt="book image" />
                    <div className="flex justify-center items-center flex-col mt-4">
                      <h3 className='text-blue-600 font-bold text-lg'>{book?.author}</h3>
                      <h4 className='text-lg'>{book?.title}</h4>
                      <h4>$ {book?.discountPrice}</h4>
                    </div>
                  </div>
                ))

                :
                <p className='font-bold'>Loading....</p>

            }

          </div>
          <div className='text-center mt-15'>
            <Link to={'/books'} className='p-3 text-white bg-blue-900'>Explore More...</Link>
          </div>
        </section>
        {/* author */}
        <section className='md:grid grid-cols-2 items-center gap-10 md:px-40 p-5 my-5'>
          {/* author content */}
          <div className="text-center">
            <h1 className="text-2xl font-bold">FEATURED AUTHORS</h1>
            <h2 className="text-xl mt-3">Captivates With Every Words</h2>
            <p className="text-justify mt-9">
              Passionate storyteller whose works blend imagination, emotion, and real-life experiences. With a unique voice and vivid narrative style, their books have captured the hearts of readers across genres—from contemporary fiction to thought-provoking non-fiction. Their writing is known for relatable characters, engaging plots, and a thoughtful exploration of human emotions.
            </p>
            <p className="text-justify mt-9">
              Beyond writing, the author enjoys connecting with readers, participating in literary events, and inspiring new writers through workshops and online platforms. Their dedication to crafting meaningful stories continues to shape their creative journey. Whether someone is discovering their books for the first time or following their newest release, each story offers an enriching and unforgettable experience.
            </p>
          </div>
          {/* author image */}
          <div className="p-5 flex justify-center items-center">
            <img width={'400px'} height={'400px'} src="https://headshotphotographer.com.au/wp-content/uploads/2018/08/Mark-Brandi.jpg" alt="author" />
          </div>

        </section>
        {/* testimony */}
        <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
          <h1 className="text-3xl font-bold">TESTIMONIALS</h1>
          <h2 className="text-2xl mt-3">See What Others Are Saying</h2>
          <div className="my-5 flex justify-center items-center flex-col">
            {/* user image */}
            <img width={'200px'} height={'200px'} style={{ borderRadius: '50%' }} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="user" />
            {/* feedback */}
            <h1 className='font-bold mt-5'>Lucas Alexander</h1>
            <h1 className='text-justify mt-4'><span className='font-bold me-2'>"Amazing Collection and Easy Navigation!"</span>“I had a wonderful experience shopping from this bookstore! The collection is wide, well-organized, and includes everything from bestsellers to rare finds. The website is easy to navigate, and the book descriptions are clear and helpful. My order arrived on time and in perfect condition. Highly recommend this store to anyone who loves reading!”</h1>
          </div>

        </section>
      </div>
      <Footer />
      {/* toast */}
      <ToastContainer position="top-center" autoClose={2000} theme="colored" />
    </>
  )
}

export default Home