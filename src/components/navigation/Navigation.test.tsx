import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';
import { RouterInfo } from './interface'; // Make sure the path is correct

describe('Navigation Component', () => {
    const routers: RouterInfo[] = [
        { path: '/home', displayName: 'Home' },
        { path: '/program', displayName: 'Program' }
    ];

    it('should render all given router links', () => {
        render(
            <BrowserRouter>
                <Navigation routers={routers} />
            </BrowserRouter>
        );

        // Check if all links are rendered
        routers.forEach(router => {
            expect(screen.getByText(router.displayName)).toBeInTheDocument();
            expect(screen.getByText(router.displayName)).toHaveAttribute('href', router.path);
        });
    });
});
