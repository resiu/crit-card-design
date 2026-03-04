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
      {/* Placeholder dashboard top bar */}
      <div className="fixed top-0 left-0 w-full h-14 bg-[#811311] text-white flex items-center px-4 shadow-lg z-50">
        <span className="font-barlow text-xl">Dashboard Place Holder</span>
      </div>

      <div className='pt-20'> 
        {/* Masonry-style columns to prevent gap in expanded view with grid*/}
      <div className="columns-[15rem] gap-4">
        {cardsArray.map((_, index) => (
          <div key={index} className="break-inside-avoid mb-4">
            <CardComponent />
          </div>
        ))}
      </div>

    </div>
  </>
);

}

export default App
