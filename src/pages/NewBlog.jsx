// NewBlog.js
import React from "react";
import BlogForm from "../components/blog/BlogForm";
import useBlogCalls from "../hooks/useBlogCalls";

const NewBlog = () => {
	const { postBlog } = useBlogCalls();
	const handleSubmit = (blogData) => {
		postBlog(blogData);
	};
	const initialValues = {
		categoryId: "65acf23e958b11aa21a2a430", 
		isPublish: false, 
	};
	return (
		<BlogForm initialValues={initialValues} handleSubmit={handleSubmit} />
	);
};

export default NewBlog;
