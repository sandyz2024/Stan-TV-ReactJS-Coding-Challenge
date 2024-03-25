import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import Program from './Program';
import { BrowserRouter } from 'react-router-dom';
import * as reactRouterDom from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), 
  useParams: jest.fn(),
}));

jest.mock('../../components/seriesDetail/SeriesDetail', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(({ isLoading }) => (
    isLoading ? <div>Loading...</div> : <div>Series Detail</div>
  )),
}));

jest.mock('../../data/data.json', () => ([{ id: 1, title: 'Test Series' }]));


describe('Program component tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading initially and then series detail', async () => {
    jest.spyOn(reactRouterDom, 'useParams').mockReturnValue({ id: '1' });

    render(<Program />, { wrapper: BrowserRouter });
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Series Detail')).toBeInTheDocument();
    });
  });

  it('throws an error if series not found', async () => {
    jest.spyOn(reactRouterDom, 'useParams').mockReturnValue({ id: '999' });

    const originalError = console.error;
    console.error = jest.fn();

    expect(() => render(<Program />, { wrapper: BrowserRouter }))
      .toThrow('Series not found');

    console.error = originalError;
  });
});
