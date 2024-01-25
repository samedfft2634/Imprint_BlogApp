import useAxios from './useAxios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFail, fetchStart, getBlogDetailSuccess, getCategorySuccess, getUserBlogSuccess, postCommentSuccess } from '../features/blogSlice'
import { toastErrorNotify, toastSuccessNotify } from '../helper/ToastNotify'
import {getBlogSuccess} from "../features/blogSlice"
import { useParams } from 'react-router-dom'

const useBlogCalls = () => {
  const {axiosWithToken,axiosPublic} = useAxios()
  const dispatch = useDispatch()
  const {id} = useParams()
  const {user:{_id}} = useSelector(state=>state.auth)
  console.log(_id)
  const getBlogs = async ()=>{
    dispatch(fetchStart())
    try {
      const {data} = await axiosWithToken(`/blogs/?page=1&limit=25`)
      dispatch(getBlogSuccess(data))
      // toastSuccessNotify("Blogs are successfully fetched")
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify("Blogs can not be fetched!")
      console.log(error)
    }
  }
  const getBlogDetails = async ()=>{
    dispatch(fetchStart())
    try {
      const {data} = await axiosPublic(`/blogs/${id}`)
      dispatch(getBlogDetailSuccess(data.data))
      // toastSuccessNotify("Details are successfully fetched")
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify("There is an error to show Details !")
      console.log(error)
    }
  }
  const postComment = async (comment) =>{
    dispatch(fetchStart())
    try {
      const {data} = await axiosWithToken.post("/comments/",comment)
      dispatch(postCommentSuccess(data))
      toastSuccessNotify("Comment sent successfully!")
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify("Failed to post comment!")
      console.log(error)
    }
  }
  const postBlog = async (userInfo) =>{
    dispatch(fetchStart())
    try {
      await axiosWithToken.post("/blogs/",userInfo)
      toastSuccessNotify("New blog added!")
      getBlogs()
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify("Failed to post new blog!")
      console.log(error)
    }
  }
  const getCategories = async () =>{
    dispatch(fetchStart())
    try {
      const {data} = await axiosWithToken("/categories/")
      dispatch(getCategorySuccess(data))
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify("Failed to show categories!")
      console.log(error)
    }
  }
  const getUserBlogs = async ()=>{
    dispatch(fetchStart())
    try {
      const {data} = await axiosPublic(`/blogs?author=${_id}`)
      dispatch(getUserBlogSuccess(data.data))
      // toastSuccessNotify("User blogs successfully fetched!")
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify("There is an error to show user blogs !")
      console.log(error)
    }
  }
  return {getCategories,getBlogs,getBlogDetails,postComment,postBlog,getUserBlogs}
}

export default useBlogCalls