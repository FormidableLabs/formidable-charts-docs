import React from "react";
import { Route, IndexRoute, Redirect } from "react-router";

// Components
// TODO: UPDATE_FOR_CHARTS
import App from "victory-docs/src/components/app";
import Home from "victory-docs/src/screens/home/index";
import Docs from "victory-docs/src/screens/docs/index";
import Recipes from "victory-docs/src/screens/recipes/index";
import About from "victory-docs/src/screens/about/index";

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/docs" component={Docs}/>
    <Route path="/docs/:component" component={Docs} />
    <Route path="/recipes" component={Recipes}/>
    <Route path="/recipes/:component" component={Recipes} />
    <Route path="/about" component={About} />
    <Route path="/">
      <Redirect from="index.html" to="/" />
    </Route>
  </Route>
);
