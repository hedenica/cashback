import signInRoutes from '../SignIn/routes'
import signUpRoutes from '../SignUp/routes'
import dashboardRoutes from '../Dashboard/routes'

export default [
  ...signInRoutes,
  ...signUpRoutes,
  ...dashboardRoutes,
]