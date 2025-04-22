import { createSlice } from '@reduxjs/toolkit';

const managerSlice = createSlice(
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
                  state.Myprofile = action.payload;
                 
           },
        

        }

    }
)
export const {getProfile} = managerSlice.actions;
export const mgrProfileReducer = managerSlice.reducer;