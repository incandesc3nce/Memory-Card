import ICatData from '../../interfaces/CatData/ICatData';

const Card = ({ cat, onClick }: { cat: ICatData; onClick: (catId: string) => void }) => {
  const imageUrl = cat.url;

  return (
    <button className="card" onClick={() => onClick}>
      <img src={imageUrl} alt="cat" />
    </button>
  );
};

export default Card;
