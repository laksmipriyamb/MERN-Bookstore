import React from 'react'

function SellBook() {
  return (
    <div>
        <div className="p-10 my-20 mx-5 bg-gray-200">
            <h1 className="text-center font-bold text-3xl">Book Details</h1>
            <div className="md:grid grid-cols-2 mt-10 w-full">
                <div className="px-3">
                    <div className="mb-3">
                        <input type="text" placeholder='Title' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Author' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='No .of pages' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Image URL' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Original Price' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Discount Price' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <textarea type="text" rows={5} placeholder='Book Abstract' className="p-2 bg-white w-full rounded" />
                    </div>
                </div>
                <div className="px-3">
                    <div className="mb-3">
                        <input type="text" placeholder='Language' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Publisher' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='ISBN' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Category' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3 flex justify-center items-center mt-10">
                        <label htmlFor="uploadImg">
                            <input type="file" id='uploadImg' hidden />
                            <img width={'200px'} src="https://cdn-icons-png.flaticon.com/512/2270/2270665.png" alt="upload" />
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex justify-end mt-5">
                <button className='bg-gray-400 text-white rounded p-3 me-3 text-bold hover:bg-white hover:text-gray-600'>RESET</button>
                <button className='bg-blue-600 text-white rounded p-2 me-5 text-bold hover:bg-white hover:text-blue-800'>SUBMIT</button>
            </div>
        </div>
    </div>
  )
}

export default SellBook