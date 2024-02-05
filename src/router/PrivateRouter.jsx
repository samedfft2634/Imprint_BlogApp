
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from "react-router-dom"


const PrivateRouter = () => {
  const {token} = useSelector(state=>state.auth)
  return (token ? <Outlet /> : <Navigate to="/auth"/> )
}

export default PrivateRouter
