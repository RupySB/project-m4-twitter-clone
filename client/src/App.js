import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import Sidebar from "./Sidebar";

import HomeFeed from "./HomeFeed";
import Bookmarks from "./Bookmarks";
import Notifications from "./Notifications";
import Profile from "./Profile";
import TweetDetails from "./TweetDetails";

import { COLORS } from "./constants";

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <HomeFeed />
        </Route>
        <Route exact path="/notifications">
          <Notifications />
        </Route>
        <Route exact path="/bookmarks">
          <Bookmarks />
        </Route>
        <Route exact path="/tweet/:tweetId">
          <TweetDetails />
        </Route>
        <Route exact path="/:profileId">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
