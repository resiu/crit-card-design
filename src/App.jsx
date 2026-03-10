import { useState } from 'react';
import PrinterGrid from './components/PrinterGrid';
import SearchBar from './components/SearchBar';
import initialPrinters from './models/model';
import './dist.css';

function App() {
  const [query, setQuery] = useState('');
  const [printers, setPrinters] = useState(
  initialPrinters.map(p => ({ ...p, isFavorited: false }))
);

  function toggleFavorite(printerId, pressed) {
    setPrinters(prev =>
      prev.map(p =>
        p.printerId === printerId ? { ...p, isFavorited: pressed } : p
      )
    );
  }

  const filteredPrinters = printers
  .filter((p) =>
    p.title.toLowerCase().replace(/[^a-z0-9\s]/g, '')
      .includes(query.toLowerCase().replace(/[^a-z0-9\s]/g, ''))
  )
  .sort((a, b) => {
    // CHANGED: cast booleans to numbers (true=1, false=0) so subtraction works correctly
    if (a.isFavorited !== b.isFavorited) {
      return Number(b.isFavorited) - Number(a.isFavorited);
    }
    // Then alphabetical
    return a.title.localeCompare(b.title);
  });

  return (
    <>
      <SearchBar onChange={setQuery} />
      <PrinterGrid
        printers={filteredPrinters}
        onToggleFavorite={toggleFavorite}
      />
    </>
  );
}

export default App;