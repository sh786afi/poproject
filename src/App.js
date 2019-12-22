import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "./container/Auth/Auth";
import Layout from "./hoc/Layout/Layout";
import Users from "./container/TableConatainer/TableContainer";
import { isUserLogedIn } from "./utils/constant";
class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" component={Auth}></Route>
      </Switch>
    );
    if (isUserLogedIn) {
      routes = (
        <Switch>
          <Route path="/users" component={Users}></Route>
        </Switch>
      );
    }
    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

export default App;
