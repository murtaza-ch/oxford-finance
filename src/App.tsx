import React from "react";
import { useDispatch } from "react-redux";
import { Box } from "@chakra-ui/react";
import firebase from "firebase";
import { FIREBASE_CONFIG } from "./config";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import routes from "./routes";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import { fetchProjectSetting } from "./slices/app";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchProjectSetting());
  }, [dispatch]);
  return (
    <FirebaseAuthProvider firebase={firebase} {...FIREBASE_CONFIG}>
      <Box fontFamily="Poppins">
        <Switch>
          {routes.map((route) => (
            <Route
              exact={route.exact}
              component={route.component}
              path={route.path}
            />
          ))}
          <Redirect to="/screen/0" />
        </Switch>
      </Box>
    </FirebaseAuthProvider>
  );
}

export default App;
