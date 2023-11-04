import React from "react";
import {useDispatch} from "react-redux";
import {userLogout} from "../redux/userRedux";

const AdminLogout = ()=>{
  const dispatch = useDispatch();

  const handleAdminLogout = ()=>{
    //déconnexion de l'administrateur côté client
    dispatch(userLogout());
  };
  return (
    <div>
      <button onClick={handleAdminLogout}>SE DECONNECTER</button>
    </div>
  );
};

export default AdminLogout;
