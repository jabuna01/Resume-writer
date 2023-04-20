import { useLocation } from "react-router-dom";

const setToken = (tokenObj) => {
  try {
    localStorage.setItem(accessToken, tokenObj);
  } catch (e) {
    console.log("Local Store error", e);
  }
};

const clearToken = () => {
  localStorage.removeItem(accessToken);
};

const authenticate = () => {
//   const location = useLocation();

//   const isAuthenticated = () => {};

  return true;
};

export { authenticate };
