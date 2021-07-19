import React from "react";
import { Box } from "@chakra-ui/react";
import routes from "./routes";
import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {     
  return (
    <Box fontFamily="Poppins">
      <Switch>
        {routes.map((route) => (
          <Route
            exact={route.exact}
            component={route.component}
            path={route.path}
          />
        ))}
      </Switch>
    </Box>
  );
}

export default App;
