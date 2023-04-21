import { createSlice } from '@reduxjs/toolkit';

export const personalInfo = createSlice({ 
    name: 'personal_info',
    initialState:{
        info:null
    },
    reducers: {
        addInfo: (state, action) => {
            state.info = action.payload
          }
    }
})

export const { addInfo } = personalInfo.actions
export default personalInfo.reducer
