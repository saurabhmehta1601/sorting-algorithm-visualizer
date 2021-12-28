import { getAlgoByName, getRandomArray } from "../../utils/exports";
import { BubbleSort } from "../../algorithms/exports";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const INITIAL_ARRAY_SIZE = 20;
const MIN_ARRAY_ELEMENT_VALUE = 10;
const MAX_ARRAY_ELEMENT_VALUE = 60;

//Setting BUBBLESORT as initial algorithm

const initialState = {
  isRunning: false,
  currentStepIndex: 0,
  algorithm: "BubbleSort",
  sortingSteps: BubbleSort(
    getRandomArray(
      INITIAL_ARRAY_SIZE,
      MIN_ARRAY_ELEMENT_VALUE,
      MAX_ARRAY_ELEMENT_VALUE
    )
  ),
};

export const sortingSlice = createSlice({
  name: "Sorting",
  initialState,
  reducers: {
    setRunningState: (state, action: PayloadAction<boolean>) => {
      state.isRunning = action.payload;
    },
    increaseCurrentStepIndex: (state) => {
      if (state.currentStepIndex !== state.sortingSteps.length - 1) {
        state.currentStepIndex += 1;
      }
    },
    decreaseCurrentStepIndex: (state) => {
      if (state.currentStepIndex !== 0) {
        state.currentStepIndex -= 1;
      }
    },
    updateAlgo: (state, action: PayloadAction<string>) => {
      state.algorithm = action.payload;
      state.sortingSteps = getAlgoByName(state.algorithm)(
        state.sortingSteps[0].arrayState
      );
    },
    updateBarsCount: (state, action: PayloadAction<number>) => {
      state.sortingSteps = getAlgoByName(state.algorithm)(
        getRandomArray(
          action.payload,
          MIN_ARRAY_ELEMENT_VALUE,
          MAX_ARRAY_ELEMENT_VALUE
        )
      );
      state.currentStepIndex = 0;
    },
    restartSort: (state) => {
      state.currentStepIndex = 0;
    },
    regenerateBars: (state) => {
      state.currentStepIndex = 0;
      state.sortingSteps = getAlgoByName(state.algorithm)(
        getRandomArray(
          state.sortingSteps[0].arrayState.length,
          MIN_ARRAY_ELEMENT_VALUE,
          MAX_ARRAY_ELEMENT_VALUE
        )
      );
    },
  },
});

export const {
  setRunningState,
  increaseCurrentStepIndex,
  updateAlgo,
  decreaseCurrentStepIndex,
  updateBarsCount,
  restartSort,
  regenerateBars,
} = sortingSlice.actions;
export default sortingSlice.reducer;
