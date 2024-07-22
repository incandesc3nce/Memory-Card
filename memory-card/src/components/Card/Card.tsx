import ICatData from '../../interfaces/CatData/ICatData';
import Tilt from 'react-parallax-tilt';
import './CardStyle.scss';

const Card = ({ cat, onClick }: { cat: ICatData; onClick: (catId: string) => void }) => {
  const imageUrl = cat.url;

  return (
    <Tilt className="card-container">
      <button
        className="card"
        onClick={() => {
          onClick(cat.id);
        }}
      >
        <img src={imageUrl} alt="cat" />
      </button>
    </Tilt>
  );
};

export default Card;
