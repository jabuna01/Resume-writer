import { createSlice } from "@reduxjs/toolkit";

export const resumeDataReducer = createSlice({
  name: "resumeData",
  initialState: {
    personal_information: {
      name: null,
      title: null,
      email: null,
      github: null,
      linkedin: null,
    },
    personal_statement: {
      description: null,
    },
    project_experience: [],
    education: [],
    work_experience: [],
    skills: [],
    certifications: [],
    trainings: [],
  },
  reducers: {
    updatePersonalInfo: (state, action) => {
      state.response = action.payload;
    },
  },
});

export const { setResumeData } = resumeDataReducer.actions;
export default resumeDataReducer.reducer;
