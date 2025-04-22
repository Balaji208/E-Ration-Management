import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart/cartSlice";
import { profileReducer } from "./profieSlice";
import { stockReducer } from "./manager/stockSlice";
import { mgrProfileReducer } from "./manager/managerSlice";
export const store = configureStore(
    {
        reducer : 
        {
            cartState : cartReducer,
            profile : profileReducer,
            stocks : stockReducer,
            mgrProfile: mgrProfileReducer,
        }
    }
);
