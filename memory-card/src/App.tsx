import './AppStyle.scss';
import { useState } from 'react';
import Header from './components/Header/Header';
import CardGrid from './components/CardGrid/CardGrid';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  if (currentScore > highScore) {
    setHighScore(currentScore);
  }
  return (
    <>
      <div className="header-wrapper">
        <Header currentScore={currentScore} highScore={highScore} />
      </div>
      <div className="grid-wrapper">
        <CardGrid currentScore={currentScore} setCurrentScore={setCurrentScore} />
      </div>
    </>
  );
}

export default App;
