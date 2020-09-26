import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Home from '../pages/Home';
import Planos from '../pages/Planos';
import Contato from '../pages/Contato';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/plano-residencial" exact component={Planos} />
        <Route path="/contato" exact component={Contato} />
      </Switch>
    </BrowserRouter>
  );
}
