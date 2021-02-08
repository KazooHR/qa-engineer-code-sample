import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Todos } from "./Todos";

export function Routes() {
  return (
    <Router>
      <Route path="/" exact component={Todos} />
    </Router>
  );
}
