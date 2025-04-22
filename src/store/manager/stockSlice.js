import { createSlice } from '@reduxjs/toolkit';

const stockSlice = createSlice(
    {
        name:'stock',
        initialState :
        {
            stockList : [],
            total : 0,
            status: false,
            
        },

        reducers:
        {
            add(state,action){
                const updatedstockList = state.stockList.concat(action.payload);
                const updatedTotal = state.total + 1
                

                console.log(updatedstockList,updatedTotal)
              
                return {...state,stockList : updatedstockList,total : updatedTotal,status:true};
              
                

            },

            getStock(state, action) {
                return { ...state, stockList: action.payload.stockList, total: action.payload.total };
              },
            
            

        }

    }
)
export const { add,getStock} = stockSlice.actions;
export const stockReducer = stockSlice.reducer;