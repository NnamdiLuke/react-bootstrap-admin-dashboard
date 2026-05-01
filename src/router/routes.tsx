import type { RouteProps } from "react-router-dom";

import Settings from '../pages/settings/page'
import Reports from '../pages/reports/page'
import Product from '../pages/products/page'
import User from '../pages/users/page'
import Dashboard from '../pages/dashboard/page'



export type RoutesProps = {
    path: RouteProps['path']
    name: string
    element: RouteProps['element']
}

const dashboardRoute: RoutesProps[] = [
    {path: '/', name: 'Dashboard',element:<Dashboard/>}
]
const reportsRoute: RoutesProps[] = [
    {path: '/reports', name: 'Reports',element:<Reports/>}
]
const productsRoute: RoutesProps[] = [
    {path: '/products', name: 'Product',element:<Product/>}
]
const usersRoute: RoutesProps[] = [
    {path: '/users', name: 'User',element:<User/>}
]
const settingsRoute: RoutesProps[] = [
    {path: '/settings', name: 'Settings',element:<Settings/>}
]

export const appRoutes = [
    ...dashboardRoute,
    ...reportsRoute,
    ...productsRoute,
    ...usersRoute,
    ...settingsRoute
]