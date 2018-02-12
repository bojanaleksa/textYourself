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
      <IndexRoute component={ChooseEgo}/>
      <Route path="/" component={ChooseEgo}/>
      <Route path="/converser" component={ChooseConverser}/>
      <Route path="/conversation" component={Conversation}/>
      <Route path="*" component={ChooseEgo}/>
    </Route>
  </Router>
);

export default router;
