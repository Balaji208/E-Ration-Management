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
           {      //  console.log("Profile : ",action);
                  state.Myprofile = action.payload
                  console.log('Profile REdux : ',state.Myprofile)
           },
        

        }

    }
)
export const {getProfile} = profileSlice.actions;
export const profileReducer = profileSlice.reducer;