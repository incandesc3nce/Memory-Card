import { useState } from 'react';
import './CardGridStyle.scss';
import Card from '../Card/Card';
import ICatData from '../../interfaces/CatData/ICatData';

const CardGrid = ({ data }: { data: ICatData[] }) => {
  const cards = data;
  const [clickedCards, setClickedCards] = useState<string[]>([]);

  const handleClick = ({ catId: catId }: { catId: string }) => {
    if (!clickedCards.includes(catId)) {
      setClickedCards([...clickedCards, catId]);
    }
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
