import styled, {css} from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: var(--dark);
  color: var(--white);
  padding: 20px;
  flex-direction: column;
  max-width: 80%;

  @media (min-width: 768px) {
    flex-direction: row; 
  }

  @media (min-width: 1280px) { 
    flex-direction: row;
  }
`;

export const ImageContainer = styled.div`
  flex-basis: 100%;
  max-width: 100%; 
  order: 1;

  @media (min-width: 768px) { 
    flex-basis: 50%;
    max-width: 50%; 
  }

  @media (min-width: 1280px) { 
    flex-basis: 40%; 
    max-width: 400px;
  }
`;

export const InfoContainer = styled.div`
  flex-basis: 100%; 
  padding: 20px;
  order: 2;

  @media (min-width: 768px) { 
    flex-basis: 50%; 
  }

  @media (min-width: 1280px) {
    flex-basis: 60%; 
  }
`;

export const Title = styled.h1`
  margin: 0;
`;

export const Details = styled.div`
  font-weight: bold;
`;

export const Description = styled.div`
  margin-top: 20px;
  font-size: var(--title);
`;

export const Image = styled.img`
  width: 100%; 
  height: auto;
  display: block; 
`;


export const LoadingElement = styled.div`
  background-color: var(--loading-grey); 
  width: 100%;
  height: 20px; 
  margin: 5px 0;
  border-radius: 4px;
`;