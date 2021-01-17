import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

import './App.css';

const App = (): JSX.Element => {
  return (
    <>
      <Router>
        <Switch>
          <Navbar />
        </Switch>
      </Router>
    </>
  );
};

export default App;
