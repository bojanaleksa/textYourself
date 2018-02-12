import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";

import App from "./containers/App";
import Home from "./components/Home";

import ChooseEgo from './containers/ChooseEgo';
import ChooseConverser from './containers/ChooseConverser';
import Conversation from './containers/Conversation';
import CreateEgo from './containers/CreateEgo';

const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/egos" component={ChooseEgo}/>
      <Route path="/converser" component={ChooseConverser}/>
      <Route path="/newego" component={CreateEgo}/>
      <Route path="/conversation" component={Conversation}/>
      <Route path="*" component={Home}/>
    </Route>
  </Router>
);

export default router;
