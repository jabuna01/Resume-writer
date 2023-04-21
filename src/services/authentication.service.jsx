import { redirect, useLocation } from "react-router-dom";
import axios from "axios";
import { router } from "../routes/index";

export const setToken = (token) => {
  try {
    localStorage.setItem("Authorization", token);
  } catch (e) {
    console.log("Local Store error", e);
  }
};

export const clearToken = () => {
  localStorage.removeItem(Authorization);
};

export const filterPublicRoutes = (isPublic) => {
  const routes = router.filter((route) => route.public === isPublic);
  return routes;
};

export const authenticate = () => {
  const token = localStorage.getItem("Authorization");
  if (!token || token === "") {
    return false;
  } else {
    return true;
  }
};

export const axiosWithAuth = axios.create({
  headers: {
    Authorization: `Token ${localStorage.getItem("Authorization")}`,
  },
});
