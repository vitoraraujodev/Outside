import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '~/pages/Home';

import SignIn from '~/pages/SignIn';

import AttractionList from '~/pages/Attraction/List';
import AttractionStore from '~/pages/Attraction/Store';
import AttractionEdit from '~/pages/Attraction/Edit';

import RequestList from '~/pages/Request/List';
import RequestStore from '~/pages/Request/Store';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/attractions" exact component={AttractionList} isPrivate />
      <Route path="/attractions/new" component={AttractionStore} isPrivate />
      <Route
        path="/attractions/edit/:id"
        component={AttractionEdit}
        isPrivate
      />
      <Route path="/requests" exact component={RequestList} isPrivate />
      <Route path="/requests/show/:id" component={RequestStore} isPrivate />
    </Switch>
  );
}
