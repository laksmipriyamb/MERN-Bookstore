import React from 'react'

function Purchase() {
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
                        <img width={'150px'} height={'150px'} src="https://static.vecteezy.com/system/resources/previews/023/629/698/non_2x/web-button-icon-purchase-button-free-png.png" alt="pending" />
                        
                    </div>
                </div>
                <div>
                    <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT_rkQYyZwuyV3rHETlGzcviLIvEXDMPPFa-WOPP6bhhROMianunaRpqOrmRy_aD_x2j92zTAoyIrRAUZ028AengNsT3S2u0_BJ99TuNYE&usqp=CAc" alt="book" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Purchase