import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type PopularityType = 'hit' | 'new' | 'def'
export type FilterType = 'burger'
export type GoodType = {
    id: string,
    name: string,
    popularity: PopularityType,
    image: string,
    price: number,
    type: string,
    delivery: boolean,
}

type InitialStateType = {
    filter: string,
    deliveryFilter: boolean,
    goods: Array<GoodType>,
    status: string,
    basketPrice: number,
}

const testSlice = createSlice({
    name: 'shop-action',
    initialState: {
        filter: 'burger',
        deliveryFilter: false,
        goods: [
            {
                id: '1',
                name: 'Burger',
                type: 'burger',
                price: 144,
                popularity: 'new',
                delivery: true,
                image: 'https://i.ibb.co/qyfx5wv/burger.png',
            },
            {
                id: '2',
                name: 'Burger',
                type: 'burger',
                price: 144,
                popularity: 'hit',
                delivery: false,
                image: 'https://i.ibb.co/qyfx5wv/burger.png',
            },
            {
                id: '3',
                name: 'Burger',
                type: 'burger',
                price: 144,
                popularity: 'def',
                delivery: false,
                image: 'https://i.ibb.co/qyfx5wv/burger.png',
            },
            {
                id: '4',
                name: 'Burger',
                type: 'burger',
                price: 144,
                popularity: 'def',
                delivery: true,
                image: 'https://i.ibb.co/qyfx5wv/burger.png',
            },
            {
                id: '5',
                name: 'Burger',
                type: 'burger',
                price: 144,
                popularity: 'def',
                delivery: true,
                image: 'https://i.ibb.co/qyfx5wv/burger.png',
            },
            {
                id: '6',
                name: 'Burger',
                type: 'burger',
                price: 144,
                popularity: 'hit',
                delivery: false,
                image: 'https://i.ibb.co/qyfx5wv/burger.png',
            },
            {
                id: '7',
                name: 'Burger',
                type: 'burger',
                price: 144,
                popularity: 'def',
                delivery: true,
                image: 'https://i.ibb.co/qyfx5wv/burger.png',
            },

            {
                id: '8',
                name: 'Twister',
                type: 'twister',
                price: 144,
                popularity: 'hit',
                delivery: true,
                image: 'https://i.ibb.co/jzgC8fZ/twister.png',
            },
            {
                id: '9',
                name: 'Twister',
                type: 'twister',
                price: 144,
                popularity: 'hit',
                delivery: false,
                image: 'https://i.ibb.co/jzgC8fZ/twister.png',
            },
            {
                id: '10',
                name: 'Twister',
                type: 'twister',
                price: 144,
                popularity: 'hit',
                delivery: true,
                image: 'https://i.ibb.co/jzgC8fZ/twister.png',
            },
            {
                id: '11',
                name: 'Twister',
                type: 'twister',
                price: 144,
                popularity: 'def',
                delivery: true,
                image: 'https://i.ibb.co/jzgC8fZ/twister.png',
            },

            {
                id: '12',
                name: '3 Strips',
                type: 'strips',
                price: 144,
                popularity: 'hit',
                delivery: true,
                image: 'https://i.ibb.co/F7bB8Cn/strips.png',
            },
            {
                id: '13',
                name: '3 Strips',
                type: 'strips',
                price: 144,
                popularity: 'hit',
                delivery: true,
                image: 'https://i.ibb.co/F7bB8Cn/strips.png',
            },
            {
                id: '14',
                name: '3 Strips',
                type: 'strips',
                price: 144,
                popularity: 'def',
                delivery: false,
                image: 'https://i.ibb.co/F7bB8Cn/strips.png',
            },
            {
                id: '15',
                name: '3 Strips',
                type: 'strips',
                price: 144,
                popularity: 'def',
                delivery: true,
                image: 'https://i.ibb.co/F7bB8Cn/strips.png',
            },
        ],
        status: 'App is ready',
        basketPrice: 0,
    } as InitialStateType,
    reducers: {
        changeDeliveryToggle: (state, action: PayloadAction<{ deliveryFilter: boolean }>) => {
            state.deliveryFilter = action.payload.deliveryFilter
        },
    },
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
