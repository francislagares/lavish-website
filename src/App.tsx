import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/HomePage';
import Services from './pages/services/Services';
import Products from './pages/products/Products';
import SignUp from './pages/signup/SignUp';
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
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
