import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import routes from "./routes";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
});

class App extends Component {
  render() {
    const displayComponents = routes.map(route => (
      <Route
        exact={route.exact}
        path={route.path}
        component={route.component}
        key={route.path}
      />
    ));

    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Router>
            <Switch>{displayComponents}</Switch>
          </Router>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
