import React from 'react';
import { MemoryRouter} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App'; 

jest.mock('./pages/home/Home', () => jest.fn().mockImplementation(() => <div>Home Component</div>));
jest.mock('./pages/program/Program', () => jest.fn().mockImplementation(() => <div>Program Component</div>));

describe('App component tests', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Home Component')).toBeInTheDocument(); 
  });
});
