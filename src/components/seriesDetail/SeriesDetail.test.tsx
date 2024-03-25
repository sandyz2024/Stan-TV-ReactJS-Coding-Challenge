import React from 'react';
import { render, screen } from '@testing-library/react';
import SeriesDetail from './SeriesDetail';
import { Series } from '../seriesCarousel/interface';

describe('SeriesDetail', () => {
  const mockSeries: Series =  {
    "id": 67298,
    "title": "Dr. Death",
    "description": "Dr. Death tells the terrifying true story of Dr. Christopher Duntsch (Joshua Jackson), a brilliant but sociopathic neurosurgeon whose patients leave his operating room either permanently maimed or dead, and the two doctors who set out to stop him.",
    "type": "series",
    "image": "https://streamcoimg-a.akamaihd.net/000/672/98/67298-PosterArt-2039396c9e27d6271c96776414d6a38c.jpg?resize=512px:*&quality=75&preferredFormat=image/jpeg",
    "rating": "MA 15+",
    "genre": "Drama",
    "year": 2021,
    "language": "English"
  }

  it('renders loading state correctly', () => {
    render(<SeriesDetail isLoading={true} series={mockSeries} />);
    expect(screen.queryByText(mockSeries.title)).not.toBeInTheDocument();
  });

  it('renders series information correctly', () => {
    render(<SeriesDetail isLoading={false} series={mockSeries} />);
    expect(screen.getByText(mockSeries.title)).toBeInTheDocument();
    expect(screen.getByText(`${mockSeries.rating} | ${mockSeries.year} | ${mockSeries.genre} | ${mockSeries.language}`)).toBeInTheDocument();
    expect(screen.getByText(mockSeries.description)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', mockSeries.image);
  });

  it('handles missing series data gracefully', () => {
    render(<SeriesDetail isLoading={false} series={{} as Series} />);
    expect(screen.queryByText(/undefined/)).not.toBeInTheDocument();
  });
});
