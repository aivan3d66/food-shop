import React from 'react'
import { Home } from '../pages/Home/Home'

export interface IRoute {
    path: string
    component: JSX.Element
}

export enum RouteNames {
    START_PAGE = '/',
}

export const routes: IRoute[] = [
    {
        path: RouteNames.START_PAGE,
        component: <Home />,
    },
]
