import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  blogs:[],
  loading:false,
  error:false,
  blogDetails:[]
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
    }
  }
})


export const {fetchStart,fetchFail,getBlogSuccess,getBlogDetailSuccess} = blogSlice.actions;
export default blogSlice.reducer