import React, { useEffect } from 'react'
import useBlogCalls from '../hooks/useBlogCalls'
import { useSelector } from 'react-redux'
import BlogCard from '../components/blog/BlogCard'
import MyBlogCard from '../components/blog/MyBlogCard'

const MyBlogs = () => {
  const {getUserBlogs} = useBlogCalls() 
  useEffect(()=>{
    getUserBlogs()
  },[])
  return (
    <>
    <MyBlogCard />
    </>
  )
}

export default MyBlogs