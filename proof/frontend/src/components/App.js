import React, { Component } from "react";
import Header from "./Header";
import Home from "./Home";
import Program from "./Program";
import Footer from "./Footer";
import Resources from "../pages/Resources";

import { getPrograms, getCategories, getVideos } from "../api";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Modules from "../pages/Modules";
import Categories from "../pages/Categories";
import ProgramList from "./ProgramList";

export default class App extends Component {
  state = {
    categories: [],
    user: {},
  };
  async componentDidMount() {
    const categories = await getCategories();
    const { user } = window.django;
    this.setState({ user, categories });
  }
  render() {
    return (
      <Router>
        <Header user={this.state.user} categories={this.state.categories} />
        <Switch>
          <Route path="/categories">
            <Categories categories={this.state.categories} />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/program-list/:category" component={ProgramList} />
          <Route path="/program/:program_id" component={Program} />
          <Route path="/">
            <Home categories={this.state.categories} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}
