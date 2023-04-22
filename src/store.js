import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./components/reducers/counterSlice";
import apiResponseReducer from "./components/reducers/apiResponseReducer"
import resumeDataReducer from './components/reducers/resume-data.reducer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

export default configureStore({
  reducer: {
    counter: counterReducer,
    apiResponse: apiResponseReducer,
    resumeData: resumeDataReducer
  },
})