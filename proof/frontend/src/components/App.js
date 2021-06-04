import React, { Component } from "react";
import Header from "./Header";
import Home from "./Home";
import Program from "./Program";
import Footer from "./Footer";
import Resources from "../pages/Resources";

import { getPrograms, getVideos } from "../api";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Modules from "../pages/Modules";

export default class App extends Component {
  state = {
    programs: [],
    user: {}
  };
  async componentDidMount() {
    const programs = await getPrograms();
    const { user } = window.django;
    this.setState({ user, programs });
  }
  render() {
    return (
      <Router>
        <Header user={this.state.user} programs={this.state.programs} />
        <Switch>
          <Route path="/modules">
            <Modules programs={this.state.programs} />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/program/:program_id" component={Program} />
          <Route path="/">
            <Home programs={this.state.programs} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}
