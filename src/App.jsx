import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardComponent from './components/Card';
import './dist.css';

function App() {
  const [count, setCount] = useState(0)
  const cardCount = 50;
  const cardsArray = Array.from({ length: cardCount });

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-4 p-4">
      {cardsArray.map((_, index) => (
          <CardComponent key={index} />
      ))}
    </div>
  );
}

export default App
