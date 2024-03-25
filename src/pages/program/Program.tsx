import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import SeriesDetail from '../../components/seriesDetail/SeriesDetail';
import data from '../../data/data.json';
import { Series } from '../../components/seriesCarousel/interface';

const Program = () => {
  const { id } = useParams();
  const series = data.find(i=>i.id === parseInt(id!)) as Series;

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 
   
    return () => clearTimeout(timer);
  }, []); 



  if(!id || !series) throw new Error(`Series not found`);

  return (
    <SeriesDetail series={series} isLoading={isLoading}/>
  )
}


export default Program