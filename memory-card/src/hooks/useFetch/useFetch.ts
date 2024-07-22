import { useState, useEffect } from 'react';
import ICatData from '../../interfaces/CatData/ICatData';

export const useFetch = (url: string) => {
  const [data, setData] = useState([] as ICatData[]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return data;
};
