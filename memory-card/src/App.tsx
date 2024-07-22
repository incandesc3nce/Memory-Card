import './AppStyle.scss';
import { useState } from 'react';
import Header from './components/Header/Header';
import CardGrid from './components/CardGrid/CardGrid';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  
  return (
    <>
    <div className='header-wrapper'>
      <Header currentScore={currentScore} highScore={highScore} />
    </div>
      <div className="grid-wrapper">
        <CardGrid />
      </div>
    </>
  );
}

export default App;
