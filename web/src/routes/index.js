import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '~/pages/Home';

import SignIn from '~/pages/SignIn';

import AttractionList from '~/pages/Attraction/List';
import AttractionStore from '~/pages/Attraction/Store';
import AttractionEdit from '~/pages/Attraction/Edit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/attractions" component={AttractionList} />
      <Route path="/attractions/new" component={AttractionStore} />
      <Route path="/attractions/edit/:id" component={AttractionEdit} />
    </Switch>
  );
}
