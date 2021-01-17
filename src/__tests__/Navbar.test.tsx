import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Navbar from '../components/navbar/Navbar';

describe('Navbar Component', () => {
  test('navigate to home, products and services', () => {
    const history = createMemoryHistory();

    // mock push function
    history.push = jest.fn();

    render(
      <Router history={history}>
        <Navbar />
      </Router>,
    );

    const home = screen.getByText(/home/i);
    const products = screen.getByText(/products/i);
    const services = screen.getByText(/services/i);

    expect(home).toBeInTheDocument();
    expect(products).toBeInTheDocument();
    expect(services).toBeInTheDocument();

    fireEvent.click(home);
    // spy on push calls, assert on url (parameter)
    expect(history.push).toHaveBeenCalledWith('/');

    fireEvent.click(products);
    expect(history.push).toHaveBeenCalledWith('/products');

    fireEvent.click(services);
    expect(history.push).toHaveBeenCalledWith('/services');
  });
});
