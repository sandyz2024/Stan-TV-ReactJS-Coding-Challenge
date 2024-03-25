import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import { RouterInfo } from './components/navigation/interface';
import  Home from './pages/home/Home';
import Program from './pages/program/Program';
import LayoutComponent from './components/layout/Layout';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

const App: React.FC = () => {
  const routers: RouterInfo[] = [{path: '/', displayName: 'Home'}, {path: '/tv', displayName: 'TV show'}, {path: '/movies', displayName: 'Movies'}]
  return (
    <Router>
     <LayoutComponent routers={routers}>
       <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program/:id" element={<Program />} />
        </Routes>
        </ErrorBoundary>
      </LayoutComponent>
    </Router>
  );
};

export default App;
