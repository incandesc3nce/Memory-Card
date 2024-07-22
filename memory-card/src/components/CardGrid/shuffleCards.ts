import ICatData from '../../interfaces/CatData/ICatData';

const shuffleCards = (cards: ICatData[]) => {
  const copy = [...cards];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
};

export default shuffleCards;
