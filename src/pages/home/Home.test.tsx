import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import Home from './Home'; 

jest.mock('../../components/seriesCarousel/SeriesCarousel', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(({ series, isLoading }) => (
    <div data-testid="series-carousel">
      {isLoading ? 'Loading...' : series.map((s: any) => <div key={s.id} data-testid={`series-${s.id}`}>{s.title}</div>)}
    </div>
  )),
}));

jest.mock('../../data/data.json', () => ([
  { id: 1, title: 'Test Series 1', image: 'test-image-1.png' },
  { id: 2, title: 'Test Series 2', image: 'test-image-2.png' },
]));

describe('Home component tests', () => {
  it('renders loading initially', () => {
    render(<Home />);
    expect(screen.getByTestId('series-carousel')).toHaveTextContent('Loading...');
  });

  it('renders series after loading', async () => {
    render(<Home />);

    await waitFor(() => expect(screen.queryByText('Loading...')).toBeNull(), { timeout: 5000 });

    expect(screen.getByTestId('series-1')).toHaveTextContent('Test Series 1');
    expect(screen.getByTestId('series-2')).toHaveTextContent('Test Series 2');
  });
});
