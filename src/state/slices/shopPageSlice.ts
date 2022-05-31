import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const shopPage = createSlice({
    name: 'shop-action',
    initialState: {
        filter: 'burger',
        deliveryFilter: 'all',
        deliveryAddress: {
            street: '',
            house: '',
        },
        products: [],
        basketProducts: [],
        status: '',
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
        addToBasket: (state, action: PayloadAction<{ productId: string }>) => {
            state.basketProducts.push(...state.products.filter(f => f.id === action.payload.productId))
        },
        deleteFromBasket: (state, action: PayloadAction<{ productId: string }>) => {
            state.basketProducts.findIndex(tl => tl.id === action.payload.productId) > -1 && state.basketProducts.splice(state.basketProducts.findIndex(tl => tl.id === action.payload.productId), 1);
        },
        buyProducts: (state, action: PayloadAction<{ products: Array<GoodType> }>) => {
            console.log('You buy: ' + JSON.stringify(state.basketProducts))
            state.basketProducts = action.payload.products
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
    basketProducts: Array<GoodType>,
    status: string,
    categories: Array<CategoryType>
}
