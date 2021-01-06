import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import routes from './routes'

const Routes = () => (
  <Router>
    <Suspense fallback={<div />}>
      <Switch>
        {routes.map((route) => (
          <Route
          // change key
            key={Math.random()}
            path={route.path}
            render={(props) => (
              <route.component
                {...props}
                routes={route.routes}
              />
            )}
          />
        ))}
      </Switch>
    </Suspense>

  </Router>
)


const App = () => (
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
)

export default App
