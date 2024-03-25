import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LayoutComponent from './Layout';
import { RouterInfo } from '../navigation/interface';

jest.mock('../navigation/Navigation', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(({ routers }) => (
    <div data-testid="mock-navigation">
      {routers.map((router:any, index: number) => (
        <a key={index} href={router.path}>{router.displayName}</a> 
      ))}
    </div>
  )),
}));

describe('LayoutComponent tests', () => {
  const mockRouters: RouterInfo[] = [
    { path: '/home', displayName: 'Home' },
    { path: '/about', displayName: 'About' },
  ];
  const mockChildren = <div data-testid="mock-children">Test Content</div>;

  it('renders correctly with given routers and children', () => {
    render(<LayoutComponent routers={mockRouters}>{mockChildren}</LayoutComponent>);
  
    const navigationElement = screen.getByTestId('mock-navigation');
    expect(navigationElement).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();

    const childrenContent = screen.getByTestId('mock-children');
    expect(childrenContent).toBeInTheDocument();
    expect(childrenContent).toHaveTextContent('Test Content');

  });
});
