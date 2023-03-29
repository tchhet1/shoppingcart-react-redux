import { createSlice } from "@reduxjs/toolkit";
import productData from '../productData.js';

const initialState = {
    cart: [],
    item: productData,
    totalQuantity: 0,
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: 'allCart',
    initialState,
    reducers: {
        addtocart(state, action){

            let find = state.cart.findIndex(item => item.id == action.payload.id);

            if(find !== -1){
                   state.cart[find].qtyData += action.payload.qtyData;
            } else {
                state.cart.push(action.payload);
            }           
        },
        editItem(state, action){

            let find = state.cart.findIndex(item => item.id === action.payload.id);
            console.log(action.payload);
            console.log(find);
            state.cart[find].qtyData = action.payload.qtyData;
        },
        deleteItem(state, action){
            let find = state.cart.findIndex(item => item.id === action.payload.id);
            state.cart.splice([find], 1);
        },
        getCartTotal(state){

        const totalQ = state.cart.reduce((acc, currvalue) => {
                return acc + currvalue.qtyData;
         }, 0)

         const totalP = state.cart.reduce((acc, currvalue) => {
            let itemTotal = currvalue.price * currvalue.qtyData;
            return acc + itemTotal;
     }, 0)


           state.totalQuantity = totalQ;
           state.totalPrice = totalP;
        }

    }
})


export const { addtocart, editItem, deleteItem, getCartTotal } = cartSlice.actions;
export default cartSlice.reducer;