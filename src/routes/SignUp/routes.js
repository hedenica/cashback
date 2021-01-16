import { lazy } from 'react'

export default [
  {
    path: '/cadastro',
    component: lazy(() => import('./SignUp')),
    name: 'signUp'
  }
]