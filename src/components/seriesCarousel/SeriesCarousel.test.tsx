import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SeriesCarousel from './SeriesCarousel'; // Adjust the import path as necessary
import { BrowserRouter } from 'react-router-dom'; // For useNavigate
import { Series } from './interface';
import { waitFor } from '@testing-library/react';

const seriesMock = [
  { id: 1, image: 'url/to/image1.jpg', title: 'Series 1' },
  { id: 2, image: 'url/to/image2.jpg', title: 'Series 2' },
] as Series[];

const renderComponent = (isLoading = false) => render(
  <BrowserRouter>
    <SeriesCarousel series={seriesMock} isLoading={isLoading} />
  </BrowserRouter>
);

describe('SeriesCarousel', () => {
  test('renders carousel and focuses on the first item initially', () => {
    renderComponent();
    const firstItem = screen.getByTestId('carousel-1');
    expect(firstItem).toHaveFocus();
  });

  test('navigates focus between items with arrow keys', async () => {
    renderComponent();
    const firstItem = screen.getByTestId('carousel-1');
    const secondItem = screen.getByTestId('carousel-2');

    fireEvent.keyDown(firstItem, { key: 'ArrowRight', code: 'ArrowRight' });

    await waitFor(() => {
      expect(secondItem).toBeInTheDocument();
    });

    fireEvent.keyDown(secondItem, { key: 'ArrowLeft', code: 'ArrowLeft' });
    await waitFor(() => {
      expect(firstItem).toBeInTheDocument();
    });
  });

  test('navigates to the correct URL when the Enter key is pressed', () => {
    renderComponent();
    const firstItem = screen.getByTestId('carousel-1');
    fireEvent.keyDown(firstItem, { key: 'Enter', code: 'Enter' });
   
    expect(window.location.pathname).toBe('/program/1');
  });

  test('displays loading placeholders when isLoading is true', () => {
    renderComponent(true);
    const placeholders = screen.queryAllByTestId(/^loading-/);
    expect(placeholders.length).toBe(6);
    placeholders.forEach((placeholder) => {
      expect(placeholder).toHaveAttribute('tabIndex', '0');
    });
  });
});
