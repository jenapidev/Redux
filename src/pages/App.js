import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from "../components/general/Menu";
import Users from './Users';
import Posts from "./Posts";
import Tasks from "./Tasks";
import Save from "../components/Tasks/Save";

const App = () => (
  <BrowserRouter>
    <Menu/>
    <div className="margin">
      <Route exact path="/" component={ Users } />
      <Route exact path="/tasks" component={ Tasks } />
      <Route exact path="/posts/:key" component={ Posts } />
      <Route exact path="/tasks/save" component={ Save }/>
    </div>
  </BrowserRouter>
);
export default App;

