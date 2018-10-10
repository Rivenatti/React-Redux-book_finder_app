import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "../../App";
import BookDetails from "../BookDetails/BookDetails";

const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/book/:id" component={BookDetails} />
      </Switch>
    </Router>
  );
};

export default RouterComponent;
