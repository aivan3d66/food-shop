import React from 'react'
import { Home } from '../pages/Home/Home'
import Layout from '../components/UI/Layout/Layout'
import Basket from '../pages/Basket/Basket'

export interface IRoute {
    path: string
    component: JSX.Element
}

export enum RouteNames {
    START_PAGE = '/food-shop',
    BASKET_PAGE = '/basket-page',
}

export const routes: IRoute[] = [
    {
        path: RouteNames.START_PAGE,
        component: <Layout><Home /></Layout>,
    },
    {
        path: RouteNames.BASKET_PAGE,
        component: <Layout><Basket /></Layout>,
    },
]
