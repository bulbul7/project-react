import React from "react";
import routes from '../routes'
import {BrowserRouter as Route,  Switch, Redirect} from "react-router-dom";
const AppContent = () => {
  return(

          <Switch>
              {routes.map((route, idx) => {
                  return (
                      route.component && (
                          <Route
                              key={idx}
                              path={route.path}
                              exact={route.exact}
                              name={route.name}
                              render={(props) => (
                                  <>
                                      <route.component {...props} />
                                  </>
                              )}
                          />
                      )
                  )
              })}
              <Redirect  from="/" to="/dashboard" />
          </Switch>

  );
}
export default React.memo(AppContent)