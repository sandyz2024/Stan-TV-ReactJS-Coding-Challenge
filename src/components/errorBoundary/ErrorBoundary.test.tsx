import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

const ProblematicChild = () => {
  throw new Error('Test Error');
};

describe('ErrorBoundary tests', () => {
  it('displays children when there is no error', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <div>Safe Content</div>
      </ErrorBoundary>
    );
    expect(getByText('Safe Content')).toBeInTheDocument();
  });

  it('displays an error message when a child component throws an error', () => {
    const consoleSpy = jest.spyOn(console, 'error');
    consoleSpy.mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ProblematicChild />
      </ErrorBoundary>
    );

    expect(screen.getByText('An unknown error occurred. Please try again later.')).toBeInTheDocument();
   
    consoleSpy.mockRestore();
  });
});
