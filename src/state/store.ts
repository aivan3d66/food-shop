import { configureStore } from '@reduxjs/toolkit'
import { shopPageReducer } from './slices/testSlice'

export const store = configureStore({
    reducer: {
        shopPageReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
