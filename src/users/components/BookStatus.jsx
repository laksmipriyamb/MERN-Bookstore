import React from 'react'

function BookStatus() {
  return (
    <div className='shadow rounded p-10 my-20 mx-5'>
        {/* book div duplicate */}
        <div className="bg-gray-200 p-5 rounded">
            <div className="md:grid grid-cols-[3fr_1fr]">
                <div>
                    <h2 className="text-2xl">Title</h2>
                    <h3 className="text-xl">Author</h3>
                    <h4 className="text-lg text-red-500">$ 400</h4>
                    <p className="text-justify">Abstract</p>
                    <div className="flex mt-5">
                        {/* pending */}
                        <img width={'150px'} height={'150px'} src="https://psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="pending" />
                        {/* approved */}
                        <img width={'120px'} height={'50px'} src="https://static.vecteezy.com/system/resources/previews/024/382/871/non_2x/approved-sign-symbol-icon-label-stamp-green-round-design-transparent-background-free-png.png" alt="approved" />
                        {/* sold */}
                        <img width={'120px'} height={'50px'}  src="https://pngimg.com/d/sold_out_PNG9.png" alt="sold" />
                    </div>
                </div>
                <div>
                    <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT_rkQYyZwuyV3rHETlGzcviLIvEXDMPPFa-WOPP6bhhROMianunaRpqOrmRy_aD_x2j92zTAoyIrRAUZ028AengNsT3S2u0_BJ99TuNYE&usqp=CAc" alt="book" />
                    <button className="p-2 bg-red-600 text-white mt-4">DELETE</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookStatus