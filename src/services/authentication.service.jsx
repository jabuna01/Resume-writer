import axios from "axios";

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
