import React from 'react';
import { Container, ImageContainer, InfoContainer, Title, Details, Description, Image, LoadingElement } from './styled';
import { Series } from '../seriesCarousel/interface';

export type ComponentProps = {
  series: Series;
  isLoading: boolean;
};

const SeriesDetail: React.FC<ComponentProps> = ({ series, isLoading }) => {
  if (isLoading) {
    return (
      <Container data-testid={`loading`}>
        <ImageContainer>
          <LoadingElement style={{ height: '500px', borderRadius: '0' }} />
        </ImageContainer>
        <InfoContainer>
          <Title><LoadingElement style={{ height: '2rem', width: '250px' }} /></Title>
          <Details><LoadingElement style={{ height: '3rem', width: '450px' }} /></Details>
          <Description><LoadingElement style={{ height: '300px' }} /></Description>
        </InfoContainer>
      </Container>
    );
  }

return (
  <Container>
     <ImageContainer>
          <Image src={series.image} />
        </ImageContainer>
        <InfoContainer>
          <Title>{series.title}</Title>
          <Details>{series.rating} | {series.year} | {series.genre} | {series.language}</Details>
          <Description>{series.description}</Description>
        </InfoContainer>
  </Container>
);
}

export default SeriesDetail;
