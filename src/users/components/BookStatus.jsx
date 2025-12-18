import React from 'react'
import { useState } from 'react'
import { getAllUserBooksAPI } from '../../services/allAPI'
import { useEffect } from 'react';

function BookStatus() {
    const [userBooks, setUserBooks] = useState([])

    console.log(userBooks);

    useEffect(() => {
        getUserUploadBooks()
    }, [])



    const getUserUploadBooks = async () => {
        const token = sessionStorage.getItem("token")
        if (token) {
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }
            const result = await getAllUserBooksAPI(reqHeader)
            if (result.status == 200) {
                setUserBooks(result.data)
            } else {
                console.log(result);

            }
        }
    }

    return (
        <div className='shadow rounded p-10 my-20 mx-5'>
            {/* book div duplicate */}
            {
                userBooks?.length > 0 ?
                    userBooks?.map(book => (
                        <div key={book?._id} className="bg-gray-200 p-5 rounded my-2 shadow">
                            <div className="md:grid grid-cols-[3fr_1fr]">
                                <div>
                                    <h2 className="text-2xl">{book?.title}</h2>
                                    <h3 className="text-xl">{book?.author}</h3>
                                    <h4 className="text-lg text-red-500">$ {book?.discountPrice}</h4>
                                    <p className="text-justify">{book?.abstract}</p>
                                    <div className="flex mt-5">
                                        {/* pending */}
                                        {/* approved */}
                                        {/* sold */}

                                        {
                                            book?.status == "pending" ?
                                            < img width={'150px'} height={'150px'} src="https://psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="pending" />
                                            : book?.status == "approved" ?
                                            <img width={'120px'} height={'50px'} src="https://static.vecteezy.com/system/resources/previews/024/382/871/non_2x/approved-sign-symbol-icon-label-stamp-green-round-design-transparent-background-free-png.png" alt="approved" />
                                            :
                                            <img width={'120px'} height={'50px'} src="https://pngimg.com/d/sold_out_PNG9.png" alt="sold" />

                                        }
                                    </div>
                                </div>
                                <div>
                                    <img src={book?.imageURL} alt="book" />
                                    <button className="p-2 bg-red-600 text-white mt-4">DELETE</button>
                                </div>
                            </div>
                        </div>
                    ))
                    :
                    <div className='text-center font-bold my-5'>
                        Books are not upload yet
                    </div>
            }
        </div>
    )
}

export default BookStatus