import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type PopularityType = 'Hit' | 'New' | 'Def'
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
export type CategoryType = {
    id: string,
    name: string,
    products: Array<string>,
}

type InitialStateType = {
    filter: string,
    deliveryFilter: boolean,
    products: Array<GoodType>,
    status: string,
    basketPrice: number,
    categories: Array<CategoryType>
}

const testSlice = createSlice({
    name: 'shop-action',
    initialState: {
        filter: 'burger',
        deliveryFilter: false,
        products: [],
        status: 'App is ready',
        basketPrice: 0,
        categories: [],
    } as InitialStateType,
    reducers: {
        changeDeliveryToggle: (state, action: PayloadAction<{ deliveryFilter: boolean }>) => {
            state.deliveryFilter = action.payload.deliveryFilter
        },
        getProducts: (state, action: PayloadAction<{ products: Array<GoodType> }>) => {
            state.products = action.payload.products
        },
    },
    // extraReducers: (builder => {
    //     builder.addCase(addTodoListAC, (state, action: PayloadAction<{ products: Array<GoodType> }>) => {
    //         state.products = action.payload.products
    //     })
    // }),
})

export const testReducer = testSlice.reducer
export const testActions = testSlice.actions
