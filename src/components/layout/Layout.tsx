import React from 'react';

import Navigation from '../navigation/Navigation';
import { RouterInfo } from '../navigation/interface';
import { Navbar, Logo, Container} from './styled';



export type ComponentProps = {
  routers: RouterInfo[];
  children: React.ReactNode;
}
const LayoutComponent: React.FC<ComponentProps> = ({routers, children}) => {
  return (
    <Container>
      <Navbar>
        <Logo>Stan.</Logo>
        <Navigation routers={routers}/>
      </Navbar>
    {children}
    </Container>
  );
};

export default LayoutComponent;
