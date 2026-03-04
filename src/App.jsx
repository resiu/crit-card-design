import { useState } from 'react'
import './App.css'
import CardComponent from './components/Card';
import './dist.css';

function App() {
  const [count, setCount] = useState(0)
  const cardCount = 50;
  const cardsArray = Array.from({ length: cardCount });

  return (
    <>
      {/* Fixed dashboard top bar */}
      <div className="fixed top-0 left-0 w-full h-14 bg-[#811311] text-white flex items-center px-4 shadow-lg z-50">
        <span className="font-barlow text-xl">Dashboard Place Holder</span>
      </div>

      <div className='pt-14'>
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
      </div>
    </>

  );
}

export default App
