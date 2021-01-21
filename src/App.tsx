import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/HomePage';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import './App.css';

const App = (): JSX.Element => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
