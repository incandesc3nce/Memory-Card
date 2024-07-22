import { useState, useEffect } from 'react';
import './CardGridStyle.scss';
import Card from '../Card/Card';
import ICatData from '../../interfaces/CatData/ICatData';
import CAT_URL from '../../const/CAT_URL';
import { useFetch } from '../../hooks/useFetch/useFetch';
import shuffleCards from './shuffleCards';

type CardGridProps = {
  currentScore: number;
  setCurrentScore: React.Dispatch<React.SetStateAction<number>>;
};

const CardGrid = ({ currentScore, setCurrentScore }: CardGridProps) => {
  const [cards, setCards] = useState<ICatData[]>([]);
  const fetchedData: ICatData[] = useFetch<ICatData>(CAT_URL);

  useEffect(() => {
    setCards(fetchedData);
  }, [fetchedData]);

  const [clickedCards, setClickedCards] = useState<string[]>([]);

  const handleClick = ({ catId: catId }: { catId: string }) => {
    if (!clickedCards.includes(catId)) {
      setClickedCards([...clickedCards, catId]);
      setCurrentScore(currentScore + 1);
    } else {
      setCurrentScore(0);
      setClickedCards([]);
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
