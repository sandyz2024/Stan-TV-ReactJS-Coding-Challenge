import React, { useState, useEffect, useRef } from 'react';
import { CarouselContainer, CarouselItem, ItemImage, ItemLoadingPlaceholder } from './styled';
import { Series } from './interface';
import { useNavigate } from 'react-router-dom';

export type ComponentProps = {
  series: Series[];
  isLoading: boolean;
};
 
const SeriesCarousel: React.FC<ComponentProps> = ({ series, isLoading }) => {
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const visibleSeries = series.slice(visibleStartIndex, visibleStartIndex + 6);

  const navigate = useNavigate();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>, itemId: number) => {
    switch (event.key) {
      case 'ArrowLeft':
        updateVisibleIndex(visibleStartIndex - 1);
        break;
      case 'ArrowRight':
        updateVisibleIndex(visibleStartIndex + 1);
        break;
      case 'Enter':
        navigate(`/program/${itemId}`);
        break;
      default:
        break;
    }
  };

  const updateVisibleIndex = (newIndex: number) => {
    const clampedIndex = Math.max(0, Math.min(newIndex, series.length - 6));
    setVisibleStartIndex(clampedIndex);

    if (itemRefs.current[clampedIndex]) {
      itemRefs.current[clampedIndex]?.focus();
    }
  };

  useEffect(() => {
    if (!isLoading && itemRefs.current[0]) {
      itemRefs.current[0].focus();
    }
  }, [isLoading]);

  return (
    <CarouselContainer>
      {isLoading ? (
        Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem
            as="article"
            role="article"
            key={`loading-${index}`}
            tabIndex={0}
            data-testid={`loading-${index}`}
          >
            <ItemLoadingPlaceholder />
          </CarouselItem>
        ))
      ) : (
        visibleSeries.map((item: Series, index: number) => (
          <CarouselItem
          as="article" 
          role="article" 
          key={item.id} 
          data-testid={`carousel-${item.id}`}  
          tabIndex={0}   
          ref={el => itemRefs.current[index] = el}  
          onKeyDown={(e) => handleKeyDown(e, item.id)} 
          // onClick={() => navigate(`/program/${item.id}`)}
          >
            <ItemImage src={item.image} alt={item.title} />
          </CarouselItem>
        ))
      )}
    </CarouselContainer>
  );
};

export default SeriesCarousel;
