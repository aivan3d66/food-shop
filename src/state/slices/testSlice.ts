import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const shopPage = createSlice({
    name: 'shop-action',
    initialState: {
        filter: 'burger',
        deliveryFilter: 'all',
        products: [],
        status: '',
        basketPrice: 0,
        categories: [],
    } as InitialStateType,
    reducers: {
        changeDeliveryToggle: (state, action: PayloadAction<{ deliveryFilter: DeliveryType }>) => {
            state.deliveryFilter = action.payload.deliveryFilter
        },
        getProducts: (state, action: PayloadAction<{ products: Array<GoodType> }>) => {
            state.products = action.payload.products
        },
        getCategories: (state, action: PayloadAction<{ categories: Array<CategoryType> }>) => {
            state.categories = action.payload.categories
        },
        filteredProducts: (state, action: PayloadAction<{ products: Array<GoodType> }>) => {
            state.products = action.payload.products
        },
        setAppError: (state, action: PayloadAction<{ status: string }>) => {
            state.status = action.payload.status
        },
    },
})

export const shopPageReducer = shopPage.reducer
export const shopPageActions = shopPage.actions

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
export type DeliveryType = 'all' | 'true' | 'false'

type InitialStateType = {
    filter: string,
    deliveryFilter: DeliveryType,
    products: Array<GoodType>,
    status: string,
    basketPrice: number,
    categories: Array<CategoryType>
}
