import React from "react";
import { AuthData } from "../auth/AuthWrapper";

const Account = () => {
  const { user } = AuthData();
  return (
    <>
      <h1>User: {user.name}</h1>
    </>
  );
};

export default Account;
