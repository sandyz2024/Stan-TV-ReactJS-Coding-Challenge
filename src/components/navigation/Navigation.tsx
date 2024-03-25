import React from 'react';
import { StyledNav , StyledLink} from './styled';
import { RouterInfo } from './interface';
import { useLocation } from 'react-router-dom';


export type ComponentProps = {
  routers: RouterInfo[];
};

const Navigation: React.FC<ComponentProps> = ({routers}) => {
  const location = useLocation();
  const isHomeActive = location.pathname === '/' || location.pathname.startsWith('/program/');
  
  return (
    <StyledNav>
      {routers.map(router => {
        const isHomeLink = router.path === '/';
        const isActive = isHomeLink ? isHomeActive : location.pathname === router.path;

        return (
          <StyledLink
            key={router.path}
            to={router.path}
            className={isActive ? 'active' : undefined}
          >
            {router.displayName}
          </StyledLink>
        );
      })}
    </StyledNav>
  );
};

export default Navigation;
