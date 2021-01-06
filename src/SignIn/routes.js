import { lazy } from 'react'

export default [
  {
    path: '/',
    component: lazy(() => import('./views/SignIn')),
    nome: 'home'
  }
]