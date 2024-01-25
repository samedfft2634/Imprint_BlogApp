import useBlogCalls from "../hooks/useBlogCalls";
import { useEffect } from "react";
import BlogCard from "../components/blog/BlogCard"
import { useSelector } from "react-redux";



const Dashboard = () => {
  const {getBlogs} = useBlogCalls()
  useEffect(()=>{
    getBlogs()
  },[])
	return (
	 <>
  <BlogCard />
   </>
	);
};

export default Dashboard;
