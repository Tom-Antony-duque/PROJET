import {loginFailure, loginStart, loginSuccess, userLogout} from "../redux/userRedux";
import {publicRequest} from "../requestMethods";

export const login = async (dispatch, user, isLoggedIn)=> {
  dispatch(loginStart());
  try{
    if(isLoggedIn) {
      // Si l'utilisateur est déjà connecté, déconnectez-le
      dispatch(userLogout());
    }else{
      const res = await publicRequest.post("/auth/login", user);
      dispatch(loginSuccess(res.data));
    }
  }catch(err) {
    dispatch(loginFailure());
  }
};


export {loginStart,
    loginSuccess,
    loginFailure,
    userLogout};