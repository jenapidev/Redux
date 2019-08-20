import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from "../components/general/Menu";
import Users from './Users';
import Posts from "./Posts";
import Assignments from "./Assignments"

const App = () => (
  <BrowserRouter>
    <Menu/>
    <div className="margin">
      <Route exact path="/" component={ Users } />
      <Route exact path="/tareas" component={ Assignments } />
      <Route exact path="/posts/:key" component={ Posts } />
    </div>
  </BrowserRouter>
);
export default App;

