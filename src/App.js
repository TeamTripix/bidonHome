import Login from "./login";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/store";
import RestrictedRoutes from "./RestrictedRoutes";

function App() {
  return (
    <>
      <Provider store={store}>
        <persistGate persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/home">
              <RestrictedRoutes component={Home} />
            </Route>
            <Route exact path="*">
              {JSON.parse(localStorage.getItem("login")) ? (
                <Redirect path="/home" />
              ) : (
                <Redirect path="/" />
              )}
            </Route>
          </Switch>
        </Router>
        </persistGate>
      </Provider>
    </>
  );
}

export default App;
