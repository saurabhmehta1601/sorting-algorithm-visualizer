import {createSlice,PayloadAction} from "@reduxjs/toolkit"

type algo = "BubbleSort"

const initialState: algo = 'BubbleSort'

export const algoSlice = createSlice({
    name: "Sorting algorithm",
    initialState,
    reducers: {
        update: (state, action: PayloadAction<algo>) => {
            state = action.payload
        }
    }
})

export const { update } =  algoSlice.actions
export default algoSlice.reducer
