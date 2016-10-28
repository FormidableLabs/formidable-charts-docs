import React from "react";
import { Route, IndexRoute, Redirect } from "react-router";

// Components
import App from "victory-docs/src/components/app";
import Home from "./screens/home/index";
import About from "./screens/about/index";

// TODO: UPDATE_FOR_CHARTS
// <Route path="/docs" component={Docs}/>
// <Route path="/docs/:component" component={Docs} />
// <Route path="/recipes" component={Recipes}/>
// <Route path="/recipes/:component" component={Recipes} />
module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/about" component={About} />
    <Route path="/">
      <Redirect from="index.html" to="/" />
    </Route>
  </Route>
);
