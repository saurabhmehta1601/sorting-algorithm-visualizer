import { configureStore } from '@reduxjs/toolkit'
import sortReducer from "./features/sortSlice"

export const store = configureStore({
    reducer: {
        sort: sortReducer
    },
})
// eslint-disable-next-line no-undef
export type RootState = ReturnType<typeof store.getState>