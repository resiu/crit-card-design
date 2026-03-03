import { useState } from 'react'
import './App.css'
import CardComponent from './components/Card';
import './dist.css';

function App() {
  const [count, setCount] = useState(0)
  const cardCount = 50;
  const cardsArray = Array.from({ length: cardCount });

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(15rem, 1fr))',
        gap: '0rem',
        padding: '0rem',
      }}
    >
      {cardsArray.map((_, index) => (
        <CardComponent key={index} />
      ))}
    </div>
  );
}

export default App
