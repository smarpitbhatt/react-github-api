import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';

import Home from './components/home';
import Profile from './components/profile';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/profile' exact component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
