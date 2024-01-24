import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  blogs:[],
  blogDetails:[],
  loading:false,
  error:false,
}

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers:{
    fetchStart: (state) => {
			state.loading = true;
		},
		fetchFail: (state) => {
			state.loading = false;
			state.error = true;
		},
    getBlogSuccess:(state,{payload}) =>{
      state.loading = false
      state.error= false
      state.blogs = payload.data
    },
    getBlogDetailSuccess:(state,{payload})=>{
      state.loading = false
      state.error = false
      state.blogDetails= payload
    },
    postCommentSuccess:(state,{payload})=>{
      state.loading = false
      state.error = false
      state.comments = payload
    }
  }
})


export const {fetchStart,fetchFail,getBlogSuccess,getBlogDetailSuccess,postCommentSuccess} = blogSlice.actions;
export default blogSlice.reducer