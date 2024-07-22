import { useState, useEffect } from 'react';
import './CardGridStyle.scss';
import Card from '../Card/Card';
import ICatData from '../../interfaces/CatData/ICatData';
import CAT_URL from '../../const/CAT_URL';
import { useFetch } from '../../hooks/useFetch/useFetch';
import shuffleCards from './shuffleCards';

const CardGrid = () => {
  const [cards, setCards] = useState<ICatData[]>([]);
  const fetchedData: ICatData[] = useFetch<ICatData>(CAT_URL);

  useEffect(() => {
    setCards(fetchedData);
  }, [fetchedData]);

  const [clickedCards, setClickedCards] = useState<string[]>([]);

  const handleClick = ({ catId: catId }: { catId: string }) => {
    if (!clickedCards.includes(catId)) {
      setClickedCards([...clickedCards, catId]);
    }
    setCards(shuffleCards(cards));
  };

  return (
    <div className="card-grid">
      {cards.map((cat) => (
        <Card key={cat.id} cat={cat} onClick={() => handleClick({ catId: cat.id })} />
      ))}
    </div>
  );
};

export default CardGrid;
