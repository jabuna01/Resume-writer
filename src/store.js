import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./components/reducers/counterSlice";
import apiResponseReducer from "./components/reducers/apiResponseReducer"


export default configureStore({
  reducer:  {
    counter: counterReducer,
    apiResponse: apiResponseReducer
  },
})