import { lazy } from 'react'

export default [
  {
    path: '/area-do-usuario',
    component: lazy(() => import('./Dashboard')),
    name: 'dashboard'
  }
]