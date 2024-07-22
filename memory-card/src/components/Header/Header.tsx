import './HeaderStyle.scss';

const Header = ({ currentScore, highScore }: { currentScore: number; highScore: number }) => {
  return (
    <header>
      <div className='title'>
        <h1>Cats Memory Game</h1>
        <p>Click on an image to earn points, but don't click on any more than once!</p>
      </div>
      <div className="score">
        <p>Current score: {currentScore}</p>
        <p>High score: {highScore}</p>
      </div>
    </header>
  );
};

export default Header;
