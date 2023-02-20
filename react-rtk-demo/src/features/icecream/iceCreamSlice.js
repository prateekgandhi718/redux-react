import { createSlice } from '@reduxjs/toolkit'

import { ordered as cakeOrdered } from '../cake/cakeSlice'


const initialState = {
    numOfIceCream: 20,
}

const iceCreamSlice = createSlice({
    name: 'icecream',
    initialState: initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCream--
        },
        restocked: (state, action) => {
            state.numOfIceCream += action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIceCream--
        })
    }
})

export default iceCreamSlice.reducer
export const { ordered, restocked } = iceCreamSlice.actions

//NOTES: why 'cake/ordered'? because when you see the log, it says type cake/ordered whenever cakeActions.order() was called. so the type follows: name/reducerobjectkey
