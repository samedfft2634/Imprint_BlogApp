import { useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";
import { useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Dashboard = () => {
	const { blogs,loading,error } = useSelector((state) => state.blog);
  const {getBlogs} = useBlogCalls()
  useEffect(()=>{
    getBlogs()
  },[])
  console.log(blogs)
	return (
	 <>
   {blogs.map(blog=>(
     <Card sx={{ maxWidth: 345,maxHeight:400 }} key={blog._id}>
     <CardMedia
       component="img"
       sx={{ height: 140 }}
       src={blog.image}
       title={blog.title}
     />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
         {blog.title}
       </Typography>
       <Typography variant="body2" color="text.secondary">
         {blog.content}
       </Typography>
     </CardContent>
     <CardActions>
       <Button size="small">Share</Button>
       <Button size="small">Learn More</Button>
     </CardActions>
   </Card>
   ))}
   </>
	);
};

export default Dashboard;
