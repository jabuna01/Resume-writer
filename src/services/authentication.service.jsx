import { useLocation } from "react-router-dom";

export const setToken = (token) => {
  try {
    localStorage.setItem("Authorization", `Token ${token}`);
  } catch (e) {
    console.log("Local Store error", e);
  }
};

export const clearToken = () => {
  localStorage.removeItem(Authorization);
};
