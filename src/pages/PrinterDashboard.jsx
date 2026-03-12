import { useState } from 'react';
import PrinterGrid from '../components/PrinterGrid';
import PrinterMap from '../components/PrinterMap';
import TopBar from '../components/TopBar';
import printers from '../models/model';

const PrinterDashboard = () => {
  const [query, setQuery] = useState('');
  const [mode, setMode] = useState('cards');

  const filteredPrinters = printers.filter((p) =>
    p.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').includes(query.toLowerCase().replace(/[^a-z0-9\s]/g, ''))
  );

  return (
    <>
      <TopBar onSearch={setQuery} mode={mode} onModeChange={setMode} />
      {mode === 'cards' ? (
        <PrinterGrid printers={filteredPrinters} />
      ) : (
        <PrinterMap printers={filteredPrinters} />
      )}
    </>
  );
};

export default PrinterDashboard;