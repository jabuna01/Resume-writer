import { createSlice } from '@reduxjs/toolkit';

export const apiResponseReducer = createSlice({
    name: 'apiResponse',
    initialState: {
        response: null
    },
    reducers: {
        setResponse: (state, action) => {
            console.log(action);
            state.response = action.payload
        }
    }
})

export const { setResponse } = apiResponseReducer.actions
export default apiResponseReducer.reducer
