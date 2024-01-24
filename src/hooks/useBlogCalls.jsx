import React from 'react'
import useAxios from './useAxios'
import { useDispatch } from 'react-redux'
import { fetchFail, fetchStart, getBlogDetailSuccess, postCommentSuccess } from '../features/blogSlice'
import { toastErrorNotify, toastSuccessNotify } from '../helper/ToastNotify'
import {getBlogSuccess} from "../features/blogSlice"
import { useParams } from 'react-router-dom'

const useBlogCalls = () => {
  const {axiosWithToken,axiosPublic} = useAxios()
  const dispatch = useDispatch()
  const {id} = useParams()
  const getBlogs = async ()=>{
    dispatch(fetchStart())
    try {
      const {data} = await axiosWithToken(`/blogs/?page=1&limit=25`)
      dispatch(getBlogSuccess(data))
      toastSuccessNotify("Blogs are successfully fetched")
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
  return {getBlogs,getBlogDetails,postComment}
}

export default useBlogCalls