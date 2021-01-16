import { lazy } from 'react'

export default [
  {
    path: '/',
    component: lazy(() => import('./SignIn')),
    name: 'home'
  }
]