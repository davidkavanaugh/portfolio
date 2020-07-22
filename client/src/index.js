import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";
import Routes from './Routes'
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/auth.actions";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./";
  }
}

const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: 'Bungee Inline, cursive',
      fontSize: '4em'
    },
    h3: {
      fontFamily: 'Pacifico, cursive',
      fontSize: '4em'
    },
    h4: {
      fontFamily: 'Roboto, arial',
      fontSize: '3em'
    }
  },
  palette: {
    primary: {
      main: "#5680e9",
    },
    secondary: {
      main: "#8860d0"
    }
  }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.Fragment>
        <Provider store={store}>
          <Router>
              <Switch>
                <Route exact path="/" component={App} />
                <Route component={Routes} />
              </Switch>
          </Router>
        </Provider>
    </React.Fragment>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
