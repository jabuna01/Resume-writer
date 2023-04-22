import { createSlice } from '@reduxjs/toolkit';

export const resumeDataReducer = createSlice({
    name: 'resumeData',
    initialState: {
        personal_information: null,
        personal_statement: null,
        project_experience: null,
        education: null,
        work_experience: null,
        skills: null,
        certifications: null,
        trainings: null
    },
    reducers: {
        updatePersonalInfo: (state, action) => {
            state.response = action.payload
        },
    }
})

export const { setResumeData } = resumeDataReducer.actions
export default resumeDataReducer.reducer
