import { createSlice } from '@reduxjs/toolkit';

export const apiResponseReducer = createSlice({
    name: 'apiResponse',
    initialState: {
        response: null,
        resumeId: null,
        psRecommendation: null
    },
    reducers: {
        setResponse: (state, action) => {
            state.response = action.payload
        },
        setResumeId: (state, action) => {
            state.resumeId = action.payload
        },
        setPsRecommendation: (state, action) => {
            state.psRecommendation = action.payload
        },
        updatePersonalInfo: (state, action) => {
            state.response.personal_information = action.payload
        },
        updatePersonalStatement: (state, action) => {
            state.response.personal_statement = action.payload
        },
        updateProjectsExperience: (state, action) => {
            state.response.project_experience = action.payload
        },
        updateCertifications: (state, action) => {
            state.response.certifications = action.payload
        },
        updateWorkExperience: (state, action) => {
            state.response.work_experience = action.payload
        },
        updateSkills: (state, action) => {
            state.response.skills = action.payload
        },
        updateTrainings: (state, action) => {
            state.response.trainings = action.payload
        },
        updateEducation: (state, action) => {
            state.response.education = action.payload
        }
    }
})

export const { setResponse, setResumeId, setPsRecommendation, updatePersonalInfo, updatePersonalStatement, updateProjectsExperience, updateCertifications, updateWorkExperience, updateSkills, updateTrainings, updateEducation } = apiResponseReducer.actions
export default apiResponseReducer.reducer
