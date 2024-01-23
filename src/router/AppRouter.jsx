
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import MyBlogs from "../pages/MyBlogs";
import Register from "../pages/Register";
import Detail from "../pages/Detail";
import NotFound from "../pages/NotFound";


const AppRouter = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="auth" element={<Login />} />
				<Route path="register" element={<Register />} />
				<Route path="about" element={<About />} />
				<Route path="new-blog" element={<NewBlog />} />
				<Route path="my-blogs" element={<MyBlogs />} />
				<Route path="profile" element={<Profile />} />
				<Route path="detail/:id" element={<Detail />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default AppRouter;
