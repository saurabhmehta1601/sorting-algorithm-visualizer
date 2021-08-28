import { configureStore } from '@reduxjs/toolkit'
import algoReducer  from "./features/algoSlice"

export const store = configureStore({
    reducer: {
        algo: algoReducer
    },
})

//COPIED FROM OFFICIAL DOCS 
//Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
