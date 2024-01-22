import React from 'react'
import useAxios from './useAxios'
import { useDispatch } from 'react-redux'
import { fetchFail, fetchStart } from '../features/blogSlice'
import { toastErrorNotify, toastSuccessNotify } from '../helper/ToastNotify'
import {getBlogSuccess} from "../features/blogSlice"

const useBlogCalls = () => {
  const {axiosWithToken} = useAxios()
  const dispatch = useDispatch()
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
  return {getBlogs}
}

export default useBlogCalls