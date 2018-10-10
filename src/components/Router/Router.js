import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "../../App";
import BookDetails from "../BookDetails/BookDetails";
import NotFound from "../NotFound/NotFound";

const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/book/:id" component={BookDetails} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default RouterComponent;
