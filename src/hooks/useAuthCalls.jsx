
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
	fetchFail,
	fetchStart,
	registerSuccess,
} from "../features/authSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "../hooks/useAxios";

const useAuthCalls = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {axiosWithToken, axiosPublic} = useAxios()

  const register = async (userInformations) => {
		dispatch(fetchStart());
		try {
			const {data} = await axiosPublic.post("/users/",userInformations)
			dispatch(registerSuccess(data));
			toastSuccessNotify("Registered success!");
			navigate("/auth/");
		} catch (error) {
			dispatch(fetchFail());
			toastErrorNotify("Registration failed!");
			console.log(error);
		}
	};

  return {register}
}

export default useAuthCalls