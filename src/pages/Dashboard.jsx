import useBlogCalls from "../hooks/useBlogCalls";
import { useEffect } from "react";
import BlogCard from "../components/blog/BlogCard"



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
