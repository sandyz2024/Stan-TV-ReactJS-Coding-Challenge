import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
`;

export const StyledLink = styled(NavLink)`
  color: var(--dark-grey);
  margin-right: 1rem;
  text-decoration: none;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: var(--white); // active color
  }
`;