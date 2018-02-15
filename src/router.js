import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";

import App from "./containers/App";
import Home from "./components/Home";

import ChooseEgo from './containers/ChooseEgo';
import ChooseConverser from './containers/ChooseConverser';
import Conversation from './containers/Conversation';

const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={ChooseConverser}/>
      <Route path="/ego" component={ChooseEgo}/>
      <Route path="/" component={ChooseConverser}/>
      <Route path="/conversation" component={Conversation}/>
      <Route path="*" component={ChooseConverser}/>
    </Route>
  </Router>
);

export default router;
