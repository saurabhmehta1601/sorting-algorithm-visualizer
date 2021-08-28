import { getRandomArray } from "../../utils/getRandomArray"
import BubbleSort from "../../algorithms/BubbleSort"
import {createSlice,PayloadAction} from "@reduxjs/toolkit"

const initialState = {
    isRunning: false,
    currentStepIndex: 0,
    algorithm:'BubbleSort' ,
    sortingSteps: BubbleSort(getRandomArray(10,5,60)) 
} 

export const sortingSlice = createSlice({
    name: "Sorting",
    initialState,
    reducers: {
        setRunningState: (state, action: PayloadAction<boolean>) => {
            state.isRunning = action.payload
        },
        increateCurrentStepIndex: (state) => {
            if(state.currentStepIndex !== state.sortingSteps.length - 1){
               state.currentStepIndex += 1 
            }
        },
        decreaseCurrentStepIndex: (state) => {
            if(state.currentStepIndex !== 0){
               state.currentStepIndex -= 1 
            }
        },
        updateAlgo: (state, action: PayloadAction<string>) => {
            state.algorithm= action.payload
        }
    }
})

export const { setRunningState ,increateCurrentStepIndex,updateAlgo, decreaseCurrentStepIndex} =  sortingSlice.actions
export default sortingSlice.reducer

