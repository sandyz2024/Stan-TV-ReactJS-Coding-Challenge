import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  @media (max-width: 1280px) { /* Adjust for 720p screens */
    justify-content: center;
  }
`;

export const CarouselItem = styled.div`
  flex: 0 0 auto;
  width: calc(100% / 6); 
  position: relative;
  scroll-snap-align: start;
  margin: 0.3rem;
  padding: 0.1rem; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  outline: none;
  cursor: pointer;

  &:focus {
    border: 2px solid #008dff;
  }

  @media (max-width: 1280px) {
    width: calc(100% / 6 );
  }
`;


export const ItemImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;


export const ItemLoadingPlaceholder = styled.div`
  width: 100%;
  height: 0;
  padding-top: 100%; 
  background-color: var(--loading-grey); 
  object-fit: cover;
`;