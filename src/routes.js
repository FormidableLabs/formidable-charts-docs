import React from "react";
import { Route, IndexRoute, Redirect } from "react-router";

// FormidableCharts Components
import App from "./components/app";
import Home from "./screens/home/index";
import About from "./screens/about/index";
import Docs from "./screens/docs/index";

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/about/" component={About} />
    <Route path="/docs/" component={Docs}/>
    <Route path="/docs/:component/" component={Docs} />
    <Route path="/">
      <Redirect from="index.html" to="/" />
    </Route>
  </Route>
);
