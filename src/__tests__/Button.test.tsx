import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from '../components/button/Button';

describe('Button Component', () => {
  test('render button component', () => {
    render(<Button>SUBMIT</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/submit/i);
  });
});
