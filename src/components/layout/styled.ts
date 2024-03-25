import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  row-gap: 1rem;
`

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--dark);
  color: var(--white);
  column-gap: 30px;
`;

export const Logo = styled.h1`
  margin: 0;
  font-size: 5rem;
  font-weight: bold;
`;