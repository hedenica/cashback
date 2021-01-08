import { lazy } from 'react'

export default [
  {
    path: '/cadastro',
    component: lazy(() => import('./views/SignUp')),
    name: 'signUp'
  }
]