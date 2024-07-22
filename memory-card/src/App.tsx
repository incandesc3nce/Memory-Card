import './App.css';
import { useState, useEffect } from 'react';
import CardGrid from './components/CardGrid/CardGrid';
import CAT_URL from './const/CAT_URL';
import ICatData from './interfaces/CatData/ICatData';
import { useFetch } from './hooks/useFetch/useFetch';

function App() {
  const [data, setData] = useState<ICatData[]>([]);
  const fetchedData: ICatData[] = useFetch<ICatData>(CAT_URL);

  useEffect(() => {
    setData(fetchedData);
  }, [fetchedData]);
  return (
    <>
      <div className="grid-wrapper">
        <CardGrid data={data} />
      </div>
    </>
  );
}

export default App;
