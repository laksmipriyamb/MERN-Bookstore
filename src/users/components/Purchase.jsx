import React, { useEffect, useState } from 'react'
import { getAllUserBoughtBooksAPI } from '../../services/allAPI';

function Purchase() {

    const [userBoughtBooks, setUserBoughtBooks] = useState([])

    console.log(userBoughtBooks);

    useEffect(() => {
        getUserBoughtBooks()
    }, [])



    const getUserBoughtBooks = async () => {
        const token = sessionStorage.getItem("token")
        if (token) {
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }
            const result = await getAllUserBoughtBooksAPI(reqHeader)
            if (result.status == 200) {
                setUserBoughtBooks(result.data)
            } else {
                console.log(result);

            }
        }
    }
    return (
        <div className='shadow rounded p-10 my-20 mx-5'>
            {/* book div duplicate */}
            {
                userBoughtBooks?.length > 0 ?
                    userBoughtBooks?.map(book => (
                        <div key={book?._id} className="bg-gray-200 p-5 rounded my-2 shadow">
                            <div className="md:grid grid-cols-[3fr_1fr]">
                                <div>
                                    <h2 className="text-2xl">{book?.title}</h2>
                                    <h3 className="text-xl">{book?.author}</h3>
                                    <h4 className="text-lg text-red-500">$ {book?.discountPrice}</h4>
                                    <p className="text-justify">{book?.abstract}</p>
                                    
                                </div>
                                <div>
                                    <img src="https://rukminim2.flixcart.com/image/480/640/kk76wsw0/book/s/t/a/the-complete-novels-sherlock-holmes-b-original-imafzhubtkywgr5w.jpeg?q=90" alt="book" />
                                </div>
                            </div>
                        </div>
                    ))
                    :
                    <div className='text-center font-bold my-5'>
                        You didn't purchase any books yet!!!
                    </div>
            }
        </div>
    )
}

export default Purchase