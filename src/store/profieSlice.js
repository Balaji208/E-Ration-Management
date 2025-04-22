import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice(
    {
        name:'profile',
        initialState :
        {
            Myprofile:{}
        },

        reducers:
        {
           getProfile(state,action)
           {
                  state.Myprofile = action.payload
                  console.log(state.Myprofile)
           },
        

        }

    }
)
export const {getProfile} = profileSlice.actions;
export const profileReducer = profileSlice.reducer;