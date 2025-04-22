import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice(
    {
        name:'cart',
        initialState :
        {
            cartList : [],
            total : 0,
            status: false,
            isAuthenticated : false,
            deliveryInfo : {},
        },

        reducers:
        {
            add(state,action){
                const updatedCartList = state.cartList.concat(action.payload);
                const updatedTotal = state.total + ( action.payload.quantity*action.payload.Price)
               // console.log('hi',action.payload.Price)
              
                return {...state,cartList : updatedCartList,total : updatedTotal,status:true};
              
                

            },
            remove(state,action)
            { 
              
                const updatedCartList = state.cartList.filter((item) =>item.Item_id !== action.payload.Item_id);
                const updatedTotal = state.total - ( action.payload.quantity*action.payload.Price)
                console.log('remove',updatedCartList);
                return {...state,cartList : updatedCartList,total : updatedTotal,status:true};

            },
            change_status(state)
            {
                state.status = false;
                console.log('sts :',state.status)
            },
            loggedIn(state)
            {
                state.isAuthenticated = true;

            },
            loggedOut(state)
            {
                state.isAuthenticated = false

            },
            DeliveryInfo(state,action)
            {
                state.deliveryInfo = action.payload
            },
            OrderSuccess(state)
            {

            }
        

        }

    }
)
export const { add,remove ,change_status,loggedIn,loggedOut,DeliveryInfo} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;