import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
    items: [],
}
 
export const basketSlice = createSlice({
      name: "basket",
      initialState:initialState,
        reducers: {
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromBasket: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id)
            
            let newBasket = [...state.items];

            if(index >= 0){
                //iten exists in the basket... remove it
                 newBasket.splice(index, 1)
            }
            state.items = newBasket
        },    

    }
 })
export const selectTotal = state => state.basket.items.reduce((total, item) => total + item.price, 0)

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket, caculateTotals} = basketSlice.actions;

