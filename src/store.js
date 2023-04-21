import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./components/reducers/counterSlice";
import personalInfoReducer from "./components/reducers/personalInfo"


export default configureStore({
  reducer:  {
    counter: counterReducer,
    personalInfo: personalInfoReducer
  },
})