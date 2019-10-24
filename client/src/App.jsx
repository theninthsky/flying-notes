import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import NavigationBar from './components/Navigation/NavigationBar';
import Notes from './containers/Notes/Notes';
import './App.scss';

const App = () => {
  useEffect(() => {
    console.log('[App] rendered!');
  });

  return (
    <>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Notes} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
