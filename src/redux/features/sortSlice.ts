import { getRandomArray } from "../../utils/getRandomArray"
import BubbleSort from "../../algorithms/BubbleSort"
import {createSlice,PayloadAction} from "@reduxjs/toolkit"

export const INITIAL_ARRAY_SIZE = 20
const MIN_ARRAY_ELEMENT_VALUE = 10
const MAX_ARRAY_ELEMENT_VALUE = 60

const initialState = {
    isRunning: false,
    currentStepIndex: 0,
    algorithm:'BubbleSort' ,
    sortingSteps: BubbleSort(getRandomArray(INITIAL_ARRAY_SIZE,MIN_ARRAY_ELEMENT_VALUE, MAX_ARRAY_ELEMENT_VALUE)) 
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
        },
        updateBarsCount: (state,action: PayloadAction<number>) => {
            state.sortingSteps = BubbleSort(getRandomArray(action.payload,MIN_ARRAY_ELEMENT_VALUE,MAX_ARRAY_ELEMENT_VALUE)) 
            state.currentStepIndex = 0 
        }
    }
})

export const { setRunningState ,increateCurrentStepIndex,updateAlgo, decreaseCurrentStepIndex,updateBarsCount} =  sortingSlice.actions
export default sortingSlice.reducer

