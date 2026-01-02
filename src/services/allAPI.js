import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

//register api:called by Auth component when register btn clicked
export const registerAPI = async (userDetails)=>{
    return await commonAPI("POST",`${serverURL}/register`,userDetails)
}

//login api:called by Auth component when login btn clicked
export const loginAPI = async (userDetails)=>{
    return await commonAPI("POST",`${serverURL}/login`,userDetails)
}

//google/sign-in google login api : called by auth when login using google btn clicked 
export const googleLoginAPI = async (userDetails)=>{
    return await commonAPI("POST",`${serverURL}/google/sign-in`,userDetails)
}

///user/book/add - addbook api : called by sellerBook component when add book btn click
export const addBookAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${serverURL}/user/book/add`,reqBody,reqHeader)
}


//homepage books api :called by homecomponent when page loads
export const getHomePageBooksAPI = async ()=>{
    return await commonAPI("GET",`${serverURL}/books/home`,{})
}

///books/all :bookpage api : called by books component when page loads = authorised user
export const getAllBooksPageAPI = async (reqHeader,searchKey)=>{
    return await commonAPI("GET",`${serverURL}/books/all?search=${searchKey}`,{},reqHeader)
}

///user-books/all :bookpage api : called by booksStatus component when page loads = authorised user
export const getAllUserBooksAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/user-books/all`,{},reqHeader)
}

///user-books/bought :get request called by purchase component when it loads
export const getAllUserBoughtBooksAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/user-books/bought`,{},reqHeader)
}

//get book details by id : called by bookDetails component when it loads
export const getBookDetailsByIdAPI = async (reqHeader,id)=>{
    return await commonAPI("GET",`${serverURL}/book/${id}/view`,{},reqHeader)
}

///user/:id/edit : put request by Edit when update button clicked

export const editUserAPI = async (id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${serverURL}/user/${id}/edit`,reqBody,reqHeader)
}

///admin-books/all :admin bookpage api : called by adminResources component when page loads = authorised admin
export const getAllAdminBooksAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/admin-books/all`,{},reqHeader)
}

///admin-users/all :all users api : called by adminResources component when page loads = authorised admin
export const getAllUsersAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/admin-users/all`,{},reqHeader)
}

///books/:id/update :PUT request by admincollection when approve btn clicked
export const updateBookStatusAPI = async (id,reqHeader)=>{
    return await commonAPI("PUT",`${serverURL}/books/${id}/update`,{},reqHeader)
}
///books/:id :DELETE request by Bookstatus component when delete btn clicked
export const removeBookAPI = async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${serverURL}/books/${id}`,{},reqHeader)
}

///books/:id/buy: PUT request by view component whwn buy btn clicked
export const purchaseBookAPI = async (id,reqHeader)=>{
    return await commonAPI("PUT",`${serverURL}/books/${id}/buy`,{},reqHeader)
}