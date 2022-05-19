import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export type PopularityType = 'hit' | 'new' | 'def'
export type FilterType = 'burger'

export type GoodType = {
    name: string,
    popularity: PopularityType,
    image: string,
    price: number,
    type: string,
}

const testSlice = createSlice({
    name: 'signIn',
    initialState: {
        filter: 'burger',
        goods: [
            {name: 'Burger', type: 'burger', price: 144, popularity: 'new', image: 'https://i.ibb.co/qyfx5wv/burger.png'},
            {name: 'Burger', type: 'burger', price: 144, popularity: 'hit', image: 'https://i.ibb.co/qyfx5wv/burger.png'},
            {name: 'Burger', type: 'burger', price: 144, popularity: 'def', image: 'https://i.ibb.co/qyfx5wv/burger.png'},
            {name: 'Burger', type: 'burger', price: 144, popularity: 'def', image: 'https://i.ibb.co/qyfx5wv/burger.png'},
            {name: 'Burger', type: 'burger', price: 144, popularity: 'def', image: 'https://i.ibb.co/qyfx5wv/burger.png'},
            {name: 'Burger', type: 'burger', price: 144, popularity: 'hit', image: 'https://i.ibb.co/qyfx5wv/burger.png'},
            {name: 'Burger', type: 'burger', price: 144, popularity: 'def', image: 'https://i.ibb.co/qyfx5wv/burger.png'},

            {name: 'Twister', type: 'twister', price: 144, popularity: 'hit', image: 'https://i.ibb.co/jzgC8fZ/twister.png'},
            {name: 'Twister', type: 'twister', price: 144, popularity: 'hit', image: 'https://i.ibb.co/jzgC8fZ/twister.png'},
            {name: 'Twister', type: 'twister', price: 144, popularity: 'hit', image: 'https://i.ibb.co/jzgC8fZ/twister.png'},
            {name: 'Twister', type: 'twister', price: 144, popularity: 'def', image: 'https://i.ibb.co/jzgC8fZ/twister.png'},

            {name: '3 Strips', type: 'strips', price: 144, popularity: 'hit', image: 'https://i.ibb.co/F7bB8Cn/strips.png'},
            {name: '3 Strips', type: 'strips', price: 144, popularity: 'hit', image: 'https://i.ibb.co/F7bB8Cn/strips.png'},
            {name: '3 Strips', type: 'strips', price: 144, popularity: 'def', image: 'https://i.ibb.co/F7bB8Cn/strips.png'},
            {name: '3 Strips', type: 'strips', price: 144, popularity: 'def', image: 'https://i.ibb.co/F7bB8Cn/strips.png'},
        ] as Array<GoodType>,
        status: 'App is ready',
        basketPrice: 0,
    },
    reducers: {},
    extraReducers: {},
})

export const testReducer = testSlice.reducer
export const testActions = testSlice.actions


// export const sendSignInRequest = createAsyncThunk(
//     'signIn/send',
//     async (payload: SignInArgs) => {
//         return await UserAPI.signIn({
//             email: payload.email,
//             password: payload.password,
//             rememberMe: payload.rememberMe,
//         })
//     }
// )
//
// const signInSlice = createSlice({
//     name: 'signIn',
//     initialState: {
//         email: '',
//         password: '',
//         rememberMe: true,
//         errorEmail: false,
//         isLoading: false,
//         error: false,
//     },
//     reducers: {
//         setEmail: (state, action: PayloadAction<{ email: string }>) => {
//             state.error = false
//             state.errorEmail = false
//             state.email = action.payload.email
//         },
//         setPassword: (state, action: PayloadAction<{ password: string }>) => {
//             state.error = false
//             state.errorEmail = false
//             state.password = action.payload.password
//         },
//         setRememberMe: (
//             state,
//             action: PayloadAction<{ rememberMe: boolean }>
//         ) => {
//             state.error = false
//             state.errorEmail = false
//             state.rememberMe = action.payload.rememberMe
//         },
//         setError: (state, action: PayloadAction<{ value: boolean }>) => {
//             state.error = action.payload.value
//         },
//         setErrorEmail: (state, action: PayloadAction<{ value: boolean }>) => {
//             state.errorEmail = action.payload.value
//         },
//         setIsLoading: (state, action: PayloadAction<{ value: boolean }>) => {
//             state.isLoading = action.payload.value
//         },
//     },
// })
//
// export const signInReducer = signInSlice.reducer
// export const signInActions = signInSlice.actions
// export const signInThunks = { sendSignInRequest }
//
// export const selectSignIn = (state: RootState) => state.signIn
