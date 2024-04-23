import React from "react";
import { Navigate } from "react-router-dom";

const MyPage = () => {
  const isLogin = false;
  //   if (!isLogin) {
  //     return <Navigate to="/login" replace={true}></Navigate>;
  //   }

  return (
    <div>{!isLogin && <Navigate to="/login" replace={true}></Navigate>}</div>
  );
};

export default MyPage;
