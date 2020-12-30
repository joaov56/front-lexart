import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Create from '../pages/Create';
import Edit from '../pages/Edit';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/create" exact component={Create} />
    <Route path="/edit/:id+" exact component={Edit} />
  </Switch>
);
export default Routes;
