import React, {useEffect, useState} from 'react'
import  SeriesCarousel  from '../../components/seriesCarousel/SeriesCarousel';
import data from '../../data/data.json';
import { Series } from '../../components/seriesCarousel/interface';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [series, setSeries] = useState<Series[]>([]);

  useEffect(() => {
    // similar a call api to load data so could see the loading state
    const timer = setTimeout(() => {
      setIsLoading(false); 
      setSeries(data); 
    }, 1000); 

    
    return () => clearTimeout(timer);
  }, []); 


  return  (
    <SeriesCarousel series={series} isLoading={isLoading}/>
  )
}


export default Home